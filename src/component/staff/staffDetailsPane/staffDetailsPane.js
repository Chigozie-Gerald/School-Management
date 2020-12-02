import React, { PureComponent } from "react";
import "./staffDetailsPane.css";
import { handleCopy } from "../../utils/copyHandler";
import { colorGenerator } from "../../utils/indexHandler";
// import { connect } from 'react-redux'

class StaffDetailsPane extends PureComponent {
  render() {
    const { elem } = this.props;
    return elem.exec ? (
      <ExecStaffDetails
        elem={elem}
        copyFunc={this.props.copyFunc}
        copyNode={this.props.copyNode}
      />
    ) : (
      <div className="stPane_wrapper noBorder flex box_border hide fd_col div-width-100 tll">
        <div className="stPane_left flex">
          <div className="stPane_l_left">
            <div
              style={{
                backgroundColor: colorGenerator(
                  "4m",
                  elem.title.length,
                  elem.name.length
                ),
              }}
              className="stPane_l_img"
            ></div>
          </div>
          <div className="stPane_l_right flex1">
            <div className="stPane_l_right_name div-width-100">{elem.name}</div>
            <div className="stPane_l_right_title div-width-100">
              {elem.title}
            </div>
            <div className="stPane_l_right_title prof div-width-100">
              View Profile
            </div>
          </div>
        </div>
        {/* <StPaneFooter
          admin={false}
          elem={elem.contact}
          copyFunc={this.props.copyFunc}
          copyNode={this.props.copyNode}
        /> */}
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default StaffDetailsPane;

export class ExecStaffDetails extends PureComponent {
  render() {
    const { elem } = this.props;
    return (
      <div
        className="box_border hide tll div-width-100 noBorder"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="EStaffDet_img div-width-100">
          <div className="float" style={{ backgroundColor: "#ccc" }}></div>
        </div>
        <div className="EStaffDet_body div-width-100">
          <div className="EStaffDet_body_right_title flex div-width-100">
            <span className="flex1">{elem.title}</span>
            <span className="Ehead_view_txt">View Profile</span>
          </div>
          <div className="EStaffDet_body_right_name div-width-100">
            {elem.name}
          </div>
          <div className="EStaffDet_body_right_des div-width-100">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            voluptates eaque, perferendis dolores suscipit id.
          </div>
        </div>
        <StPaneFooter
          admin={true}
          elem={elem.contact}
          copyFunc={this.props.copyFunc}
          copyNode={this.props.copyNode}
        />
      </div>
    );
  }
}

export class StPaneFooter extends PureComponent {
  componentDidMount() {
    this.copyNode = this.props.copyNode;
  }
  render() {
    const { admin, copyFunc, elem } = this.props;
    const paneIcons = elem.map((elem, n) => (
      <div
        className="stPane_right_cont"
        key={`staff_contact_footer${n}`}
        onClick={() => handleCopy(elem.text, copyFunc, this.copyNode, true)}
      >
        <img
          src={require(`../../mediaFiles/${
            elem.type === "ml"
              ? "gmail"
              : elem.type === "ph"
              ? "phone"
              : "whatsapp_box"
          }.svg`)}
          alt=""
          className="img_div_contain"
        />
      </div>
    ));
    return (
      <div className={`stPane_right ${admin ? "Ex" : ""} div-width-100`}>
        <div className="stPane_right_header">Click any to copy</div>
        <div className="stPane_right_row flex div-width-100">{paneIcons}</div>
      </div>
    );
  }
}
