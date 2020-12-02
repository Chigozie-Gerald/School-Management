import React, { PureComponent } from "react";
import "./forgetPassword.css";
// import { connect } from 'react-redux'

class ForgetPassword extends PureComponent {
  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: false,
      regNumber: "",
      focused: false,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    if (this.state.regNumber !== "12345") {
      this.setState({
        error: true,
      });
    } else {
      this.setState({
        error: false,
      });
    }
  };
  handleFocus = () => {
    this.setState({
      focused: true,
    });
  };
  handleBlur = () => {
    this.setState({
      focused: false,
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div className="page_wrapper forgetPassword_wrapper pl1 pr1 tll">
        <div className="page_wrapper_title flex vert_align div-width-100">
          Forgotten Password
        </div>
        <form
          method="POST"
          autoComplete="off"
          className="hide"
          onSubmit={this.handleSubmit}
        >
          <div className="forgotten_form_div rel flex fd_col flex_right">
            <input
              type="text"
              name="regNumber"
              id="forgot_Email"
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              value={this.state.regNumber}
              onChange={this.handleChange}
              className={`page_wrapper_input my_input div-width-100 box_border pl0-5 ${
                this.state.error && "error_border"
              }`}
            />
            <label
              htmlFor="forgot_Email"
              className={`page_wrapper_label inline_flex vert_align ${
                this.state.focused || this.state.regNumber ? "active" : ""
              } ${
                this.state.error &&
                (this.state.focused || this.state.regNumber) &&
                "error_color"
              }`}
            >
              Enter your Email
            </label>
          </div>
          <div className="forgotten_error_div error_color">
            {this.state.error && "Incorrect Email"}
          </div>

          <div className="rel center">
            <div
              className="forgotten_btn center inline_flex"
              onClick={this.handleSubmit}
              disabled={this.state.regNumber ? false : true}
            >
              Submit
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default ForgetPassword;
