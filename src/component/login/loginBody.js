import React, { Component } from "react";
// import { connect } from 'react-redux'
import { LoginForm } from "./login";

export class LoginBody extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: "",
      password: "",
      usernameFocus: false,
      passwordFocus: false,
      path: null,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleFocus = (param) => {
    if (param === "username") {
      this.setState({
        usernameFocus: true,
      });
    } else if (param === "password") {
      this.setState({
        passwordFocus: true,
      });
    }
  };
  handleBlur = (param) => {
    if (param === "username") {
      this.setState({
        usernameFocus: false,
      });
    } else if (param === "password") {
      this.setState({
        passwordFocus: false,
      });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      username: this.state.username,
      password: this.state.password,
    });
    this.props.history.push("/profile");
  };
  render() {
    return (
      <LoginForm
        userId="login_body_username"
        passId="login_body_password"
        password={this.state.password}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        usernameFocus={this.state.usernameFocus}
        passwordFocus={this.state.passwordFocus}
        username={this.state.username}
        Label="Username"
        handleFocus={this.handleFocus}
        handleBlur={this.handleBlur}
      />
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default LoginBody;
