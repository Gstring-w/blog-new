import React, { Component } from "react";
import { Button, Affix } from "antd";
import "./index.css";
export class ShowDetails extends Component {
  render() {
    return (
      <div
        className={
          !this.props.isShowTop
            ? "article-details homeDetails"
            : "article-details"
        }
      >
        {this.props.isShowTop && (
          <Affix>
            <div className="article-details-control">
              <Button
                type="default"
                icon="caret-left"
                onClick={this.props.hideDetails}
              >
                返回列表
              </Button>
              <span>作者：{this.props.author}</span>
              <Button
                type="danger"
                icon="close"
                onClick={this.props.hideDetails}
              >
                禁止发布
              </Button>
            </div>
          </Affix>
        )}

        <div
          className="article-details-content"
          dangerouslySetInnerHTML={{ __html: this.props.content }}
        />
      </div>
    );
  }
}

export default ShowDetails;
