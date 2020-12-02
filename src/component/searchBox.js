import React, { PureComponent } from "react";
import "./searchBox.css";
// import { connect } from 'react-redux'

class SearchBox extends PureComponent {
  render() {
    const {
      handleSubmit,
      handleChange,
      handleClose,
      services,
      focusFunc,
    } = this.props;
    return (
      <div className="searchBox_wrapper">
        <div className="searchBox_wrapper_inner div1">
          <div className="searchBox_wrapper_img_div">
            <img
              src={require("./social.jpg")}
              alt="badge"
              className="searchBox_wrapper_img"
            />
          </div>
        </div>
        <div className="searchBox_wrapper_inner div2">
          <form
            method="POST"
            autoComplete="off"
            className="searchBox_wrapper_form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="services"
              className="searchBox_wrapper_input"
              placeholder="Search Our Services..."
              value={services}
              onChange={handleChange}
              onFocus={focusFunc ? focusFunc : null}
            />
          </form>
        </div>
        <div className="searchBox_wrapper_inner div3" onClick={handleClose}>
          {services ? (
            <i
              className={
                services !== ""
                  ? "material-icons close searchBox_wrapper_icon_div3 active"
                  : "material-icons close searchBox_wrapper_icon_div3"
              }
            ></i>
          ) : null}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default SearchBox;
