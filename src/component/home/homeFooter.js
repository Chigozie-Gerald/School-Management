import React, { PureComponent } from "react";
// import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import "./homeFooter.css";

class HomeFooter extends PureComponent {
  render() {
    const footerLinkArr = [
      {
        title: "Services",
        link: "/services",
        inner: [
          { txt: "Add Your Services", type: "text", link: "" },
          { txt: "Discover Services", type: "text", link: "" },
          { txt: "Search Services", type: "search", link: "" },
          { txt: "Make Enquiries", type: "text", link: "" },
          { txt: "Report an Issue", type: "text", link: "" },
        ],
      },
      {
        title: false,
        inner: [
          { txt: "Contact Us", type: "text", link: "/contact_us" },
          {
            txt: "Find our Location",
            type: "text",
            link: "/location",
          },
          { txt: "Register your ward", type: "text", link: "/register_ward" },
          {
            txt: "Check your entrance results",
            type: "search",
            link: "/login/student",
          },
          {
            txt: "Purchase Registration Form",
            type: "text",
            link: "/login/student",
          },
          {
            txt: "Frequently asked questions",
            type: "text",
            link: "/register_ward",
          },
        ],
      },
    ];
    const footerLinkList = footerLinkArr.map((elem, n) => (
      <div
        key={`footer_list_titled_pane_${n}`}
        className="homeFooter_top_inner tll div-width-100 p1"
      >
        {elem.title ? (
          <div>
            <div className="homeFooter_top_sect_head">
              <span className="inline_flex">
                <Link className="Link_auto" to={{ pathname: elem.link }}>
                  {elem.title}
                </Link>
              </span>
            </div>
            {elem.inner.map((elInner, ind) => (
              <div
                key={`footer_inner_list_${n}_${ind}`}
                className="homeFooter_top_sect"
              >
                <span className="inline_flex">{elInner.txt}</span>
              </div>
            ))}
          </div>
        ) : (
          elem.inner.map((elInner, ind) => (
            <div
              key={`footer_inner_list_${n}_${ind}`}
              className="homeFooter_top_sect_head"
            >
              <span className="inline_flex">
                <Link className="Link_auto" to={{ pathname: elInner.link }}>
                  {elInner.txt}
                </Link>
              </span>
            </div>
          ))
        )}
      </div>
    ));
    return (
      <div className="homeFooter_wrapper">
        <div className="homeFooter_top div-width-100 flex fd_col">
          <div className="homeFooter_top_inner cont div-width-100 pr1 pl1">
            <div className="p1 box_border serviceAd_wrapper noBorder div-width-100">
              <div className="serviceAd_head div-width-100 flex horiz_align">
                <div className="serviceAd_head_inline tll center">
                  <i className="material-icons work"></i>
                  <i className="material-icons work"></i>
                  <i className="material-icons work"></i>
                  <i className="material-icons work"></i>
                </div>
              </div>
              <p>
                <b>Let's help your reach your customers</b>
              </p>
              <div className="serviceAd_body div-width-100">
                Advertise your products and services to our huge community, and
                enjoy the regional distribution and seamless contact for your
                products
              </div>
              <div className="serviceAd_btn_div center div-width-100">
                <div className="serviceAd_btn center">Get Started</div>
              </div>
            </div>
          </div>
          <div className="homeFooter_top_inner grided">{footerLinkList}</div>
        </div>
        <div className="homeFooter_bottom div-width-100 center">
          <div className="homeFooter_bottom_img_div center hide rad_50 hide">
            <img
              src={require("../mediaFiles/books.jpg")}
              alt=""
              className="img_div"
            />
          </div>
          <div className="homeFooter_bottom_title">XenSites &copy; 2020</div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default HomeFooter;
