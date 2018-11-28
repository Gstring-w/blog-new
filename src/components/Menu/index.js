import React, { Component } from "react";
import PropTypes from "prop-types";
import { Menu } from "antd";
export default class MenuBlog extends Component {
  static propTypes = {
    dataArr: PropTypes.array.isRequired
  };
  render() {
    const { dataArr } = this.props;
    return (
      <React.Fragment>
        <Menu
          mode="horizontal"
          className="TopBar-wrapper"
          style={{ height: "30px", background: "#fff" }}
          defaultSelectedKeys={["0"]}
        >
          {dataArr.map((v, i) => {
            return (
              <Menu.Item key={i} className="TopBar-wrapper-item active">
                {v.content}
              </Menu.Item>
            );
          })}
        </Menu>
      </React.Fragment>
    );
  }
}
