import React, { Component } from "react";
import { Avatar, Button, message } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
export class Logined extends Component {
  componentDidMount() {
    message.destroy();
  }
  render() {
    return (
      <div className="Logined">
        <Avatar icon="user" />
        <span className="Logined-avatar">welcome blog</span>
        <Link to="/mangement">
          <Button icon="menu-unfold">进入管理页面</Button>
        </Link>
      </div>
    );
  }
}

export default Logined;
