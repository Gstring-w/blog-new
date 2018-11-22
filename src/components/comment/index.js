import React, { Component } from "react";
import { getArticleComment } from "../../axios/index";
export class Comment extends Component {
  async componentDidMount() {
    let articleIndex = this.props.articleIndex;
    let response = await getArticleComment(articleIndex);
    console.log(response);
  }
  render() {
    return (
      <div>
        <h4>该文章的评论:</h4>
      </div>
    );
  }
}

export default Comment;
