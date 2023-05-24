import React, { Component, Fragment } from "react";
import "./index.scss"
// 导入组件
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Form, Input, Col, Row } from 'antd';
// 导入验证
import { validate_password } from "../../utils/validate";

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onFinish = values => {
    console.log('Received values of form: ', values);
  };

  toggleForm = () => {
    this.props.switchForm("login");
  }

  render() {
    return (
      <Fragment>
        <div className="form-header">
          <h4 className="column">账号注册</h4>
          <span onClick={this.toggleForm}>登录</span>
        </div>
        <div className="form-content">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
          >
            <Form.Item name="username" rules={
              [
                { required: true, message: '邮箱不能为空' },
                { type: 'email', message: '邮箱格式不正确' }
              ]
            }>
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>

            <Form.Item name="password" rules={
              [
                { required: true, message: '密码不能为空' },
                { pattern: validate_password, message: '请输入6-20位的数字+字母' }
              ]
            }>
              <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password" />
            </Form.Item>

            <Form.Item name="passwords" rules={
              [
                { required: true, message: '请再次输入密码' },
              ]
            }>
              <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="passwords" />
            </Form.Item>

            <Form.Item name="code" rules={
              [
                { required: true, message: '验证码不能为空' },
                { len: 6, message: '请输入长度为6位的验证码' }
              ]
            }>
              <Row gutter={13}>
                <Col span={15}>
                  <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Code" />
                </Col>
                <Col span={9}>
                  <Button type="danger" block >获取验证码</Button>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" block>登录</Button>
            </Form.Item>
          </Form>
        </div>
      </Fragment>
    )
  }
}

export default RegisterForm;
