import React, { PureComponent } from "react";
import { withRouter, Link } from "react-router-dom";
import "./assignment.css";

class AssignmentPane extends PureComponent {
  render() {
    const {
      match,
      title,
      classValue,
      teacher,
      posted,
      due,
      dueTime,
      link,
      questions,
    } = this.props;
    return (
      <Link
        to={{
          pathname:
            `${match.url}/view/${this.props.n}` || link || this.props.match.url,
        }}
        className="Link"
      >
        <div className="assList_body_pane box_border div-width-100">
          <div className="assList_poster div-width-100">
            {teacher ? "You Posted this" : "Dr. Nwokoye Tochukwu"}
          </div>
          <div className="assList_title div-width-100">
            {title ? title : "My New Assignment (Physics)"}
          </div>
          <div className="assList_due div-width-100">
            Assignment For: <b>{classValue ? classValue : "JSS3A"}</b>
          </div>
          <div className="assList_time div-width-100">
            Posted on {posted ? posted : "20th October, 2020"}
          </div>
          <div className="assList_due div-width-100">
            To be submitted on the <b>{due ? due : "1st of January, 2020"}</b>{" "}
            before <b>{dueTime ? dueTime : "8am"}</b>
          </div>
          <div className="assList_quest div-width-100">
            <div className="assList_quest_header div-width-100">
              Questions {""}
              {questions && questions.length !== 0
                ? `(${questions.length})`
                : "(1)"}
            </div>
            <div className="assList_quest_body div-width-100">
              {questions
                ? questions.map((q, n) => (
                    <p key={`staff_assign_quest${n}`}>{q}</p>
                  ))
                : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minima alias reprehenderit."}
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
export default withRouter(AssignmentPane);
