import React, { PureComponent } from "react";
import "./timetable_pane.css";
import { Redirect } from "react-router-dom";
// import { connect } from 'react-redux'

class TimetablePane extends PureComponent {
  render() {
    const { location, match } = this.props;
    this.Link = match.url.substr(0, match.url.length - 5);
    return location.state && location.state.session && location.state.term ? (
      <div className="timetable_wrapper">
        <div className="student_profile_header">Timetable</div>
        <div className="timetable_pane_wrapper flex fd_col">
          <div className="timetable_pane_wrapper_inner">
            {location.state.session}
          </div>
        </div>
      </div>
    ) : (
      <Redirect to={{ pathname: `${this.Link}` }} replace />
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default TimetablePane;
