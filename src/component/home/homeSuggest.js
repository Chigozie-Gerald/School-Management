import React, { PureComponent } from "react";
// import { connect } from 'react-redux'
import "./homeSuggest.css";

class HomeSuggest extends PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      phone: "",
      textarea: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: this.state.name,
      phone: this.state.phone,
      textarea: this.state.textarea,
    });
    this.setState({
      name: "",
      phone: "",
      textarea: "",
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="homeSuggest_wrapper">
        <div className="homeSuggest_top_header">
          <div className="homeSuggest_top_header_title">Suggestions</div>
          <div className="homeSuggest_top_header_body">
            Your suggestions help us know areas we need to improve and helps us
            serve you better
            <p>
              You can get started by submitting a <b>suggestion</b> for our
              school.
            </p>
          </div>
        </div>
        <SuggestDiv
          title="Your Suggestion"
          name=""
          heading="Submit your Suggestion"
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          state={this.state}
        />
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default HomeSuggest;

export class SuggestDiv extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scroll: null,
      phoneScroll: null,
      nameScroll: null,
      textareaFocus: null,
    };
  }
  handleFocus = (param) => {
    if (param === "phoneScroll") {
      if (this.state.phoneScroll === null) {
        this.setState({
          phoneScroll: true,
        });
      } else {
        this.setState({
          phoneScroll: !this.state.phoneScroll,
        });
      }
    } else if (param === "nameScroll") {
      if (this.state.nameScroll === null) {
        this.setState({
          nameScroll: true,
        });
      } else {
        this.setState({
          nameScroll: !this.state.nameScroll,
        });
      }
    } else if (param === "textareaFocus") {
      if (this.state.textareaFocus === null) {
        this.setState({
          textareaFocus: true,
        });
      } else {
        this.setState({
          textareaFocus: !this.state.textareaFocus,
        });
      }
    }
  };
  render() {
    const {
      title,
      name,
      heading,
      handleChange,
      state,
      handleSubmit,
    } = this.props;
    return (
      <div className="homeSuggest_div tll div-width-100 fd-col ">
        <div className="homeSuggest_header div-width-100 vert_align">
          {heading ? heading : "Submit your Suggestions"}
        </div>
        <div className="homeSuggest_body div-width-100">
          <form
            method="POST"
            autoComplete="off"
            onSubmit={handleSubmit}
            className="homeSuggest_form div-width-100"
          >
            <div className="homeSuggest_input_wrapper rel fd_col flex flex_right">
              <div className="homeSuggest_input_div flex rel div-width-100">
                <input
                  type="text"
                  name="name"
                  value={state.name}
                  id="suggest_name_input"
                  className="homeSuggest_input flex flex_left div-width-100"
                  onChange={handleChange}
                  onFocus={() => {
                    this.handleFocus("nameScroll");
                  }}
                  onBlur={() => {
                    this.handleFocus("nameScroll");
                  }}
                />
                <label
                  htmlFor="suggest_name_input"
                  className={
                    this.state.nameScroll || state.name
                      ? "homeSuggest_label flex vert_align active"
                      : "homeSuggest_label flex vert_align"
                  }
                >
                  {name ? name : "Name"}
                </label>
              </div>
              <div className="homeSuggest_div_scroll div-width-100 flex">
                <div
                  className={`homeSuggest_div_scroll_mini div-width-100 ${
                    this.state.nameScroll ? "active" : "inactive"
                  }`}
                ></div>
              </div>
            </div>
            <div className="homeSuggest_input_wrapper rel fd_col flex flex_right">
              <div className="homeSuggest_input_div flex rel div-width-100 number_input">
                <input
                  type="number"
                  name="phone"
                  id="suggest_phone_input"
                  value={state.phone}
                  className="homeSuggest_input flex flex_left div-width-100"
                  onChange={handleChange}
                  onFocus={() => {
                    this.handleFocus("phoneScroll");
                  }}
                  onBlur={() => {
                    this.handleFocus("phoneScroll");
                  }}
                />
                <label
                  htmlFor="suggest_phone_input"
                  className={
                    this.state.phoneScroll || state.phone
                      ? "homeSuggest_label active"
                      : "homeSuggest_label"
                  }
                >
                  Phone
                </label>
              </div>
              <div className="homeSuggest_div_scroll number_input flex">
                <div
                  className={`homeSuggest_div_scroll_mini div-width-100 ${
                    this.state.phoneScroll ? " active" : "inactive"
                  }`}
                ></div>
              </div>
            </div>
            <div
              className={`homeSuggest_textarea_wrapper fd_col flex rel div-width-100 flex_right ${
                this.state.textareaFocus ? " active" : ""
              }`}
            >
              <span
                className={`homeSuggest_textarea_label flex vert_align flex_left ${
                  this.state.textareaFocus || state.textarea ? "active" : ""
                }
                `}
              >
                {title ? title : "Your Suggestion"}
              </span>
              <textarea
                name="textarea"
                id="home_suggest_textarea"
                value={state.textarea}
                className="homeSuggest_textarea"
                onFocus={() => {
                  this.handleFocus("textareaFocus");
                }}
                onBlur={() => {
                  this.handleFocus("textareaFocus");
                }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="homeSuggest_btn_wrapper div-width-100 flex flex_right">
              <button className="homeSuggest_btn center" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
