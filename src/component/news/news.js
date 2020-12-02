import React, { PureComponent } from "react";
import "./news.css";
import "../profile/studentProfile.css";
import LittleFooter from "../littleFooter";
import { Switch, Route, Link } from "react-router-dom";
import NewsPage from "../newsPage/newsPage";
import NotFound from "../notFound";
// import { connect } from 'react-redux'

class News extends PureComponent {
  render() {
    const { match } = this.props;
    const news_arr = [1, 2, 3, 4];
    const new_list = news_arr.map((elem, n) => (
      <div
        key={`${n}-news`}
        className="news_body_inner fd_col flex center width_100"
      >
        <Link className="Link" to={{ pathname: `${match.url}/${n}` }}>
          <div className="news_body_inner_top flex width_100">
            <div className="news_body_inner_top_title flex flex1 vert_align flex-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              vitae cupiditate porro?
            </div>
            <div className="news_body_inner_top_img hide_overflow center">
              <img
                src={require("../mediaFiles/flower.jpg")}
                alt=""
                className="img_div"
              />
            </div>
          </div>
          <div className="news_body_inner_bottom width_100 flex vert_align flex-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nulla
            eveniet exercitationem?
          </div>
          <div className="news_body_inner_footer width_100 flex vert_align flex-start">
            Posted on - 1st February, 2020
          </div>
        </Link>
      </div>
    ));
    return (
      <Switch>
        <Route
          path={`${match.url}/:id`}
          render={(props) => <NewsPage {...props} />}
        />
        <Route
          path={`${match.url}`}
          render={() => (
            <div className="full_page_height_min width_100 flex fd_col">
              <div className="flex vert_align">
                <div
                  onClick={this.props.history.goBack}
                  className="newsPage_head_icon_div rad_50 center inline_flex box_border noBorder"
                >
                  <i className="material-icons arrow_back arrow_back_icon whi.te"></i>
                </div>
                <div className="student_profile_header news_header">News</div>
              </div>
              <div className="news_body flex1 tll">{new_list}</div>
              <LittleFooter />
            </div>
          )}
        />
        <Route
          exact
          render={(props) => (
            <NotFound {...props} height="calc(var(--vvh, 1vh) * 100)" />
          )}
        />
      </Switch>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default News;
