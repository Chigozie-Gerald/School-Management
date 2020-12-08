import React, { PureComponent } from "react";
import { colorGenerator } from "../utils/indexHandler";
import "./studentReceipt.css";
// import { connect } from 'react-redux'

class StudentReceipt extends PureComponent {
  render() {
    return (
      <div
        className="flex1 flex fd_col"
        style={{
          backgroundColor: colorGenerator(
            "3c",
            Math.floor(Math.random() * 123),
            2
          ),
        }}
      ></div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default StudentReceipt;
