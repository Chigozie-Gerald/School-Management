import React, { PureComponent } from "react";
// import { connect } from 'react-redux'
import "./mainheader.css";
import { Link } from "react-router-dom";

class MainHeader extends PureComponent {
  render() {
    return (
      <div
        className={`main_header_wrapper flex smFlex div-width-100 header_sticky ${
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
        <div className="main_header_inner center">
          <Link to={{ pathname: "/location" }} className="Link">
            <i className="material-icons location_searching"></i>
          </Link>
        </div>
        <div className="main_header_inner center">
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

export class MainHeaderMd extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      showImg: document.getElementById("main_header_wrapper_ID")
        ? window.scrollY >=
          document.getElementById("main_header_wrapper_ID").offsetHeight
        : false,
    };
  }
  handleScroll = () => {
    this.setState({
      showImg: document.getElementById("main_header_wrapper_ID")
        ? window.scrollY >=
          document.getElementById("main_header_wrapper_ID").offsetHeight
        : false,
    });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    const id = "main_header_wrapper_ID";
    return (
      <div
        id={id}
        className={`main_header_wrapper mdFlex vert_align div-width-100 header_sticky ${
          this.props.makeShadow ? "" : "noSHADOW"
        }`}
      >
        <div
          className={`main_header_img_div center hide 
        ${this.state.showImg ? "blurIn" : "noSHOW"}
        `}
        >
          <img
            src={require("./social.jpg")}
            alt=""
            className="img_div rad_50"
          />
        </div>
        <div className="main_header_inner center">
          <Link to={{ pathname: "/contact_us" }} className="Link">
            <span>Contact us</span>
          </Link>
        </div>
        <div className="main_header_inner more rel center">
          <div className="main_header_float ">
            <div className="wrapper fd_col hide">
              <div className="main_header_float_inner div-width-100"></div>
              <div className="main_header_float_inner div-width-100"></div>
              <div className="main_header_float_inner div-width-100"></div>
              <div className="main_header_float_inner div-width-100"></div>
            </div>
          </div>
          <span>
            More
            <i className="material-icons arrow_drop_down"></i>
          </span>
        </div>
        {/* flexxx */}
        <div className="main_header_flex flex1 flex vert_align">
          <div className="main_header_flex_inner hide flex vert_align">
            <input
              type="text"
              placeholder="Search for our services..."
              name=""
              id=""
              className="wrapper my_input flex1"
            />
            <span>Search</span>
          </div>
        </div>
        <div className="main_header_inner center">
          <Link to={{ pathname: "/location" }} className="Link">
            <span>Locate us</span>
          </Link>
        </div>
        <div className="main_header_inner center">
          <Link to={{ pathname: "/login/student" }} className="Link">
            <span>Login</span>
          </Link>
        </div>
      </div>
    );
  }
}
