import React, { PureComponent } from "react";
// import { connect } from 'react-redux'
import "./mainheader.css";
import { Link } from "react-router-dom";

class MainHeader extends PureComponent {
  render() {
    if (this.props.bColor) {
      this.bColor = this.props.bColor;
    } else {
      this.bColor = "#fff";
    }
    return (
      <div
        className={
          this.props.makeShadow
            ? "main_header_wrapper"
            : "main_header_wrapper noSHADOW"
        }
        style={{ backgroundColor: this.bColor }}
      >
        <div
          className="main_header_inner div1"
          onClick={this.props.handleMenuOpen}
        >
          <i className="material-icons menu mainHeader_menu_icon"></i>
        </div>
        <div className="main_header_inner mid"></div>
        <div className="main_header_inner div2">
          <Link to={{ pathname: "/location" }} className="Link">
            <i className="material-icons location_searching"></i>
          </Link>
        </div>
        <div className="main_header_inner div3">
          <Link
            to={{ pathname: "/login/student" }}
            className="main_header_login_link"
          >
            <i className="material-icons person"></i>
          </Link>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default MainHeader;
