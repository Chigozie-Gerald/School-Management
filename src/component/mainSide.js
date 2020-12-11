import React, { PureComponent } from "react";
// import { connect } from 'react-redux'
import "./mainSide.css";
import { Link } from "react-router-dom";

class MainSide extends PureComponent {
  render() {
    const mainSide_arr = [
      {
        pathLink: "/login/student",
        text: "Login",
        icon: "person",
      },
      {
        pathLink: "/gallery",
        text: "Gallery",
        icon: "photo",
      },
      {
        pathLink: "/contact_us",
        text: "Contact Us",
        icon: "phone",
      },
      {
        pathLink: "/services",
        text: "Services",
        icon: "work",
      },
      {
        pathLink: "/location",
        text: "Our Location",
        icon: "location_searching",
      },
      {
        pathLink: "/suggestion",
        text: "Submit your suggestions",
        icon: "text_fields",
      },
    ];
    const mainSide_list = mainSide_arr.map((elem, n) =>
      elem.icon && elem.text && elem.pathLink ? (
        <div key={`mainSide_inner_${n}`} className="mainSide_body_inner">
          <Link
            to={{ pathname: elem.pathLink }}
            className="Link flex-start"
            onClick={this.props.handleMenuClose}
          >
            <i
              className={`material-icons ${elem.icon} mainSide_body_icon div1`}
            ></i>
            {elem.text}
          </Link>
        </div>
      ) : (
        ""
      )
    );
    return (
      <div className="mainSide_wrapper">
        <div className="mainSide_header flex">
          <div className="mainSide_header_left_div flex1 inline_flex vert_align">
            <div className="mainSide_header_left_img">
              <img
                src={require("./social.jpg")}
                alt="badge"
                className="mainSide_header_img"
              />
            </div>
            <div className="mainSide_header_r pl1 flex fd_col">
              <div className="mainSide_header_tile_name div-width-100">
                <span className="div-width-100 ellipsis">
                  King's College, Lagos
                </span>
              </div>
              <div className="mainSide_header_tile_motto div-width-100">
                <span className="div-width-100 ellipsis">Spero Lucem</span>
              </div>
            </div>
          </div>
          <i
            className="material-icons close center"
            onClick={this.props.handleMenuClose}
          ></i>
        </div>
        <div className="mainSide_body">
          {mainSide_list}
          {/* <div className="mainSide_body_inner">
            <Link
              to={{ pathname: "/login/student" }}
              className="Link flex-start"
              onClick={this.props.handleMenuClose}
            >
              <i className="material-icons person mainSide_body_icon div1"></i>
              Login
            </Link>
          </div> */}
          {/* <div className="mainSide_body_inner">
            <Link
              to={{ pathname: "/gallery" }}
              className="Link flex-start"
              onClick={this.props.handleMenuClose}
            >
              <i className="material-icons photo mainSide_body_icon div1"></i>
              Gallery
            </Link>
          </div> */}
          {/* <div className="mainSide_body_inner">
            <Link
              to={{ pathname: "/contact_us" }}
              className="Link flex-start"
              onClick={this.props.handleMenuClose}
            >
              <i className="material-icons phone mainSide_body_icon div1"></i>
              Contact Us
            </Link>
          </div> */}
          {/* <div className="mainSide_body_inner">
            <Link
              to={{ pathname: "/services" }}
              className="Link flex-start"
              onClick={this.props.handleMenuClose}
            >
              <i className="material-icons work mainSide_body_icon div1"></i>
              Services
            </Link>
          </div> */}
          {/* <div className="mainSide_body_inner">
            <Link
              to={{ pathname: "/location" }}
              className="Link flex-start"
              onClick={this.props.handleMenuClose}
            >
              <i className="material-icons location_searching mainSide_body_icon div1"></i>
              Our Location
            </Link>
          </div> */}
          {/* <div className="mainSide_body_inner">
            <Link
              to={{ pathname: "/suggestion" }}
              className="Link flex-start"
              onClick={this.props.handleMenuClose}
            >
              <i className="material-icons text_fields mainSide_body_icon div1"></i>
              Submit your suggestions
            </Link>
          </div> */}
        </div>
        <div className="mainSide_body_footer">
          Xenunga {`${new Date().getFullYear()}`}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default MainSide;
