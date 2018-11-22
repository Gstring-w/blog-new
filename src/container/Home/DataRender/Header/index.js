import React, { Component } from "react";
import { Carousel } from "antd";
import "./index.css";
export default class Header extends Component {
  render() {
    return (
      <div>
        <Carousel autoplay className="carousel-wrapper">
          <div className="carousel-wrapper-item1" />
          <div className="carousel-wrapper-item2" />
          <div className="carousel-wrapper-item3" />
          <div className="carousel-wrapper-item4" />
          <div className="carousel-wrapper-item5" />
        </Carousel>
      </div>
    );
  }
}
