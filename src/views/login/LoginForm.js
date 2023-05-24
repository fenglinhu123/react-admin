import React, { Component, Fragment } from "react";
import "./index.scss"
// 导入组件
import { UserOutlined, LockOutlined, SafetyOutlined } from '@ant-design/icons';
import { Button, Form, Input, Col, Row } from 'antd';
// 导入验证
import { validate_password } from "../../utils/validate";
//API
import { loginUser, getCodeContent } from "../../api/account";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      code_button_loading: false,
      code_button_disabled: false,
      code_button_text: '获取验证码',
    };
  }

  // 登录
  onFinish = values => {
    console.log(process.env);
    loginUser(values).then(response => {
      console.log(response);
      if (response.success) {

      }
    })
  };

  // 获取验证码
  getCode = () => {
    this.setState({
      code_button_loading: true,
      code_button_disabled: true,
      code_button_text: '发送中',
    });
    getCodeContent().then(response => {
      console.log(response);
      if (response.success) {
        //执行倒计时
        this.countDown();
      } else {
        this.setState({
          code_button_loading: false,
          code_button_disabled: false,
          code_button_text: '重新获取'
        });
      }
    })
  }

  /** 倒计时 */
  countDown = () => {
    // 倒计时
    let timer = null;
    // 倒计时时间
    let sec = 6;
    // 修改状态
    this.setState({
      code_button_loading: false,
      code_button_disabled: true,
      code_button_text: `${sec}s`,
    });

    timer = setInterval(() => {
      sec--;
      if (sec <= 0) {
        this.setState({
          code_button_text: `重新获取`,
          code_button_disabled: false,
        });
        clearInterval(timer);
        return false;
      }
      this.setState({
        code_button_text: `${sec}s`,
      });
    }, 1000);
    // setInterval \ clearInterval 不间断定时器
    // setTimeout \ clearTimeout 只执行一次
  }

  toggleForm = () => {
    this.props.switchForm("register");
  }

  render() {
    const { code_button_loading, code_button_text, code_button_disabled } = this.state;
    // const _this = this;
    return (
      <Fragment>
        <div className="form-header">
          <h4 className="column">登录</h4>
          <span onClick={this.toggleForm}>账号注册</span>
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
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
            </Form.Item>

            <Form.Item name="password" rules={
              [
                { required: true, message: '密码不能为空' },
                // ({ getFieldValue }) => ({
                //   validator(rule, value) {
                //     if(value.length<6){
                //       return Promise.reject('不能小于6位');
                //     }
                //     if(value.length>20){
                //       return Promise.reject('不能大于20位');
                //     }
                //     return Promise.resolve();
                //   }
                // })
                // { min: 6, message: '不能小于6位' },
                // { max: 20, message: '不能大于20位' },
                { pattern: validate_password, message: '请输入6-20位的数字+字母' }
              ]
            }>
              <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="字母+数字, 大于6位, 小于20位" />
            </Form.Item>

            <Form.Item name="code" rules={
              [
                { required: true, message: '验证码不能为空' },
                { len: 6, message: '请输入长度为6位的验证码' }
              ]
            }>
              <Row gutter={13}>
                <Col span={15}>
                  <Input prefix={<SafetyOutlined className="site-form-item-icon" />} placeholder="Code" />
                </Col>
                <Col span={9}>
                  <Button type="danger"
                    disabled={code_button_disabled}
                    loading={code_button_loading}
                    onClick={this.getCode}
                    block
                  >
                    {code_button_text}
                  </Button>
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

export default LoginForm;
