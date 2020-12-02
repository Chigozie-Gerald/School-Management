import React, { PureComponent } from "react";
import "./studentAssignment.css";
// import { connect } from 'react-redux'

class StudentAssignment extends PureComponent {
  render() {
    const student_ass_arr = [
      {
        subject: "Basic Technology",
        title: "2nd Term mid-term Assignment on Metals and Compounds",
        posted: "1st January, 2019",
        submited: "22nd June, 2019",
      },
      {
        subject: "Mathematics",
        title: "2nd Term imd-term assignment on Quadrilaterals",
        posted: "1st March, 2019",
        submited: "15th April, 2019",
      },
    ];
    const student_ass_list = student_ass_arr.map((elem, n) => {
      return (
        <div className="studentAssignment_div" key={n}>
          <div className="studentAssignment_div_head">
            <div className="studentAssignment_div_head_subject">
              {elem.subject}
            </div>
            <div className="studentAssignment_div_head_title">{elem.title}</div>
            <div className="studentAssignment_div_head_posted">
              <p>
                <b>Posted on:</b> {elem.posted}
              </p>
            </div>
            <div className="studentAssignment_div_head_submit">
              <p>
                <b>To be submitted on:</b> {elem.submited}
              </p>
            </div>
          </div>
          <div className="studentAssignment_div_body">
            <p>
              <b></b>
            </p>
            <p>
              <b></b>
            </p>
            <p>
              <b></b>
            </p>
          </div>
        </div>
      );
    });
    return (
      <div className="studentProfile_body div-width-100">
        <div className="student_profile_header">Assignments</div>
        <div className="student_profile_body studentAss_body">
          <div className="studentAssignment_body_header">Recent</div>
          <div className="studentAssignment_recent">{student_ass_list}</div>
          <div className="studentAssignment_body_header div2">
            <div>Older</div>
          </div>
          <div className="studentAssignment_body">{student_ass_list}</div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default StudentAssignment;
