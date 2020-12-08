import React, { PureComponent } from "react";
import "./timetable_pane.css";
import { Redirect } from "react-router-dom";
import { link } from "../utils/indexHandler";
// import { connect } from 'react-redux'

class TimetablePane extends PureComponent {
  render() {
    const { location, match } = this.props;
    return location.state && location.state.txt1 && location.state.txt2 ? (
      <div className="timetable_wrapper flex1 flex fd_col">
        <div className="pl1">
          <div className="student_profile_header pl1">Timetable</div>
        </div>
        <div className="timetable_pane_wrapper flex fd_col">
          <div className="timetable_pane_wrapper_inner">
            {location.state.session}
          </div>
        </div>
      </div>
    ) : (
      <Redirect to={{ pathname: link(match.url) }} replace />
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default TimetablePane;
