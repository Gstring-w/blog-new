import React, { Component } from "react";
import { connect } from "react-redux";
import { getArticleComment } from "../../axios/index";
import { List, Avatar, Input, Button } from "antd";
export class Comment extends Component {
  state = {
    data: "",
    content: ""
  };
  async componentDidMount() {
    let articleIndex = this.props.articleIndex;
    let response = await getArticleComment(articleIndex);
    console.log(response.data);
    this.setState({
      data: [].slice.call(response.data)
    });
  }
  sendComment = e => {
    e.preventDefault();
    let { data, content } = this.state;
    let additem = {
      user: this.props.cookie,
      content
    };
    data.push(additem);
    this.setState({
      data,
      content: ""
    });
  };
  hanleChange = e => {
    this.setState({
      content: e.target.value
    });
  };
  render() {
    const { TextArea } = Input;
    const { data } = this.state;
    return (
      <div className="comment">
        <h4>该文章的评论:</h4>
        {!!data &&
          data.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <List.Item key={index}>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={item.user}
                    description={item.content}
                  />
                </List.Item>
                <div className="dianzan" key={index + "112"} />
              </React.Fragment>
            );
          })}
        {this.props.cookie ? (
          <React.Fragment>
            <h4>写下你的评论:</h4>
            <TextArea
              value={this.state.content}
              rows={3}
              onChange={this.hanleChange}
              onPressEnter={this.sendComment}
            />
            <div className="comment-control">
              <Button type="primary" size="small" onClick={this.sendComment}>
                发表看法
              </Button>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h4>请登录:</h4>
            <div className="comment-control">
              <Button type="primary" size="small">
                登录
              </Button>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default connect(store => store)(Comment);
