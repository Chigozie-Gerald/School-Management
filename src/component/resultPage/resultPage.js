import React, { PureComponent } from "react";
import "./resultPage.css";
import { Redirect } from "react-router-dom";
// import { connect } from 'react-redux'

class ResultPage extends PureComponent {
  render() {
    const { location, match } = this.props;
    this.Link = this.props.match.url.substr(0, match.url.length - 5);
    return location.state && location.state.session && location.state.term ? (
      <div className="studentProfile_body"></div>
    ) : (
      <Redirect to={{ pathname: `${this.Link}` }} replace />
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default ResultPage;
