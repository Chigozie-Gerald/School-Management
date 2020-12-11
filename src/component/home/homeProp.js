import React, { PureComponent } from "react";
// import { connect } from 'react-redux'
import "./homeProp.css";

class HomeProp extends PureComponent {
  render() {
    return (
      <div className="tll about_wrapper">
        <div className="about_top_header">Meet the Proprietor</div>
        <div className="about_header div-width-100">
          <div className=" center about_header_img_wrapper div-width-100">
            <div className="about_header_img_div rad_50 center hide">
              <img
                src={require("../mediaFiles/prop.jpg")}
                alt=""
                className="img_div"
              />
            </div>
          </div>
          <div className="about_header_title">
            <div className="about_header_title_inner div1">
              Mr. Adewale Martin Chukwuemeka
            </div>
            <div className="about_header_title_inner div2">
              PhD. Pyschology, MD. MBBS.
            </div>
            <div className="about_header_title_inner div2">
              Managing director Xenunga
            </div>
            <div className="about_header_title_inner div2">
              Proprietor since 2019
            </div>
          </div>
        </div>
        <div className="about_body_main">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
            aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates quidem, nobis veritatis excepturi error blanditiis. Lorem
            ipsum dolor sit amet consectetur adipisicing. yyLorem ipsum dolor
            sit, amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
            aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates quidem, nobis veritatis excepturi error blanditiis. Lorem
            ipsum dolor sit amet consectetur adipisicing. yyLorem ipsum dolor
            sit, amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
            aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates quidem, nobis veritatis excepturi error blanditiis. Lorem
            ipsum dolor sit amet consectetur adipisicing. yyLorem ipsum dolor
            sit, amet consectetur adipisicing elit.
          </p>
          <p>
            Quam, aliquam? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptates quidem, nobis veritatis excepturi error blanditiis.
            Lorem ipsum dolor sit amet consectetur adipisicing. yyLorem ipsum
            dolor sit, amet consectetur adipisicing elit
          </p>
          <p>
            Error blanditiis. Lorem ipsum dolor sit amet consectetur
            adipisicing. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Quam, aliquam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates quidem, nobis veritatis excepturi error
            blanditiis. Error blanditiis. Lorem ipsum dolor sit amet consectetur
            adipisicing. Lorem ipsum dolor sit, amet consectetur adipisicing
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

export default HomeProp;
