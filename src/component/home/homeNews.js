import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
// import { connect } from 'react-redux'
import "./homeNews.css";

class HomeNews extends PureComponent {
  render() {
    let arr = [1, 2, 3, 4];
    let newList = arr.map((nws, n) => {
      return n < 6 ? (
        <div className="homeNews_body_wrapper" key={n}>
          <Link className="Link" to={{ pathname: `/news/${n}` }}>
            <div className="homeNews_body_inner div1">
              <div className="homeNews_body_inner_img">
                <img
                  src={require("../mediaFiles/flower.jpg")}
                  alt=""
                  className="img_div"
                />
              </div>
            </div>
            <div className="homeNews_body_inner div2">
              <div className="homeNews_body_inner_div2_header">
                School settles resumption date for 12th August, 2020...
              </div>
              <div className="homeNews_body_inner_div2_body">
                The school board after a meeting on the 22nd of june...
              </div>
            </div>
            <div className="homeNews_body_inner div3">
              <i className="material-icons keyboard_arrow_right home_news_body_icon"></i>
            </div>
          </Link>
        </div>
      ) : null;
    });
    return (
      <div className="homeNews_wrapper">
        <div className="homeNews_header">
          <div className="homeNews_header_inner div1">News</div>
          <div className="homeNews_header_inner div2">
            <Link
              className="Link homeNews_header_inner_link"
              to={{ pathname: "/news" }}
            >
              More
            </Link>
          </div>
        </div>
        <div className="homeNews_body">{newList}</div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default HomeNews;
