import React, { PureComponent } from "react";
import "./assignmentView.css";
import { colorGenerator } from "../../utils/indexHandler";
// import { connect } from "react-redux";

class AssignmentView extends PureComponent {
  render() {
    return (
      <div
        className="assView_wrapper div-width-100 profile_min_height"
        style={{
          backgroundColor: colorGenerator(
            "3j",
            15,
            this.props.match.params.id + 4
          ),
        }}
      ></div>
    );
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default AssignmentView;
