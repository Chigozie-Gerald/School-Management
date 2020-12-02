import React, { PureComponent } from "react";
// import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import "./homeReg.css";

class HomeReg extends PureComponent {
  render() {
    return (
      <div className="homeReg_wrapper">
        <div className="homeReg_wrapper_inner">
          <div className="homeReg_img_div">
            <img
              src={require("../social.jpg")}
              alt="wrapper"
              className="homeReg_img"
            />
            <div className="homeReg_img"></div>
            <div className="homeReg_img_div_float">
              <span>Our School is Top Notch and Superior</span>
            </div>
          </div>
          <div className="homeReg_inner">
            <Link className="Link" to={{ pathname: "/register_ward" }}>
              <span>Register Your Ward Now!</span>
              <i className="material-icons arrow_forward"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default HomeReg;
