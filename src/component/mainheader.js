import React, { PureComponent } from "react";
// import { connect } from 'react-redux'
import "./mainheader.css";
import { Link } from "react-router-dom";

class MainHeader extends PureComponent {
  render() {
    return (
      <div
        className={`main_header_wrapper div-width-100 flex header_sticky ${
          this.props.makeShadow ? "" : "noSHADOW"
        }`}
      >
        <div
          className="main_header_inner center div1"
          onClick={this.props.handleMenuOpen}
        >
          <i className="material-icons menu"></i>
        </div>
        <div className="flex1"></div>
        <div className="main_header_inner center div2">
          <Link to={{ pathname: "/location" }} className="Link">
            <i className="material-icons location_searching"></i>
          </Link>
        </div>
        <div className="main_header_inner center div3">
          <Link to={{ pathname: "/login/student" }} className="Link">
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
