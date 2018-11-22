import React, { Component } from "react";
import BraftEditor from "braft-editor";
import saveData from "../../reducers/action/saveEditorHtml";
import { connect } from "react-redux";
import { message } from "antd";
import "braft-editor/dist/index.css";
class Brafteditor extends Component {
  state = {
    editorState: BraftEditor.createEditorState(null)
  };
  componentDidMount() {
    const { post_article_data } = this.props;
    if (post_article_data) {
      this.setState({
        editorState: BraftEditor.createEditorState(post_article_data)
      });
    }
  }
  hanleBlue = () => {
    this.props.saveData(this.state.editorState.toHTML());
  };
  handleEditorChange = editorState => {
    this.setState({ editorState });
  };
  render() {
    const { editorState } = this.state;
    return (
      <div>
        <BraftEditor
          value={editorState}
          onChange={this.handleEditorChange}
          onSave={this.hanleBlue}
          onBlur={this.hanleBlue}
        />
      </div>
    );
  }
}

export default connect(
  store => store,
  { saveData }
)(Brafteditor);
