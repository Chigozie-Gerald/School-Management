import React, { PureComponent } from "react";
import "./resultPage.css";
import { Redirect } from "react-router-dom";
import { link } from "../utils/indexHandler";
// import { connect } from 'react-redux'

class ResultPage extends PureComponent {
  render() {
    const { location, match } = this.props;
    return location.state && location.state.txt1 && location.state.txt2 ? (
      <div className="flex1 flex fd_col"></div>
    ) : (
      <Redirect to={{ pathname: link(match.url) }} replace />
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default ResultPage;
