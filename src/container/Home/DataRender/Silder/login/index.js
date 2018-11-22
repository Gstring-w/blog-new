import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox, message } from "antd";
import { LoginUser } from "../../../../../sagas/login";
import "./index.css";
class Login extends Component {
  state = {
    info: "登录成功"
  };
  info = () => {
    let { cookie } = this.props;
    message.destroy();
    message.loading("正在登录");
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { userName, password, remember } = values;
        this.props.LoginUser(values, "login");
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
  { LoginUser }
)(WrappedNormalLoginForm);
