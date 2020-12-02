import React, { PureComponent } from "react";
import "./class.css";
import { Link, Switch, Route } from "react-router-dom";
import NotFound from "../../notFound";
import Select from "../../select/select";
// import { connect } from 'react-redux'

class Class extends PureComponent {
  render() {
    const { match } = this.props;

    const class_arr = [
      {
        list: [
          {
            title: "New General Mathematics volume 2",
            author: "Mohamad Tanko",
          },
        ],
        subject: "Mathematics",
      },
      {
        list: [
          {
            title: "Modern Biology volume 2",
            author: "Eze Bonafide L.",
          },
          {
            title: "Essential Biology 2007",
            author: "Karl Johnson Oluwajuwon",
          },
        ],
        subject: "Biology",
      },
      {
        list: [
          {
            title: "New School Physics",
            author: "P F. Anyakoha",
          },
        ],
        subject: "Physics",
      },
      {
        list: [
          {
            title: "New School Chemistry Ababio",
            author: "A B. Ababio",
          },
        ],
        subject: "Chemistry",
      },
    ];
    const class_list = class_arr.map((elem, n) => (
      <ClassPane
        match={this.props.match}
        key={`staff_class_list_${n}`}
        subject={elem.subject}
        list={elem.list}
        title="SS2 20/9"
      />
    ));
    return (
      <Switch>
        <Route
          exact
          path={match.url}
          render={() => (
            <div className="assCreatePane rel profile_min_height flex1 flex fd_col div1 div-width-100">
              <Select />
              <Select />
              <div className="assCreate_btn_wrapper flex1 flex horiz_align">
                <div className="assCreate_btn div1 center inline_flex div-width-100">
                  <Link
                    className="Link"
                    to={{ pathname: this.props.match.url + "/list" }}
                  >
                    Next
                  </Link>
                </div>
              </div>
            </div>
          )}
        />
        <Route
          path={`${match.url}/list`}
          render={() => (
            <div className="class_wrapper profile_min_height div-width-100 tll">
              <div className="lob_header div-width-100 flex">
                <span className="flex1">
                  SS2 2017/2018 Session List of Books
                </span>
                <div className="center">Contact a book seller</div>
              </div>
              {class_list}
            </div>
          )}
        />
        <Route
          exact
          render={() => (
            <NotFound height="calc(var(--vvh, 1vh)*100 - 9.5rem)" />
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

export default Class;

export class ClassPane extends PureComponent {
  render() {
    const { subject, list } = this.props;
    return (
      <div className="box_border hide flex vert_align classPane div-width-100">
        <div className="classPane_txt flex1">
          {subject && <div className="classPane_role">{subject}</div>}
          {list.map((el, ind) => (
            <div
              key={`staff_lob_subject_${ind}`}
              className="classPane_name flex"
            >
              <span>-</span>
              <span className="flex1">
                {el.title}, {el.author && `(${el.author})`}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
