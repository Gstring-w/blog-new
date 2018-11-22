import React, { Component } from "react";
import { Spin } from "antd";
import "./index.css";
export default class DataDetails extends Component {
  state = {
    data: false
  };
  componentDidMount = () => {
    console.log(this.props.match);
  };
  renderData() {
    const { data } = this.state;
    const { content, labels, time, title } = data;
    return (
      <div className="details-wrapper">
        <h3 className="details-wrapper-title">{title}</h3>
        <div className="details-wrapper-label">
          {labels.map((elm, index) => {
            return <span key={index}>{elm}</span>;
          })}
        </div>
        <div className="details-wrapper-time">{time}</div>
        <p className="details-wrapper-content">{content}</p>
        <div className="details-wrapper-comment" />
      </div>
    );
  }
  renderWaitData() {
    return (
      <div className="details-wrapper">
        <div className="details-wrapper-placehoder">
          <Spin size="large" />
        </div>
      </div>
    );
  }
  render() {
    const { data } = this.state;
    const { content, labels, time, title } = data;
    if (data) {
      return this.renderData();
    } else {
      return this.renderWaitData();
    }
  }
}
