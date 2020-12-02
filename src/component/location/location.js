import React, { PureComponent } from "react";
import "./location.css";
import { Link } from "react-router-dom";
import LittleFooter from "../littleFooter";
// import { connect } from 'react-redux'

class Location extends PureComponent {
  constructor(props) {
    super(props);
    this.handleLocationClose = this.handleLocationClose.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleLocationFullscreen = this.handleLocationFullscreen.bind(this);
    this.state = {
      locationHeader: sessionStorage.getItem("locationHeader"),
      locationFullScreen: false,
    };
  }
  handleLocationFullscreen = () => {
    this.setState({
      locationFullScreen: !this.state.locationFullScreen,
    });
  };
  handleLocationClose = () => {
    sessionStorage.setItem("locationHeader", false);
    this.setState({
      locationHeader: sessionStorage.getItem("locationHeader"),
    });
  };
  handleScroll = () => {
    if (window.scrollY > 2) {
      this.setState({
        makeShadow: true,
      });
    } else {
      this.setState({
        makeShadow: false,
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <div className="location_wrapper tll div-width-100">
        <div
          className={`location_header header_sticky div-width-100 flex ${
            this.state.makeShadow ? "" : "noSHADOW"
          }`}
        >
          <div
            className="location_header_inner center div1"
            onClick={() => this.props.history.goBack()}
          >
            <i className="material-icons arrow_back arrow_back_icon location_header_icon"></i>
            {/* <i className="material-icons arrow_back arrow_back_icon white"></i> */}
          </div>
          <div className="location_header_inner flex vert_align flex_left div2 flex1">
            <span className="div-width-100 ellipsis">Locate Us Quickly</span>
          </div>
        </div>
        <div className="location_body div-width-100">
          <div className="location_map div-width-100 rel">
            <div
              className={
                this.state.locationHeader !== "false"
                  ? "location_map_header flex div-width-100"
                  : "noSHOW"
              }
            >
              <div className="location_map_header_inner flex vert_align flex_left flex1 div1">
                <span className="ellipsis">Use Fingers to navigate map </span>
                <i className="material-icons swipe"></i>
              </div>
              <div
                className="location_map_header_inner center div2"
                onClick={this.handleLocationClose}
              >
                <i className="material-icons close location_map_header_icon"></i>
              </div>
            </div>
            <div
              className="location_map_expand_icon_div center"
              onClick={this.handleLocationFullscreen}
            >
              <Link
                className="Link location_map_expand_icon_link"
                to={{ pathname: "/location_large" }}
              >
                <i className="material-icons fullscreen location_header_expand_icon arrow_back_icon"></i>
              </Link>
            </div>
          </div>
          <div className="location_title_wraper div-width-100">
            <div className="location_title_address div-width-100 box_border fd_col flex">
              <div className="location_title_address_header div-width-100 flex_left">
                Address
              </div>
              <div className="location_title_address_body div-width-100 flex1">
                No. 7, Ikorodu Close, Steel town 1, DSC, Orhuwhorun,
                Ovwian-Aladja, Delta State, Nigeria.
              </div>
            </div>
            <div className="location_title_btn_div div-width-100">
              <div className="location_title_btn flex1 horiz_align">
                <Link
                  className="Link"
                  to={{ pathname: "/location/get_direction" }}
                >
                  <div className="location_title_btn_inner rel div-width-100 horiz_align">
                    Get direction
                  </div>
                </Link>
              </div>
              <div className="location_title_btn_circle rad_50 horiz_align">
                <Link
                  className="Link"
                  to={{ pathname: "/location/get_direction" }}
                >
                  <i className="material-icons arrow_forward arrow_back_icon white"></i>
                </Link>
              </div>
            </div>
            <div className="location_title_contact_us horiz_align">
              <Link
                className="Link location_contact_link"
                to={{ pathname: "/contact_us" }}
              >
                CONTACT US
              </Link>
            </div>
          </div>
          <LittleFooter />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default Location;
