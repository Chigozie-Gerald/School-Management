import React, { PureComponent } from "react";
import "./locationDirection.css";
// import { connect } from 'react-redux'

class LocationDirection extends PureComponent {
  render() {
    return (
      <div
        className="locationDirection_wrapper"
        onClick={() => this.props.history.goBack()}
      ></div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default LocationDirection;
