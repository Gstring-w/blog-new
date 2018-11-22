import React, { Component } from "react";

import "./index.css";

export default class ToTop extends Component {
  handleClick = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div className="toTop" onClick={this.handleClick}>
        <span className="iconfont icon-huidaodingbu toTop-icon" />
        <span className="toTop-content">回到顶部</span>
      </div>
    );
  }
}
