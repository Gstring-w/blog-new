import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox, message } from "antd";
import { RegisterUser } from "../../../../../sagas/login";
// import "./index.css";
class Login extends Component {
  state = {
    info: "注册成功"
  };
  info = () => {
    message.info("注册成功");
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { userName, password } = values;
        this.props.RegisterUser(values, "register");
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
          <FormItem className="login-form-pass">
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="再输一次"
            />
          </FormItem>
          <FormItem className="login-form-tips">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={this.info}
            >
              注册
            </Button>
            <span className="login-form-not-id">
              已有账号？<span>登录</span>
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
  { RegisterUser }
)(WrappedNormalLoginForm);
