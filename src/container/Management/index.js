import React, { Component } from "react";
import { Layout, Menu, Icon, Button } from "antd";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./Home";
import Comment from "./Comment";
import Tag from "./Tag";
import User from "./User";
import Article from "./Article";
import PostArticle from "./PostArticle";
import "./index.css";
class Management extends Component {
  state = {
    isRoot: false
  };
  componentDidMount() {
    if (document.cookie.split("=")[1] == "root") {
      this.setState({
        isRoot: true
      });
    }
  }
  renderData() {
    const { Content, Sider } = Layout;
    let { isRoot } = this.state;
    return (
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <NavLink to="/mangement/home">
                <Icon type="home" />
                <span className="nav-text">首页</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/mangement/post">
                <Icon type="audit" />
                <span className="nav-text">发文</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to="/mangement/tags">
                <Icon type="tags" />
                <span className="nav-text">标签管理</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <NavLink to="/mangement/comment">
                <Icon type="solution" />
                <span className="nav-text">评论管理</span>
              </NavLink>
            </Menu.Item>
            {isRoot && (
              <Menu.Item key="5">
                <NavLink to="/mangement/user">
                  <Icon type="team" />
                  <span className="nav-text">用户管理</span>
                </NavLink>
              </Menu.Item>
            )}
            {isRoot && (
              <Menu.Item key="6">
                <NavLink to="/mangement/article">
                  <Icon type="copy" />
                  <span className="nav-text">用户发文管理</span>
                </NavLink>
              </Menu.Item>
            )}
          </Menu>
          <NavLink to="/home">
            <Button type="primary" className="back" icon="rollback">
              返回
            </Button>
          </NavLink>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              style={{ padding: 24, background: "#fff", textAlign: "center" }}
            >
              <Switch>
                <Route path="/mangement/home" component={Home} />
                <Route path="/mangement/post" component={PostArticle} />
                {isRoot && (
                  <Route path="/mangement/article" component={Article} />
                )}
                <Route path="/mangement/comment" component={Comment} />
                <Route path="/mangement/tags" component={Tag} />
                {isRoot && <Route path="/mangement/user" component={User} />}
                <Redirect to="/mangement/home" />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
  render() {
    if (document.cookie) {
      return this.renderData();
    } else {
      return <Redirect to="/home" />;
    }
  }
}
export default connect(store => store)(Management);
