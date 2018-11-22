import React, { Component } from "react";
import { Input, Tag, Icon, Button, Modal, message } from "antd";
import { connect } from "react-redux";
import { PostArticle } from "../../../sagas/login";
import BraftEditor from "../../../components/BraftEditor";
import "./index.css";

export class PostArticleBlog extends Component {
  hanleWatch = () => {
    let { visible } = this.state;
    this.setState({
      visible: !visible
    });
  };
  hanleSave = () => {
    message.destroy();
    message.info("保存成功");
  };
  hanlePost = () => {
    message.destroy();
    let { text } = this.state;
    let { post_article_data } = this.props;
    console.log(post_article_data);
    let obj = { text, post_article_data };
    this.props.PostArticle(obj, "post");
    message.info("发布成功");
  };
  state = {
    visible: false,
    text: ""
  };
  onChangeText = e => {
    this.setState({
      text: e.target.value
    });
  };
  render() {
    const { TextArea } = Input;
    const { visible, text } = this.state;
    const { post_article_data } = this.props;
    return (
      <div className="post">
        <h3>发文</h3>
        <div className="post-header">
          <div className="post-header-title">
            <span className="post-header-title-left">标题:</span>
            <TextArea
              placeholder="文章标题"
              autosize
              value={text}
              className="post-header-title-right"
              onChange={this.onChangeText}
            />
          </div>
        </div>

        <div className="post-body">
          <div className="post-body-title">文章正文</div>
          <BraftEditor />
        </div>
        <div className="post-tags">
          <div className="post-tags-list">
            <span>发布到：</span>
            <Tag closable color="blue">
              首页
            </Tag>
            <Tag closable color="blue">
              html/css/js
            </Tag>
            <Tag closable color="blue">
              散文
            </Tag>
            <Tag closable color="blue">
              工具
            </Tag>
          </div>
        </div>
        <div className="post-submit">
          <Button type="primary" onClick={this.hanlePost}>
            发布
          </Button>
          <Button type="primary" onClick={this.hanleSave}>
            保存
          </Button>
          <Button type="primary" onClick={this.hanleWatch}>
            预览
          </Button>
          <Modal
            visible={visible}
            onCancel={this.hanleWatch}
            footer={null}
            title="文章预览"
            width={700}
          >
            <div
              className="post-submit-content"
              dangerouslySetInnerHTML={{ __html: post_article_data }}
            />
          </Modal>
        </div>
      </div>
    );
  }
}

export default connect(
  store => store,
  {
    PostArticle
  }
)(PostArticleBlog);
