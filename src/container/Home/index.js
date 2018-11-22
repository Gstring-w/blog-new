import React, { Component } from "react";
import { Layout } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HeaderBlog from "./DataRender/Header";
import TopBar from "./DataRender/TopBar";
import DataRender from "./DataRender";
import DataDetails from "./DataDetails";

import throttle from "../../utils/throttle";
import {
  showToTop,
  showLogin,
  showPopover
} from "../../reducers/action/windowScroll";
import "./index.css";
class Home extends Component {
  state = {
    data_topBar: [
      {
        content: "首页",
        to: "home/"
      },
      {
        content: "html/css/js",
        to: "home/123"
      },
      {
        content: "散文",
        to: "home"
      },
      {
        content: "工具",
        to: "home"
      }
    ]
  };
  componentDidMount() {
    window.onscroll = throttle(this.hanleScroll, 300);
  }
  hanleScroll = () => {
    let moveY = window.scrollY;
    this.props.showPopover(true);
    // //显示在topBar上的登录 注册信息

    if (moveY > 500) {
      this.props.showLogin(true);
    } else if (moveY < 500) {
      this.props.showLogin(false);
    }
    // //显示回到顶部
    if (moveY > 520) {
      this.props.showToTop(true);
    } else {
      this.props.showToTop(false);
    }
  };
  handleClick = () => {
    this.props.showPopover(true);
  };
  render() {
    const { Header } = Layout;
    const { data_topBar } = this.state;
    return (
      <div>
        <Layout className="web-wrapper">
          <Header className="web-header">
            <div className="web-header-content">
              <HeaderBlog />
              <TopBar data_topBar={data_topBar} />
            </div>
          </Header>
          <div onClick={this.handleClick}>
            <Route path="/home" component={DataRender} />
          </div>
        </Layout>
      </div>
    );
  }
}
export default connect(
  store => store,
  { showToTop, showLogin, showPopover }
)(Home);
