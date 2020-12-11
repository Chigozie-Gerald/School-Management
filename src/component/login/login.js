import React, { PureComponent } from "react";
// import { connect } from 'react-redux'
import "./login.css";
import LoginBody from "./loginBody";
import { Link, Switch, Route, Redirect, withRouter } from "react-router-dom";
import NotFound from "../notFound";
import LoginStaffBody from "./loginStaffBody";
import LittleFooter from "../littleFooter";

export class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      makeShadow: false,
    };
  }
  handleScroll = () => {
    if (window.scrollY > 2) {
      this.setState({
        makeShadow: true,
      });
    } else {
      this.setState({
        makeShadow: false,
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    const { history } = this.props;
    return this.props.location.pathname === "/login" ? (
      <Redirect to={{ pathname: "/login/student" }} replace />
    ) : (
      <div className="login_wrapper div-width-100 flex fd_col tll">
        <div
          className={`login_header header_sticly flex smFlex fd_col ${
            this.state.makeShadow ? "" : "noSHADOW"
          }`}
        >
          <div className="login_header_top div-width-100 flex hide">
            <div
              className="login_header_top_inner div1 center"
              onClick={() => history.goBack()}
            >
              <i className="material-icons arrow_back arrow_back_icon white"></i>
            </div>
            <div className="login_header_top_inner div2 flex vert_align tll">
              <div className="login_header_top_inner_img_div rad_50 center hide">
                <img
                  src={require("../social.jpg")}
                  alt="badge"
                  className="img_div"
                />
              </div>
              <div className="login_header_top_inner_title_div flex1">
                <div className="login_header_top_inner_title_inner div1 tll flex vert_align div-width-100">
                  <span className="div-width-100 ellipsis">
                    King's College Lagos
                  </span>
                </div>
                <div className="login_header_top_inner_title_inner div2 tll flex vert_align div-width-100">
                  <span className="div-width-100 ellipsis">Spero Lucem</span>
                </div>
              </div>
            </div>
          </div>
          <div className="login_header_bottom rel flex div-width-100">
            <div
              className={`login_header_bottom_inner center div1 flex1 ${
                history.location.pathname === "/login/student" ? "active" : ""
              }`}
            >
              <Link
                to={{ pathname: "/login/student" }}
                replace
                className="login_header_bottom_link center div-width-100"
              >
                Student
              </Link>
            </div>
            <div
              className={`login_header_bottom_inner div2 center flex1 ${
                history.location.pathname === "/login/staff" ? "active" : ""
              }`}
            >
              <Link
                to={{ pathname: "/login/staff" }}
                replace
                className="login_header_bottom_link center div-width-100"
              >
                Staff
              </Link>
            </div>
            <div className="login_header_bottom_scroll">
              <div
                className={
                  history.location.pathname === "/login/student"
                    ? "login_header_bottom_scroll_mini left"
                    : history.location.pathname === "/login/staff"
                    ? "login_header_bottom_scroll_mini right"
                    : "login_header_bottom_scroll_mini null"
                }
              ></div>
            </div>
          </div>
        </div>
        <div className="login_body div-width-100 flex fd_col flex1">
          <div className="loginBody_wrapper hide div-width-100">
            <div
              className={`login_header header_sticly mdFlex fd_col ${
                this.state.makeShadow ? "" : "noSHADOW"
              }`}
            >
              <div className="login_header_bottom rel flex div-width-100">
                <div
                  className={`login_header_bottom_inner center div1 flex1 ${
                    history.location.pathname === "/login/student"
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to={{ pathname: "/login/student" }}
                    replace
                    className="login_header_bottom_link center div-width-100"
                  >
                    Student
                  </Link>
                </div>
                <div
                  className={`login_header_bottom_inner div2 center flex1 ${
                    history.location.pathname === "/login/staff" ? "active" : ""
                  }`}
                >
                  <Link
                    to={{ pathname: "/login/staff" }}
                    replace
                    className="login_header_bottom_link center div-width-100"
                  >
                    Staff
                  </Link>
                </div>
                <div className="login_header_bottom_scroll">
                  <div
                    className={
                      history.location.pathname === "/login/student"
                        ? "login_header_bottom_scroll_mini left"
                        : history.location.pathname === "/login/staff"
                        ? "login_header_bottom_scroll_mini right"
                        : "login_header_bottom_scroll_mini null"
                    }
                  ></div>
                </div>
              </div>
            </div>
            <Switch>
              <Route
                exact
                path="/login/student"
                render={(props) => <LoginBody {...props} />}
              />
              <Route
                exact
                path="/login/staff"
                render={(props) => (
                  <LoginStaffBody {...props} namePlaceholder="Enter Staff ID" />
                )}
              />
              <Route exact render={(props) => <NotFound {...props} />} />
            </Switch>
          </div>
        </div>
        <LittleFooter />
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default Login;

export const LoginForm = withRouter(
  class LoginForm extends PureComponent {
    constructor() {
      super();
      this.state = {
        makeShadow: false,
      };
    }
    render() {
      const {
        userId,
        passId,
        password,
        handleChange,
        handleSubmit,
        usernameFocus,
        passwordFocus,
        username,
        Label,
        handleFocus,
        handleBlur,
      } = this.props;
      return (
        <div className="div-width-100">
          <div className="loginBody_top_title div-width-100 flex vert_align flex_left">
            Please Login
          </div>
          <div className="loginBody_body div-width-100">
            <form
              method="POST"
              autoComplete="off"
              className="loginBody_form"
              onSubmit={handleSubmit}
            >
              <div className="loginBody_input_div rel tll div-width-100">
                <label
                  htmlFor="login_body_username"
                  className={`loginBody_label flex vert_align ${
                    usernameFocus || username ? "active" : ""
                  }`}
                >
                  {Label && typeof Label === "string" ? Label : "Username"}
                </label>
                <div className="loginBody_input_inner div-width-100">
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onFocus={() => handleFocus("username")}
                    onBlur={() => handleBlur("username")}
                    value={username}
                    id={userId}
                    className="loginBody_input div-width-100 noBorder"
                  />
                  <div className="loginBody_div_scroll div-width-100 flex vert_align">
                    <div
                      className={`loginBody_div_scroll_mini div-width-100 ${
                        usernameFocus ? "active" : "inactive"
                      }`}
                    ></div>
                  </div>
                </div>
                <div className="input_error_div flex">
                  <span className="ellipsis div-width-100"></span>
                </div>
              </div>
              <div className="loginBody_input_div rel tll div-width-100 div2">
                <label
                  htmlFor="login_body_password"
                  className={`loginBody_label flex vert_align ${
                    passwordFocus || password ? "active" : ""
                  }`}
                >
                  Password
                </label>
                <div className="loginBody_input_inner div-width-100">
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onFocus={() => handleFocus("password")}
                    onBlur={() => handleBlur("password")}
                    value={password}
                    id={passId}
                    className="loginBody_input div-width-100 noBorder"
                  />
                  <div className="loginBody_div_scroll div-width-100 flex vert_align">
                    <div
                      className={`loginBody_div_scroll_mini div-width-100 ${
                        passwordFocus ? " active" : "inactive"
                      }`}
                    ></div>
                  </div>
                </div>
                <div className="input_error_div flex div-width-100">
                  <div className="input_error_password flex vert_align flex_left">
                    <span className="ellipsis div-width-100"></span>
                  </div>
                  <div className="input_forget_password flex vert_align">
                    <span className="ellipsis div-width-100">
                      <Link
                        className="blue_link"
                        to={{ pathname: "/forget_password" }}
                      >
                        Forgotten password?
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="loginBody_btn_wrapper div-width-100 flex horiz_align">
                <input
                  type="submit"
                  value="Login"
                  className="loginBody_submit"
                  onSubmit={handleSubmit}
                />
                <button
                  className="loginBody_btn center div-width noBorder div-width-100"
                  onClick={handleSubmit}
                  disabled={!username || !password ? true : false}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
);
