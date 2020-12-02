import React, { PureComponent } from "react";
import "./periodInit.css";
import { Switch, Route } from "react-router-dom";
import RowBox from "../../rowBox/rowBox";
import Period from "./period";
import Timetable from "../../timetable/timetable";
import TimetablePane from "../../timetable_pane/timetable_pane";
// import { connect } from 'react-redux'

class PeriodInit extends PureComponent {
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route
          exact
          path={`${match.url}/timetable`}
          render={(props) => <Timetable {...props} />}
        />
        <Route
          exact
          path={`${match.url}/timetable/grid`}
          render={(props) => <TimetablePane {...props} />}
        />
        <Route
          exact
          path={`${match.url}/period`}
          render={(props) => <Period {...props} />}
        />
        <Route
          exact
          path={`${match.url}`}
          render={() => (
            <div className="div-width-100 profile_min_height periodInit_wrapper">
              {/* <RowBox
                info="You have two periods today"
                title="Periods you take"
                // title={
                //   <div className="div-width-100 flex vert_align">
                //     <i
                //       className="material-icons library_add pr1"
                //       style={{ color: "var(--pantone)" }}
                //     ></i>
                //     <span className="pr1 flex1">Periods you take</span>
                //   </div>
                // }
                padding="1rem"
                link={`${match.url}/period`}
              /> */}
              <RowBox
                padding="1rem"
                title={
                  <div className="div-width-100 flex vert_align">
                    <i
                      className="material-icons access_time upload_filde pr1"
                      style={{ color: "var(--pantone)" }}
                    ></i>
                    <div className="flex fd_col">
                      <span className="pr1 flex1">Periods you take</span>
                      <span className="inline_flex rowBox_custom_info flex1">
                        You have a period now!
                      </span>
                    </div>
                  </div>
                }
                link={`${match.url}/period`}
              />
              <RowBox
                info={false}
                title={
                  <div className="div-width-100 flex vert_align">
                    <i
                      className="material-icons view_list upload_filde pr1"
                      style={{ color: "var(--pantone)" }}
                    ></i>
                    <span className="pr1 flex1">View Timetable</span>
                  </div>
                }
                padding="1rem"
                link={`${match.url}/timetable`}
              />
            </div>
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

export default PeriodInit;
