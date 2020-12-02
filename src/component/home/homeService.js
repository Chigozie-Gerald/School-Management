import React, { PureComponent } from "react";
// import { connect } from 'react-redux'
import "./homeService.css";
import { Link } from "react-router-dom";
import Swipe from "../swipeFile";

class HomeService extends PureComponent {
  componentDidMount() {
    let N = document.getElementById("home_service").children.length;
    document.getElementById("home_service").style.setProperty("--n", N);
    this.swiper = new Swipe("home_service", 100, 500, "80", "0.5", 0);
    this.swiper.go();
  }
  render() {
    const arr_service = [1, 2, 3, 4, 5];
    const service_list = arr_service.map((pane, n) => {
      return (
        <div className="homeService_body_inner slider_div" key={n}>
          <div className="homeService_body_inner_wrapper">
            <Link
              className="Link_block  link_Float"
              to={{ pathname: `/services/${n}` }}
            ></Link>
            <div className="homeService_body_inner_top">
              <div className="homeService_body_inner_top_badge">
                <img
                  src={require("../social.jpg")}
                  alt=""
                  className="img_div"
                />
              </div>
              <i className="material-icons work service_pane_icon"></i>
            </div>
            <div className="homeService_body_inner_body">
              <div className="service_pane_body_header">
                Automated Cooker Engine Repairs {pane}
              </div>
              <div className="service_pane_body_inner_home">
                Repair your appliances at a very cool price. Open our bio to
                view more details
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="homeService_wrapper">
        <div className="homeService_header">
          <div className="homeService_header_div div1">Services we offer</div>
          <div className="homeService_header_div div2">
            <Link
              className="Link_auto flex-end height_100 blue_link"
              to={{ pathname: "/services" }}
            >
              View All
            </Link>
          </div>
        </div>
        <div className="homeService_body swipe_wrapper" id="home_service">
          {service_list}
          <div className="homeService_body_next_div">
            <div className="homeService_body_next_div_img_div">
              <img src={require("../social.jpg")} alt="" className="img_div" />
            </div>
            <span>Make your service or product public with us today!</span>
            <div className="homeService_body_next_btn">
              <Link to={{ pathname: "/services/get_started" }} className="Link">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default HomeService;
