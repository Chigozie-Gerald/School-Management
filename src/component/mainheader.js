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
      search: "",
      showImg: document.getElementById("main_header_wrapper_ID")
        ? window.scrollY >=
          document.getElementById("main_header_wrapper_ID").offsetHeight
        : false,
    };
  }
  handleChange = (e) => {
    console.log("kkk");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.search) {
      console.log(this.state.search);
      this.setState({
        search: "",
      });
    } else {
      return;
    }
  };
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
    const mainHeader_float_arr = [
      { pathLink: "/contact_us", text: "Contact us", icon: "phone" },
      { pathLink: "/services", text: "Services", icon: "work" },
      {
        pathLink: "/suggestion",
        text: "Submit Suggestions",
        icon: "text_fields",
      },
      { pathLink: "/gallery", text: "School's Gallery", icon: "photo" },
    ];
    const mainHeader_float_list = mainHeader_float_arr.map((elem, n) =>
      elem.icon && elem.pathLink && elem.text ? (
        <Link
          key={`mainHeader_float_inner_${n}`}
          className="Link_auto"
          to={{ pathname: elem.pathLink }}
        >
          <div className="main_header_float_inner flex vert_align div-width-100">
            {/* <Link className="Link" to={{ pathname: elem.pathLink }}> */}
            <i className={`material-icons ${elem.icon}`}></i>
            <span>{elem.text}</span>
            {/* </Link> */}
          </div>
        </Link>
      ) : (
        ""
      )
    );
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
        <div className="main_header_inner center">
          <Link to={{ pathname: "/location" }} className="Link">
            <span>Locate us</span>
          </Link>
        </div>
        <div className="main_header_inner more rel center">
          <div className="main_header_float ">
            <div className="wrapper fd_col hide">
              {/* <div className="main_header_float_inner flex vert_align div-width-100">
                <i className={`material-icons phone`}></i>
                <span>Contact Us</span>
              </div>
              <div className="main_header_float_inner flex vert_align div-width-100">
                <i className={`material-icons text_fields`}></i>
                <span>Suggestions</span>
              </div>
              <div className="main_header_float_inner flex vert_align div-width-100">
                <i className={`material-icons photo`}></i>
                <span>School Gallery</span>
              </div>
              <div className="main_header_float_inner flex vert_align div-width-100">
                <i className={`material-icons work`}></i>
                <span>Services</span>
              </div> */}
              {mainHeader_float_list}
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
            <form
              onSubmit={this.handleSubmit}
              className="flex1 wrapper vert_align flex"
              method="post"
              autoComplete="off"
            >
              <input
                type="text"
                placeholder="Search for our services..."
                name="search"
                value={this.state.search}
                onChange={this.handleChange}
                className="wrapper my_input flex1"
              />
              <i
                onClick={() =>
                  this.setState({
                    search: "",
                  })
                }
                className={`material-icons close center ${
                  this.state.search ? "" : "inactive"
                }`}
              ></i>
              <span onClick={this.handleSubmit} className="center">
                Search
              </span>
            </form>
          </div>
        </div>
        <div className="main_header_inner center">
          <Link to={{ pathname: "/location" }} className="Link">
            <span>Register your ward</span>
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
