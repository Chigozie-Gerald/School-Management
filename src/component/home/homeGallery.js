import React, { PureComponent } from "react";
// import { connect } from 'react-redux'
import "./homeGallery.css";
import { Link } from "react-router-dom";

class HomeGallery extends PureComponent {
  render() {
    return (
      <div className="homeGallery_wrapper">
        <div className="homeGallery_header">
          <div className="homeGallery_header_div div1">School's Gallery</div>
          <div className="homeGallery_header_div div2">
            <Link
              className="Link homeGallery_link"
              to={{ pathname: "/gallery" }}
            >
              View More
            </Link>
          </div>
        </div>
        <div className="homeGallery_body">
          <div className="homeGallery_body_inner"></div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default HomeGallery;
