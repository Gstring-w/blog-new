import React, { Component } from "react";
import { BackTop } from "antd";
import "./index.css";

export default class ToTop extends Component {
  handleClick = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div>
        <BackTop />
      </div>
    );
  }
}
