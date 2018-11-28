import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox, notification } from "antd";
import { SetCookie } from "../../../../../reducers/action/windowScroll";
import { postLoginData } from "../../../../../axios/index";
import "./index.css";
class Login extends Component {
  state = {
    info: "登录成功"
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { userName, password, remember } = values;
        try {
          let response = await postLoginData(values);
          console.log(response);
          // document.setCookie
          notification["success"]({
            message: "登录成功！"
          });
          this.props.SetCookie(response.data[0].username);
          document.cookie = `user_id=${response.data[0].username}`;
          this.props.onLogined();
        } catch (error) {
          console.log(error);
          notification["error"]({
            message: "登录失败！",
            description: "请检测密码和用户名是否正确！"
          });
        }
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const FormItem = Form.Item;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem className="login-form-user">
            {getFieldDecorator("userName", {
              rules: [{ required: true, message: "用户名格式不正确!" }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="(最少6位)"
              />
            )}
          </FormItem>
          <FormItem className="login-form-pass">
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "密码格式不正确" }]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="(最少6位)"
              />
            )}
          </FormItem>
          <FormItem className="login-form-tips">
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox className="login-form-rember">记住我</Checkbox>)}
            <a className="login-form-forgot" href="">
              忘记密码?
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={this.info}
            >
              登录
            </Button>
            <span className="login-form-not-id">
              没有账号？<span>注册</span>
            </span>
          </FormItem>
        </Form>
      </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(Login);
export default connect(
  store => store,
  { SetCookie }
)(WrappedNormalLoginForm);
