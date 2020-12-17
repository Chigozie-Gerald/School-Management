import React, { PureComponent } from "react";
import "./studentDetails.css";
// import { connect } from 'react-redux'

class StudentDetails extends PureComponent {
  render() {
    return (
      <div className="studentDetails_wrapper padWrap tll div-width-100 flex fd_col flex1">
        <div className="studentDetails_header flex vert_align div-width-100 flex_left">
          <div className="studentDetails_header_btn center appbtn">
            Edit Profile
          </div>
        </div>
        <div className="studentDetails_title div-width-100  box_border noBorder flex">
          <div className="studentDetails_title_inner flex1 flex fd_col pr1">
            <div className="studentDetails_title_name flex flex_right">
              Ijomah Chigozie Gerald
            </div>
            <div className="studentDetails_title_class flex flex_right">
              SS3A
            </div>
            <div className="studentDetails_title_position flex flex_right">
              Prep Prefect
            </div>
          </div>
          <div className="studentDetails_title_img_div hide center rad_50">
            <img
              src={require("../social.jpg")}
              alt="student"
              className="img_div"
            />
          </div>
        </div>
        <div className="studentDetails_body box_border noBorder div-width-100">
          <div className="studentDetails_info div-width-100 flex fd_col">
            <div className="studentDetails_info_header div-width-100 flex vert_align flex_left">
              Address
            </div>
            <div className="studentDetails_info_body flex1 flex fd_col div-width-100">
              No. 7, Ikorodu Close, Steel Town 1, DSC, Orhuwhorun, Delta State
            </div>
          </div>
          <div className="studentDetails_info div-width-100 flex fd_col">
            <div className="studentDetails_info_header div-width-100 flex vert_align flex_left">
              Date of Birth
            </div>
            <div className="studentDetails_info_body flex1 flex fd_col div-width-100">
              19th july, 2001
            </div>
          </div>
          <div className="studentDetails_info div-width-100 flex fd_col">
            <div className="studentDetails_info_header div-width-100 flex vert_align flex_left">
              Parent / Guardian Details
            </div>
            <div className="studentDetails_info_body flex1 flex fd_col div-width-100">
              <p>
                <b>Name</b>
                <span className="flex vert_align">
                  <span className="flex1">Ijomah Lawrence Chuks</span>
                </span>
              </p>
              <p>
                <b>Phone</b>
                <span className="flex vert_align">
                  <span className="flex1">08060874452</span>
                  <i className="material-icons content_copy copy_icon"></i>
                </span>
              </p>
              <p>
                <b>Email</b>
                <span className="flex vert_align">
                  <span className="flex1">lcijomah@yahoo.com</span>
                  <i className="material-icons content_copy copy_icon"></i>
                </span>
              </p>
              <p>
                <b>Address</b>
                <span>
                  No. 7, Ikorodu Close, Steel Town 1, DSC, Orhuwhorun, Delta
                  State
                </span>
              </p>
            </div>
          </div>

          <div className="studentDetails_info div-width-100 flex fd_col">
            <div className="studentDetails_info_header div-width-100 flex vert_align flex_left">
              State of Origin
            </div>
            <div className="studentDetails_info_body flex1 flex fd_col div-width-100">
              Anambra
            </div>
          </div>
          <div className="studentDetails_info div-width-100 flex fd_col">
            <div className="studentDetails_info_header div-width-100 flex vert_align flex_left">
              L.G.A
            </div>
            <div className="studentDetails_info_body flex1 flex fd_col div-width-100">
              Awka-South
            </div>
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

export default StudentDetails;
