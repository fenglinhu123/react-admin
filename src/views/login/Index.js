import React, { Component } from "react";
import "./index.scss";
//组件
import LoginForm from "./LoginForm.js"
import RegisterForm from "./RegisterForm.js";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      formType: "login",
    };
  }

  switchForm = (value) => {
    this.setState({
      formType: value
    });
  }

  render() {
    return (
      <div className="form-wrap">
        <div>
          {
            this.state.formType === 'login'
              ? <LoginForm switchForm={this.switchForm}></LoginForm>
              : <RegisterForm switchForm={this.switchForm}></RegisterForm>
          }
        </div>
      </div>
    )
  }
}

export default Login;