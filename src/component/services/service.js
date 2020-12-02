import React, { PureComponent } from "react";
import "./service.css";
import SearchBox from "../searchBox";
import LittleFooter from "../littleFooter";
import { Link, Route, Switch } from "react-router-dom";
import ServiceSearch from "../serviceSearch/serviceSearch";
import ServicePane from "../servicePane/servicePane";
import NotFound from "../notFound";
// import { connect } from "react-redux";

class Service extends PureComponent {
  constructor(props) {
    super(props);
    this.focusFunc = this.focusFunc.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      services: "",
      makeShadow: false,
    };
  }
  focusFunc = (param) => {
    this.props.history.push(param);
  };
  handleClose = () => {
    this.setState({
      services: "",
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.services);
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
    const { match, history, location } = this.props;

    const service_arr = [1, 2, 3, 4, 5, 6];
    let serviceList = service_arr.map((ser, n) => {
      return (
        <div className="service_pane rel div-width-100" key={n}>
          <Link
            className="Link_block blue_link link_Float"
            to={{ pathname: `/services/${n}` }}
          ></Link>
          <div className="service_pane_top flex rel div-width-100">
            <div className="service_pane_top_header_img_div div-width-100 flex vert_align flex_right">
              <div className="service_pane_top_header_img center hide">
                <img
                  src={require("../social.jpg")}
                  alt="logo"
                  className="img_div"
                />
              </div>
            </div>
            <div className="service_pane_top_img_div center float">
              <i className="material-icons work service_pane_icon"></i>
            </div>
          </div>
          <div className="service_pane_body flex fd_col div-width-100">
            <div className="service_pane_body_header">
              Automated Cooker Engine Repairs
            </div>
            <div className="service_pane_body_inner"></div>
          </div>
        </div>
      );
    });
    return (
      <div className="service_wrapper div-width-100">
        {match.url === location.pathname ||
        location.pathname.startsWith(`${match.url}/search`) ? (
          <div
            className={
              this.state.makeShadow
                ? "service_header flex vert_align div-width-100"
                : "service_header flex vert_align div-width-100 noSHADOW"
            }
          >
            <div
              className="service_header_inner flex vert_align horiz_align div1"
              onClick={() => history.goBack()}
            >
              <i className="material-icons arrow_back arrow_back_icon service_header_inner_icon"></i>
            </div>
            <div className="service_header_inner flex vert_align horiz_align div2">
              <SearchBox
                focusFunc={() => this.focusFunc(`${match.url}/search`)}
                services={this.state.services}
                handleChange={this.handleChange}
                handleClose={this.handleClose}
                handleSubmit={this.handleSubmit}
              />
            </div>
          </div>
        ) : null}

        <Switch>
          <Route
            path={`${match.url}/search`}
            render={(props) => (
              <ServiceSearch
                {...props}
                height="calc(var(--vvh, 1vh)*100 - 3.5rem)"
              />
            )}
          />
          <Route
            path="/services/:paneId"
            render={(props) => <ServicePane {...props} />}
          />
          <Route
            path={`${match.url}`}
            render={() => (
              <div>
                <div className="service_body div-width-100">
                  {/* Intro Header to Services */}
                  <div className="service_top div-width-100 rel">
                    <div className="service_top_front div-width-100 flex vert_align flex_right">
                      <i className="material-icons help_outline center"></i>
                    </div>
                    <div className="service_body_add_div_title div-width-100 center">
                      Grow your business with us!
                    </div>
                    {/* Description and button */}
                    <div className="service_body_btn_div flex fd_col vert_align div-width-100">
                      <div className="service_body_btn_des div-width-100">
                        You can join our community by getting started
                      </div>
                      <div className="service_body_btn ellipsis center">
                        <Link
                          to={{ pathname: "/services/get_started" }}
                          className="Link"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Services Pane and Body */}
                  <div className="service_body_wrapper div-width-100">
                    <div className="service_body_wrapper_header flex vert_align flex_left div-width-100">
                      Explore Services
                    </div>
                    {serviceList}
                  </div>
                </div>
                {/* Footer */}
                <div className="service_body_wrapper_footer">
                  <div className="service_body_wrapper_footer_des">
                    This site is only a venue for advertisement and we will not
                    be held responsible for any unruly conduct done on this site
                    but we will try to ensure that such things do not occur.
                  </div>
                  <LittleFooter />
                </div>
              </div>
            )}
          />
          <Route exact render={(props) => <NotFound {...props} />} />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default Service;
