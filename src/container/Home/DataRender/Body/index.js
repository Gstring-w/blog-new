import React, { Component } from "react";
import { List } from "antd";
export default class Body extends Component {
  render() {
    return (
      <div>
        <List
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3
          }}
        >
          <List.Item>1234</List.Item>
        </List>
      </div>
    );
  }
}
