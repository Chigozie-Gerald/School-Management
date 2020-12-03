import React, { PureComponent } from "react";
// import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import "./homeReg.css";

class HomeReg extends PureComponent {
  render() {
    return (
      <div className="tll homeReg_wrapper div-width-100 flex vert_align">
        <div className="homeReg_wrapper_inner box_border noBorder  center fd_col div-width-100">
          <div className="homeReg_img_top div-width-100 flex p1">
            <div className="flex1">
              <i className="material-icons format_quote"></i>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              error iure aspernatur nobis quia facilis reprehenderit animi
              perspiciatis veritatis!{" "}
              <i className="material-icons format_quote"></i>
              <p>- Nikolas Tesla</p>
            </div>
            <div className="homeReg_img_div rel center">
              <img
                src={require("../social.jpg")}
                alt="wrapper"
                className="img_div"
              />
            </div>
          </div>
          <div className="homeReg_inner center p1">
            <Link className="Link" to={{ pathname: "/register_ward" }}>
              <span>Register Your Ward Now!</span>
              <i className="material-icons arrow_forward arrow_back_white"></i>
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
