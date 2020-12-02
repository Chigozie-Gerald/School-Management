import React, { PureComponent } from "react";
import "./locationFullScreen.css";
// import { connect } from 'react-redux'

class LocationFullScreen extends PureComponent {
  render() {
    return (
      <div className="locationFullScreen_wrapper">
        <div
          className="locationFullScreen_header"
          onClick={() => this.props.history.goBack()}
        >
          <i className="material-icons arrow_back arrow_back_icon location_large_header_icon"></i>
          Go Back
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default LocationFullScreen;
