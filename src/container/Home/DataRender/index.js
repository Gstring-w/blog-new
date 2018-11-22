import React, { Component } from "react";
import { Layout } from "antd";
import ContentBlog from "./Content";
import SilderBlog from "./Silder";
import { getHomeData } from "../../../axios/index";
import ShowDetailsArticle from "../../../components/ShowDetailsArticle";
import "./index.css";
import Comment from "../../../components/comment";
export default class DataRender extends Component {
  state = {
    isShowDetails: false,
    selectIndex: 0,
    data_content: []
  };
  async componentDidMount() {
    let response = await getHomeData(5);
    let arr = [].slice.call(response.data);
    this.setState({
      data_content: arr
    });
  }
  onShowDetails = index => {
    this.setState({
      selectIndex: index,
      isShowDetails: true
    });
  };
  render() {
    const { data_content, isShowDetails, selectIndex } = this.state;
    const { Sider, Content } = Layout;
    return (
      <div>
        <Layout className="web-wrapper-content">
          <Content className="web-wrapper-content-center">
            {!!!isShowDetails ? (
              <ContentBlog
                dataArr={data_content}
                onShowDetails={this.onShowDetails}
              />
            ) : (
              <React.Fragment>
                <ShowDetailsArticle
                  isShowTop={false}
                  author={!!data_content ? data_content[selectIndex].user : ""}
                  hideDetails={this.hideDetails}
                  content={
                    !!data_content ? data_content[selectIndex].content : ""
                  }
                />
                <div className="web-wrapper-content-center-comment">
                  <Comment articleIndex={selectIndex} />
                </div>
              </React.Fragment>
            )}
          </Content>
          <Sider className="web-wrapper-content-right" width="35%">
            <SilderBlog />
            {!!isShowDetails && "控件"}
          </Sider>
        </Layout>
      </div>
    );
  }
}
