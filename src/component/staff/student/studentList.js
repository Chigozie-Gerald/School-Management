import React, { PureComponent } from "react";
import "./studentList.css";
import { Link, withRouter } from "react-router-dom";
import { colorGenerator, letter_index } from "../../utils/indexHandler";
// import { connect } from 'react-redux'

class StudentList extends PureComponent {
  render() {
    // const { match } = this.props;
    const student_arr = [
      { name: "Ijomah Chigozie", post: "Head boy", debt: true },
      { name: "Okonkwo Chinwe", post: "Head girl", debt: false },
      { name: "Stephen Hawkins", post: "", debt: false },
      { name: "David Solomon", post: "", debt: true },
      { name: "Afolabi Bolarinwa", post: "", debt: false },
      { name: "Kolapo Imam Malik", post: "Class Prefect", debt: false },
    ];
    const student_list = student_arr
      .sort((a, b) => letter_index(a.name) - letter_index(b.name))
      .map((elem, n) => (
        <StudentListPane key={`student_pane_list_${n}`} details={elem} />
      ));

    const student_list_owe = student_arr
      .sort((a, b) => letter_index(a.name) - letter_index(b.name))
      .map(
        (elem, n) =>
          elem.debt && (
            <StudentListPane key={`student_pane_list_${n}`} details={elem} />
          )
      );
    return (
      <div className="div-width-100 profile_min_height studList_wrap tll">
        <div className="studList_wrap_cont"></div>
        <div className="studList_wrap_cont">
          <div className="studList_wrap_header flex vert_align div-width-100">
            Students with uncleared payments
          </div>
          <div className="studList_wrap_body div-width-100 hide">
            {student_list_owe}
          </div>
        </div>
        <div className="studList_wrap_cont">
          <div className="studList_wrap_header flex vert_align div-width-100">
            SS3A Students
          </div>
          <div className="studList_wrap_body div-width-100 hide">
            {student_list}
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default withRouter(StudentList);

export const StudentListPane = withRouter(
  class StudentListPane extends PureComponent {
    render() {
      const { details, match, txt } = this.props;
      return !details || !details.name ? (
        ""
      ) : (
        <div className="tll studList_box box_border noBorder flex div-width-100">
          <Link to={{ pathname: match.url + "/" + 3 }} className="Link">
            <div className="studList_box_left">
              <div
                className="studList_box_img center rad_50"
                style={{
                  backgroundColor: colorGenerator(
                    details.name.length + details.name[0],
                    details.name.length ** 3,
                    57
                  ),
                }}
              >
                {details.name.split(" ")[0].substr(0, 1).toUpperCase() +
                  details.name.split(" ")[1].substr(0, 1).toUpperCase()}
              </div>
            </div>
            <div className="studList_box_right div-width-100">
              <div className="studList_box_title div-width-100">
                {details.name}
              </div>
              {details.post && (
                <div className="studList_box_post div-width-100">
                  {details.post}
                </div>
              )}
              {details.debt && (
                <div className="studList_box_post owe inline_flex">
                  Owes school fees
                </div>
              )}
              <div className="studList_box_btn_wrap flex flex_left ">
                {txt ? txt : "View Profile"}
              </div>
            </div>
          </Link>
        </div>
      );
    }
  }
);

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }
