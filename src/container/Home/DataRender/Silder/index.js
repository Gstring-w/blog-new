import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Menu } from "antd";
import { connect } from "react-redux";
import MenuBlog from "../../../../components/Menu";
import "./index.css";
import Login from "./login";
import Registered from "./registered";
import changeLogin from "../../../../reducers/action/changeLogin";
import ToTop from "../../../../components/ToTop";
import Logined from "../../../../components/Logined";
class Silder extends Component {
  state = {
    cookie: false
  };
  handleClickLogin() {
    this.props.changeLogin(true);
  }
  handleClickRegisered() {
    this.props.changeLogin(false);
  }
  onLogined = () => {
    this.setState({
      cookie: true
    });
  };
  handleStatus = () => {
    const { isChangeLogin, isShowToTop, cookie } = this.props;
    if (cookie) {
      return <Logined />;
    } else {
      if (isChangeLogin) {
        return <Login onLogined={this.onLogined} />;
      } else {
        return <Registered />;
      }
    }
  };
  handleStatusTop = () => {
    let { cookie } = this.props;
    if (!cookie) {
      return (
        <Menu
          mode="horizontal"
          className="TopBar-wrapper"
          style={{ height: "30px", background: "#fff" }}
          defaultSelectedKeys={["0"]}
        >
          <Menu.Item
            key={0}
            className="TopBar-wrapper-item active"
            onClick={this.handleClickLogin.bind(this)}
          >
            登录
          </Menu.Item>
          <Menu.Item
            key={1}
            className="TopBar-wrapper-item active"
            onClick={this.handleClickRegisered.bind(this)}
          >
            注册
          </Menu.Item>
        </Menu>
      );
    } else {
      return (
        <Menu
          mode="horizontal"
          className="TopBar-wrapper"
          style={{ height: "30px", background: "#fff" }}
          defaultSelectedKeys={["0"]}
        >
          <Menu.Item
            key={1}
            className="TopBar-wrapper-item active"
            onClick={this.handleClickRegisered.bind(this)}
          >
            用户：{cookie}
          </Menu.Item>
        </Menu>
      );
    }
  };
  renderInitialization() {
    const { isShowToTop } = this.props;
    return (
      <div className="Silder">
        {this.handleStatusTop()}
        {this.handleStatus()}
        {isShowToTop ? <ToTop /> : ""}
      </div>
    );
  }
  render() {
    return <div className="Silder1">{this.renderInitialization()}</div>;
  }
}
export default connect(
  store => store,
  { changeLogin }
)(Silder);
