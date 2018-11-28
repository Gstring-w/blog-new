import React, { Component } from "react";
import { Affix, Icon, Button, Popover } from "antd";
import { connect } from "react-redux";
import { showPopover } from "../../../../reducers/action/windowScroll";
import Slider from "../Silder";
import MenuBlog from "../../../../components/Menu";
import "./index.css";
class TopBar extends Component {
  handleClick = () => {
    let { isShowPopover } = this.props;
    this.props.showPopover(!isShowPopover);
  };
  handleLoginText = () => {
    let { cookie } = this.props;

    if (cookie) {
      return `${cookie}`;
    } else {
      return `登录`;
    }
  };
  renderLogin() {
    const { isShowPopover } = this.props;
    return (
      <Affix>
        <div className="login-show-button">
          <Popover
            placement="bottom"
            className="show-login-wrapper"
            content={<Slider />}
            defaultVisible={true}
            visible={!isShowPopover}
          >
            <Button
              icon="login"
              block={true}
              type="primary"
              className="login-button"
              size="small"
              onClick={this.handleClick}
            >
              {this.handleLoginText()}
            </Button>
          </Popover>
        </div>
      </Affix>
    );
  }
  render() {
    const { data_topBar } = this.props;
    const { isShowLogin } = this.props;
    return (
      <div>
        <Affix>
          <MenuBlog dataArr={data_topBar} />
          {isShowLogin ? this.renderLogin() : ""}
        </Affix>
      </div>
    );
  }
}
export default connect(
  store => store,
  { showPopover }
)(TopBar);
