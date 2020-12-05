import React, { PureComponent } from "react";
import "./gallery.css";
import { Link } from "react-router-dom";
import LittleFooter from "../littleFooter";
// import { connect } from 'react-redux'

class Gallery extends PureComponent {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      makeShadow: false,
    };
  }
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
    const gallery_body_arr = [
      {
        des: "School Environment",
        path: "school_environment",
        total: "23",
        img: "engineer",
      },
      { des: "Outings", path: "outing", total: "10", img: "banner" },
      { des: "Students", path: "students", total: "13", img: "books" },
      { des: "Staff", path: "staff", total: "7", img: "plumber" },
      { des: "Management", path: "mgt", total: "33", img: "doctor" },
    ];
    const gallery_body_list = gallery_body_arr.map((elem, n) => {
      return (
        <div
          className="gallery_body_pane div-width-100 rel center hide"
          key={n * 0.9}
        >
          <Link
            to={{
              pathname: `gallery/photo/${elem.path}`,
              state: { title: `${elem.des}` },
            }}
            className="Link"
          >
            <img
              src={require(`../mediaFiles/${elem.img}.jpg`)}
              alt=""
              className="img_div"
            />
            <div className="gallery_body_pane_float ellipsis flex flex_left div-width-100">
              <div className="gallery_body_pane_float_header ellipsis flex vert_align flex_left div-width-100">
                <i className="material-icons photo"></i> {elem.total}
              </div>
              <span className="p1">{elem.des}</span>
            </div>
          </Link>
        </div>
      );
    });
    const { history } = this.props;
    return (
      <div className="gallery_wrapper div-width-100">
        <div
          className={
            this.state.makeShadow
              ? "gallery_header div-width-100 header_sticky flex"
              : "gallery_header div-width-100 header_sticky flex noSHADOW"
          }
        >
          <div
            className="gallery_header_inner center div1"
            onClick={() => history.goBack()}
          >
            <i className="material-icons arrow_back arrow_back_icon white"></i>
          </div>
          <div className="gallery_header_inner flex vert_align flex_left div2">
            <div className="gallery_header_inner_img_div rad_50 center hide">
              <img
                src={require("../social.jpg")}
                alt="badge"
                className="img_div"
              />
            </div>
            <div className="gallery_header_inner_div2 flex flex_left ellipsis hide">
              School's Gallery
            </div>
          </div>
        </div>
        <div className="gallery_body div-width-100">{gallery_body_list}</div>
        <LittleFooter />
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default Gallery;
