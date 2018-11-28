import React, { Component } from "react";
import { connect } from "react-redux";
import { getManagementData } from "../../../axios/index";
import { Avatar, Card, message } from "antd";
import RenderWait from "../../../components/renderWaitData";
import ShowDetailsArticle from "../../../components/ShowDetailsArticle";
import "./index.css";
export class Article extends Component {
  state = {
    showDetails: true,
    selectIndex: 0
  };
  webSocket = () => {
    let ws = new WebSocket("ws://localhost:9999");
    ws.onmessage = res => {
      console.log(res);
      console.log(res.data);
      this.setState({
        severData: res.data
      });
    };
  };
  async componentDidMount() {
    this.webSocket();
    let response = await getManagementData(5);
    let data;
    data = this.dealData(response.data);
    this.setState({
      data
    });
  }
  dealData(data) {
    var data = [].slice.call(data);
    for (var i = 0; i < data.length; i++) {
      //文章是否发布存在三种状态 1 == 未查看  2 == 可以发布  3 == 禁止发布
      data[i].isPost = 1;
    }
    return data;
  }
  showDetails(index) {
    let { data } = this.state;
    data[index].isPost = 2;
    this.setState({
      data,
      showDetails: false,
      selectIndex: index
    });
  }
  hideDetails = () => {
    this.setState({
      showDetails: true
    });
  };
  PostArticle = index => {
    message.info("操作成功");
  };
  noPostArticle = index => {
    message.warn("已禁止该文章发布");
  };
  hanleStatus = isPost => {
    switch (isPost) {
      case 1:
        return "未查看";
      case 2:
        return "已查看";
      default:
        return "禁止发布";
    }
  };
  renderData() {
    const { Meta } = Card;
    const { data } = this.state;
    const _data = [].slice.call(data);
    return (
      <React.Fragment>
        {_data.map((item, index) => {
          return (
            <Card
              key={index}
              style={{ width: 600, marginTop: 16 }}
              actions={[
                <span onClick={this.showDetails.bind(this, index)}>
                  查看文章
                </span>,
                <span onClick={this.PostArticle.bind(this, index)}>
                  可以发布
                </span>,
                <span onClick={this.noPostArticle.bind(this, index)}>
                  拒绝发布
                </span>
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={item.user}
                description={item.title}
              />
              <div
                className={
                  item.isPost === 3
                    ? "user-content-tips no"
                    : "user-content-tips"
                }
              >
                {this.hanleStatus(item.isPost)}
              </div>
            </Card>
          );
        })}
      </React.Fragment>
    );
  }
  renderPost() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <div className="user-header">
          <h3>用户发文管理</h3>
        </div>
        <div className="user-content">
          {!!data ? this.renderData(data) : <RenderWait />}
        </div>
      </React.Fragment>
    );
  }
  render() {
    const { data, showDetails, selectIndex } = this.state;
    console.log(!!data && showDetails);
    return (
      <div className="user">
        {!!data && showDetails ? (
          this.renderPost()
        ) : (
          <ShowDetailsArticle
            isShowTop={true}
            author={!!data ? data[selectIndex].user : ""}
            hideDetails={this.hideDetails}
            content={!!data ? data[selectIndex].content : ""}
          />
        )}
      </div>
    );
  }
}

export default connect(store => store)(Article);
