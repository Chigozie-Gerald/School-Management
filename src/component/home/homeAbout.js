import React, { PureComponent } from "react";
// import { connect } from 'react-redux'
import "./homeAbout.css";

class HomeAbout extends PureComponent {
  render() {
    return (
      <div className="tll about_wrapper homePage_wrapper_col">
        <div className="about_top_header div-width-100">About School</div>
        <div className="homeAbout_header div-width-100 flex">
          <div className="homeAbout_header_img_div rad_50 center hide">
            <img src={require("../social.jpg")} alt="" className="img_div" />
          </div>
          <div className="homeAbout_header_title">
            <div className="homeAbout_header_title_inner div1">
              King's College Lagos
            </div>
            <div className="homeAbout_header_title_inner div2"></div>
            <div className="homeAbout_header_title_inner div3">
              <i>Founded 1909</i>
            </div>
          </div>
        </div>
        <div className="about_body_main hide">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
            aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates quidem, nobis veritatis excepturi error blanditiis tetur
            adipisicing. yyLorem ipsum dolor sit, amet consectetur adipisicing
            elit. Quam, aliquam? Lorem ipsum d Quam, aliquam? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Voluptates quidem, nobis
            veritatis excepturi
          </p>
          <p>
            Error blanditiis. Lorem ipsum dolor sit amet consectetur
            adipisicing. yyLorem ipsum dolor sit, amet consectetur adipisicing
            elit. Quam, aliquam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates quidem, nobis veritatis excepturi error
            blanditiis.
          </p>
          <p>
            Error blanditiis. Lorem ipsum dolor sit amet consectetur
            adipisicing. yyLorem ipsum dolor sit, amet consectetur adipisicing
            elit. Quam, aliquam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates quidem, nobis veritatis excepturi error
            blanditiis.
          </p>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default HomeAbout;
