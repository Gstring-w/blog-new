import React, { Component } from "react";
import { Avatar, Button, message } from "antd";
import { SetCookie } from "../../reducers/action/windowScroll";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";
export class Logined extends Component {
  componentDidMount() {
    message.destroy();
  }
  hanleCancel = () => {
    this.props.SetCookie(false);
    document.cookie = null;
  };
  render() {
    return (
      <div className="Logined">
        <Avatar icon="user" />
        <span className="Logined-avatar">welcome blog</span>
        <Link to="/mangement">
          <Button icon="menu-unfold">进入管理页面</Button>
        </Link>
        <br />
        <Button icon="logout" onClick={this.hanleCancel}>
          注销登录
        </Button>
      </div>
    );
  }
}

export default connect(
  store => store,
  { SetCookie }
)(Logined);
