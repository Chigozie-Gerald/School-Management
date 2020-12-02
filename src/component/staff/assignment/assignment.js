import React, { PureComponent } from "react";
import "./assignment.css";
import { Link, Route, Switch } from "react-router-dom";
import AssignmentCreate from "./assignmentCreate";
import AssignmentPane from "./assignmentPane";
import NotFound from "../../notFound";
import AssignmentView from "./assignmentView";
import RowBox from "../../rowBox/rowBox";
// import { connect } from "react-redux";

class Assignment extends PureComponent {
  render() {
    const { match } = this.props;
    const assignment_arr = [
      {
        early: true,
        details: [1, 2],
      },
      {
        early: false,
        details: [3],
      },
    ];
    const assignment_list = assignment_arr
      .filter((e) => e.details && e.details.length > 0)
      .map((elem, n) => (
        <AssignmentList
          key={`staff_assignment_${n}`}
          early={elem.early}
          details={elem.details}
        />
      ));
    return (
      <Switch>
        <Route
          path={`${match.url}/create`}
          render={(props) => <AssignmentCreate {...props} />}
        />
        <Route
          path={`${match.url}/init`}
          render={() => (
            <div className="div-width-100 profile_min_height pt1">
              <RowBox
                padding="1rem"
                title={
                  <div className="div-width-100 flex vert_align">
                    <i
                      className="material-icons library_add pr1"
                      style={{ color: "var(--pantone)" }}
                    ></i>
                    <span className="pr1 flex1">Create a New Assignment</span>
                  </div>
                }
                link={match.url + "/create"}
              />
              <RowBox
                padding="1rem"
                title={
                  <div className="div-width-100 flex">
                    <i
                      className="material-icons folder pr1"
                      style={{ color: "var(--pantone)" }}
                    ></i>
                    <span className="pr1 flex1">
                      View Previously Created Assignments
                    </span>
                  </div>
                }
                link={match.url}
              />
            </div>
          )}
        />
        <Route
          path={`${match.url}/view/:id`}
          render={(props) => <AssignmentView {...props} />}
        />
        <Route
          exact
          path={match.url}
          render={() => (
            <div className="profile_min_height div-width-100 staff_assignment_wrapper flex fd_col">
              <Link to={{ pathname: `${match.url}/create` }} className="Link">
                <div className="staff_assignment_btn div-width-100 center white_link">
                  Create an Assignment
                </div>
              </Link>
              <div className="staff_assignment_body div-width-100">
                {assignment_arr ? (
                  assignment_list
                ) : (
                  <DefaultAssignmentList
                    text={
                      <div>
                        <p className="assList_p">No Assignments Yet</p>
                        <p>Assignments you create will appear here</p>
                      </div>
                    }
                  />
                )}
              </div>
            </div>
          )}
        />
        <Route
          exact
          render={(props) => (
            <NotFound
              {...props}
              height="calc(var(--vvh, 1vh) * 100 - 9.5rem)"
            />
          )}
        />
      </Switch>
    );
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default Assignment;

export class AssignmentList extends PureComponent {
  render() {
    return (this.props.details && this.props.details.length === 0) ||
      !this.props.details ? (
      ""
    ) : (
      <div className="assList_wrapper tll">
        {this.props.student ? (
          ""
        ) : (
          <div className="assList_header">
            {this.props.early ? "Earlier " : "Older "}Assignments (
            {`${this.props.details.length}`})
          </div>
        )}
        <div className="assList_body">
          {this.props.details.map((elem, n) => (
            <AssignmentPane key={`staff_assignment_pane_${n}`} n={n} />
          ))}
        </div>
      </div>
    );
  }
}

export class DefaultAssignmentList extends PureComponent {
  render() {
    return (
      <div className="dAssList_wrap flex1 center flex fd_col">
        {this.props.text}
      </div>
    );
  }
}
