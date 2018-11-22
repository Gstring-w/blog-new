import React, { Component } from "react";
import { List, Avatar, Card, Skeleton, Icon } from "antd";
export default class RenderWait extends Component {
  render() {
    const { Meta } = Card;
    return (
      <div>
        <Card
          style={{ width: 600, marginTop: 16 }}
          actions={[
            <span>查看文章</span>,
            <span>可以发布</span>,
            <span>拒绝发布</span>
          ]}
        >
          <Skeleton
            loading={true}
            avatar
            active
            avatar={{ shape: "square", size: "large" }}
            title={false}
          />
        </Card>
      </div>
    );
  }
}
