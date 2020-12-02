import React, { PureComponent } from "react";
import "./studentGallery.css";
import { Switch, Route, Link } from "react-router-dom";
import NotFound from "../notFound";
import SchoolAndStudentPhoto from "../schoolAndStudentPhoto/schoolAndStudentPhoto";
// import { connect } from 'react-redux'

class StudentGallery extends PureComponent {
  render() {
    const { match } = this.props;
    const studetnGallery_arr = [
      "2017/2018 Session",
      "2018/2019 Session",
      "2019/2020 Session",
    ];
    const studentGallery_list = studetnGallery_arr.map((elem, n) => (
      <div className="studentFees_body_inner" key={`${n}-studentGallery`}>
        <Link
          className="Link flex-start"
          to={{
            pathname: `${match.url}/photo`,
            state: { showHeader: false, title: `${elem} Pictures` },
          }}
        >
          <div className="studentFees_body_inner_title">{elem}</div>
          <div className="studentFees_body_inner_icon_div">
            <i className="material-icons keyboard_arrow_right keyboard_arrow"></i>
          </div>
        </Link>
      </div>
    ));
    return (
      <Switch>
        <Route
          path={`${match.url}/photo`}
          render={(props) => <SchoolAndStudentPhoto {...props} />}
        />
        <Route
          exact
          path={`${match.url}`}
          render={() => (
            <div className="studentProfile_body">
              <div className="studentGallery_box"></div>
              {studentGallery_list}
            </div>
          )}
        />
        <Route
          exact
          render={() => (
            <NotFound height="calc(var(--vh, 1vh)* 100 - 6.5rem)" />
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

export default StudentGallery;
