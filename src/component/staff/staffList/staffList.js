import React, { PureComponent } from "react";
import "./staffList.css";
import StaffDetailsPane from "../staffDetailsPane/staffDetailsPane";
// import { connect } from 'react-redux'

class StaffList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      copiedClicked: false,
    };
  }
  copyStateHandler = () => {
    this.setState(
      {
        copiedClicked: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            copiedClicked: !this.state.copiedClicked,
          });
        }, 1500);
      }
    );
  };
  render() {
    const staff_arr = [
      {
        name: "Mr. Nduka Obi",
        title: "Science Teacher",
        exec: false,
        contact: [
          { type: "ph", text: "09057559107" },
          { type: "ml", text: "chigoziegerald@gmail.com" },
          { type: "whs", text: "09057559107" },
        ],
      },
      {
        name: "Dr. Ifeanyi Okowa",
        title: "JSS3B Class Teacher",
        exec: false,
        contact: [
          { type: "ph", text: "0905885307" },
          { type: "ml", text: "feanyikowa@yahoo.com" },
          { type: "whs", text: "0905885307" },
        ],
      },
      {
        name: "Dr. Jonathan Akpofure",
        title: "School Proprietor",
        exec: true,
        contact: [
          { type: "ph", text: "07057559107" },
          { type: "ml", text: "nathanakpof@gmail.com" },
          { type: "whs", text: "07057559107" },
        ],
      },
      {
        name: "Mr. Afolabi Williams",
        title: "Mathematics Teacher",
        exec: false,
        contact: [
          { type: "ph", text: "08033442507" },
          { type: "ml", text: "afolabi@gmail.com" },
          { type: "whs", text: "08033442507" },
        ],
      },
      {
        name: "Mrs. Kayetan Rukky",
        title: "Social Studies Teacher",
        exec: false,
        contact: [
          { type: "ph", text: "09033445596" },
          { type: "ml", text: "ayetanrukky19@sch.com" },
          { type: "whs", text: "09033445596" },
        ],
      },
      {
        name: "Mr. Nwokoye Tochukwu",
        title: "JSS3A Form Teacher",
        exec: false,
        contact: [
          { type: "ph", text: "0909902227" },
          { type: "ml", text: "tochukwu@mymail.com" },
          { type: "whs", text: "0909902227" },
        ],
      },
    ];
    const new_staff_arr = staff_arr.sort((a, b) =>
      a.exec ? -1 : b.exec ? 1 : 0
    );
    const staff_list = new_staff_arr.map((elem, n) => (
      <StaffDetailsPane
        key={`staff_list_${n}`}
        elem={elem}
        copyFunc={this.copyStateHandler}
        copyNode="staff_copy_div_id"
      />
    ));
    return (
      <div className="staff_list_wrapper div-width-100 profile_min_height">
        <div
          id="staff_copy_div_id"
          className={
            !this.state.copiedClicked
              ? "copy_div center noSHOW"
              : this.state.copiedClicked && "copy_div center"
          }
          ref={(node) => (this.copyNode = node)}
        ></div>
        {staff_list}
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default StaffList;
