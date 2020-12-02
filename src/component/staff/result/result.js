import React, { PureComponent } from "react";
import "./result.css";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import NotFound from "../../notFound";
import RowBox from "../../rowBox/rowBox";
import ResultPost from "./resultPost";
import { colorGenerator, letter_index } from "../../utils/indexHandler";
import { StudentListPane } from "../student/studentList";
// import { connect } from 'react-redux'

class result extends PureComponent {
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route
          path={`${match.url}/post`}
          render={(props) => <ResultPost {...props} />}
        />
        <Route
          path={`${match.url}/list`}
          render={(props) => {
            const student_arr = [
              { name: "Ijomah Chigozie", post: "Head boy" },
              { name: "Okonkwo Chinwe", post: "Head girl" },
              { name: "Stephen Hawkins", post: "" },
              { name: "David Solomon", post: "" },
              { name: "Afolabi Bolarinwa", post: "" },
              { name: "Kolapo Imam Malik", post: "Class Prefect" },
            ];
            const student_list = student_arr
              .sort((a, b) => letter_index(a.name) - letter_index(b.name))
              .map((elem, n) => (
                <StudentListPane
                  txt="Upload Result"
                  key={`student_pane_list_${n}`}
                  details={elem}
                />
              ));

            const student_list_pending = student_arr
              .sort((a, b) => letter_index(a.name) - letter_index(b.name))
              .filter((stud, ndx) => stud.post)
              .map((elem, n) => (
                <StudentListPane
                  txt="Upload Result"
                  key={`student_pane_list_${n}`}
                  details={elem}
                />
              ));
            return (
              <div
                style={{ backgroundColor: "var(--lteBacColor" }}
                className="profile_min_height div-width-100"
              >
                <div className="studList_wrap_header result_class_list_head flex vert_align div-width-100">
                  SS3A Students
                </div>
                <div className="result_class_list_body p1 div-width-100 flex1">
                  {student_list_pending.length && (
                    <div className="div-width-100">
                      <div className="studList_wrap_header result_list pending box_border noBorder flex vert_align div-width-100">
                        Pending Uploads ({student_list_pending.length})
                      </div>
                      {student_list_pending}
                    </div>
                  )}
                  {student_list.length && (
                    <div className="div-width-100">
                      <div className="studList_wrap_header result_list box_border noBorder flex vert_align div-width-100">
                        Uploaded Results ({student_list.length})
                      </div>
                      {student_list}
                    </div>
                  )}
                </div>
              </div>
            );
          }}
        />
        <Route
          path={`${match.url}/view/all`}
          render={(props) => (
            <div className="profile_min_height div-width-100 p1">
              <ResultUploadClassPane
                details={{
                  name: "JSS3A Maths",
                  num: 53,
                  uploads: 53,
                }}
              />
              <ResultUploadClassPane
                details={{
                  name: "SS1F Chemistry",
                  num: 32,
                  uploads: 1,
                }}
              />
              <ResultUploadClassPane
                details={{
                  name: "JSS2A Biology",
                  num: 47,
                  uploads: 47,
                }}
              />
              <ResultUploadClassPane
                details={{
                  name: "JSS3A Social Studies",
                  num: 55,
                  uploads: 17,
                }}
              />
              <ResultUploadClassPane
                details={{
                  name: "SS1J Maths",
                  num: 34,
                  uploads: 22,
                }}
              />
            </div>
          )}
        />
        <Route
          exact
          path={`${match.url}/view`}
          render={(props) => (
            <div className="profile_min_height div-width-100 flex fd_col">
              <div className="studList_wrap_header result_class_list_head flex vert_align div-width-100">
                Showing Uploaded/Pending Results for this Session
              </div>
              <div className="flex1 div-width-100 p1">
                <ResultUploadClassPane
                  details={{
                    name: "JSS3A Maths",
                    num: 53,
                    uploads: 53,
                  }}
                />
                <ResultUploadClassPane
                  details={{
                    name: "JSS3C Physics",
                    num: 46,
                    uploads: 27,
                  }}
                />
                <div className="assCreate_btn div1 center inline_flex div-width-100">
                  <Link
                    className="Link"
                    to={{
                      pathname: this.props.match.url + "/view/all",
                    }}
                  >
                    View Previously Uploaded Results
                  </Link>
                </div>
              </div>
            </div>
          )}
        />
        <Route
          exact
          path={`${match.url}`}
          render={() => (
            <div className="div-width-100 profile_min_height pt1">
              <RowBox
                padding="1rem"
                title={
                  <div className="div-width-100 flex vert_align">
                    <i
                      className="material-icons upload_file pr1"
                      style={{ color: "var(--pantone)" }}
                    ></i>
                    <span className="pr1 flex1">Upload a Class' Result</span>
                  </div>
                }
                link={match.url + "/post"}
              />
              <RowBox
                padding="1rem"
                title={
                  <div className="div-width-100 flex">
                    <i
                      className="material-icons view_list pr1"
                      style={{ color: "var(--pantone)" }}
                    ></i>
                    <span className="pr1 flex1">View Results You Uploaded</span>
                  </div>
                }
                link={match.url + "/view"}
              />
            </div>
          )}
        />
        <Route
          exact
          render={(props) => (
            <NotFound {...props} height="calc(var(--vvh, 1vh)*100 - 9.5rem)" />
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

export default result;

export const ResultUploadClassPane = withRouter(
  class ResultUploadClassPane extends PureComponent {
    render() {
      const { details } = this.props;
      return !details || !details.name || !details.uploads || !details.num ? (
        ""
      ) : (
        <div className="tll resultUCP_wrapper box_border p1 vert_align flex">
          <div className="resultUCP_detail flex1">
            <div className="resultUCP_detail_name">{details.name} Class</div>
            <div className="resultUCP_detail_ses">
              2nd Term, 2018/2019 Academic Session
            </div>
            <div className="resultUCP_detail_num">
              {details.num} Student{parseInt(details.num) > 1 && "s"}
            </div>
            <div className="resultUCP_detail_comm">
              <div>
                <span className="completeRem">
                  {details.uploads >= details.num &&
                    "All students' results uploaded"}
                </span>
              </div>
              {details.uploads >= details.num ? (
                ""
              ) : (
                <div>
                  <span className="incompleteRem">
                    {details.num - details.uploads}
                  </span>{" "}
                  results are pending
                </div>
              )}
            </div>
          </div>
          <div
            style={{
              backgroundColor: colorGenerator(
                parseInt(details.num) + details.name.substr(0, 1),
                parseInt(details.num),
                parseInt(details.num) - parseInt(details.uploaded)
              ),
            }}
            className="resultUCP_img"
          ></div>
        </div>
      );
    }
  }
);

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }
