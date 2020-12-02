import React, { PureComponent } from "react";
import "./student.css";
import { Link, Switch, Route } from "react-router-dom";
import { link } from "../../utils/indexHandler";
import StudentTypePane from "./studentTypePane";
import NotFound from "../../notFound";
import StudentList from "./studentList";
// import { connect } from 'react-redux'

class Student extends PureComponent {
  render() {
    const { match } = this.props;
    const class_arr = [
      {
        form: true,
        details: [
          {
            role: "Form Teacher",
            class: "JSS3D",
            number: "53",
            id: "5eab6679420vjf920",
            info: "Update required",
          },
          {
            title: "Your Form classes",
            role: "Form teacher",
            class: "SS1A",
            number: "36",
            id: "5eab6679420vjf920",
            info: "",
          },
        ],
      },
      {
        form: false,
        details: [
          {
            role: "Mathematics Teacher",
            class: "JSS3B",
            number: "53",
            id: "5eab6679420vjf920",
            info: "Update required",
          },
          {
            role: "Physics teacher",
            class: "JSS2G",
            number: "31",
            id: "5eab6679420vjf920",
            info: "",
          },
          {
            role: "Physics teacher",
            class: "SS1F",
            number: "31",
            id: "5eab6679420vjf920",
            info: "Two of your students left the school",
          },
        ],
      },
    ];

    const class_list = class_arr
      .filter((elem) => elem.details || elem.details.length !== 0)
      .map((elem, n) => (
        <StudentTypePane
          key={`staff_student_details${elem.type}_${n}`}
          form={elem.form}
          details={elem.details}
        />
      ));

    return (
      <Switch>
        <Route
          exact
          path={match.url + "/l/:id"}
          render={(props) => <StudentList {...props} />}
        />
        <Route
          exact
          path={match.url}
          render={() => (
            <div className="profile_min_height div-width-100 staff_student_wrapper">
              <div className="staff_student_big_btn grid_col_2 div-width-100">
                <div className="staff_student_big_inner">
                  <div className="staff_student_big_box center">
                    <Link
                      className="Link"
                      to={{ pathname: `${link(match.url)}/results` }}
                    >
                      Result
                    </Link>
                  </div>
                  <div className="staff_student_big_txt"></div>
                </div>
                <div className="staff_student_big_inner">
                  <div className="staff_student_big_box center">
                    <Link
                      className="Link"
                      to={{ pathname: `${link(match.url)}/assignment/init` }}
                    >
                      Assignment
                    </Link>
                  </div>
                  <div className="staff_student_big_txt"></div>
                </div>
              </div>
              {class_list}
            </div>
          )}
        />
        <Route
          exact
          render={(props) => (
            <NotFound
              height="calc(var(--vvh, 1vh) * 100 - 9.5rem)"
              {...props}
            />
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

export default Student;
