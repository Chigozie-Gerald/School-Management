import React, { PureComponent } from "react";
// import { connect } from 'react-redux'
import "./homeFooter.css";

class HomeFooter extends PureComponent {
  render() {
    return (
      <div className="homeFooter_wrapper">
        <div className="homeFooter_top">
          <div className="homeFooter_top_inner"></div>
          <div className="homeFooter_top_inner"></div>
        </div>
        <div className="homeFooter_bottom">
          <div className="homeFooter_bottom_inner div1">
            <div className="homeFooter_bottom_img_div">
              <img
                src={require("../mediaFiles/books.jpg")}
                alt=""
                className="img_div"
              />
            </div>
            <div className="homeFooter_bottom_title">XenSites</div>
          </div>
          <div className="homeFooter_bottom_inner div2">
            <div className="homeFooter_bottom_img_div">
              <img src={require("../social.jpg")} alt="" className="img_div" />
            </div>
            <div className="homeFooter_bottom_title">King's College Lagos</div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default HomeFooter;
