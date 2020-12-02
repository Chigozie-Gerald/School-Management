import React, { PureComponent } from "react";
import "./serviceStarted.css";
// import { connect } from 'react-redux'

class ServiceStarted extends PureComponent {
  render() {
    return (
      <div className="serviceStarted_wrapper">
        <h3 className="serviceStarted_header">Get Started</h3>
        {/* <div className="serviceStarted_header">
          <div
            className="serviceStarted_header_inner div1"
            onClick={() => this.props.history.goBack()}
          >
            <i className="material-icons arrow_back arrow_back_icon"></i>
          </div>
          <div className="serviceStarted_header_inner div2">Get Started</div>
        </div> */}
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default ServiceStarted;
