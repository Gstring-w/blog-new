import React, { Component } from "react";
import { Affix, Icon, message } from "antd";
import "./index.css";
export class StarAndHot extends Component {
  state = {
    zan: "#333"
  };
  dianZan = () => {
    message.success("赞+1");
  };

  render() {
    const { zan } = this.state;
    return (
      <div className="hot-wrapper">
        <Affix offsetTop={200}>
          <div className="hot-wrapper-item">
            <div onClick={this.dianZan}>
              <Icon
                type="like"
                theme="filled"
                style={{ fontSize: "15px", color: zan }}
              />
              <span className="hot-wrapper-item-span">点赞</span>
            </div>
            <div>
              <Icon type="star" theme="filled" style={{ fontSize: "15px" }} />
              <span className="hot-wrapper-item-span">收藏</span>
            </div>
            <div>
              <Icon
                type="message"
                theme="filled"
                style={{ fontSize: "15px" }}
              />
              <span className="hot-wrapper-item-span">评论</span>
            </div>
          </div>
        </Affix>
      </div>
    );
  }
}

export default StarAndHot;
