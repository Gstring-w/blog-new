import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { List, Icon, Skeleton } from "antd";
import IconText from "../../../../components/Icontext";
import { showLogin } from "../../../../reducers/action/windowScroll";
import "./index.css";
class Content extends Component {
  static propTypes = {
    dataArr: PropTypes.array
  };

  handleFontSizeOverflow(text) {
    let __text = text + "";
    // let str = "<h2>1111</h2>";
    // console.log(str.match(/<h[0-9]>(.*)<\/h[0-9]>/));
    let regx = /<[^>]*>|<\/[^>]*>/gm;
    var _text = __text.replace(regx, ""); // 替换html标签
    if (_text.length > 127) {
      let arr = _text.split("").slice(0, 97);
      arr.push("...");
      let result = arr.join("");
      return result + "";
    } else {
      return _text;
    }
  }
  renderSkeleton() {
    return (
      <Skeleton
        title={false}
        className="skeleton"
        active="true"
        paragraph={{ rows: 5, width: [150, 400, 400, 400, 350] }}
        avatar={{ size: "large", shape: "square" }}
      />
    );
  }
  renderWaitData() {
    return (
      <React.Fragment>
        {this.renderSkeleton()}
        {this.renderSkeleton()}
        {this.renderSkeleton()}
      </React.Fragment>
    );
  }
  render() {
    const { dataArr } = this.props;
    return (
      <div className="List">
        <List
          bordered="false"
          itemLayout="vertical"
          className="List-wrapper"
          size="small"
        >
          {!!dataArr ? this.renderData() : this.renderWaitData()}
        </List>
      </div>
    );
  }

  renderData() {
    const { dataArr } = this.props;
    return (
      <React.Fragment>
        {dataArr.map((v, k) => {
          return (
            <List.Item
              className="List-wrapper-item"
              key={v.title}
              actions={[
                <IconText type="star-o" text={v.star} />,
                <IconText type="like-o" text={v.hot} />,
                <IconText type="message" text={v.comment} />,
                <span
                  className="List-wrapper-item-more"
                  onClick={this.props.onShowDetails.bind(this, k)}
                >
                  阅读全文
                  <Icon type="right" />
                </span>
              ]}
              extra={
                <img
                  width={125}
                  height={125}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                className="List-wrapper-item-meta"
                description={v.title}
              />
              {this.handleFontSizeOverflow.bind(this)(v.content)}
              <List.Item />
            </List.Item>
          );
        })}
      </React.Fragment>
    );
  }
}
// width 25个字
// height 4行
// 整体可容纳 ...为一个字 首行缩进2个字   totol ： 25 * 4 - 3 个字

export default connect(
  store => store,
  { showLogin }
)(Content);
