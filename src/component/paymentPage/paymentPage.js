import React, { PureComponent } from "react";
import "../profile/studentProfile.css";
import "../paymentHistory/paymentHistory.css";
// import { connect } from 'react-redux'

class PaymentPage extends PureComponent {
  render() {
    const { location } = this.props;
    if (location.state && location.state.type) {
      this.type = location.state.type;
    } else {
      this.type = null;
    }
    return (
      <div className="flex1 pr1 pl1 flex fd_col">
        <div className="paymentHistory_header flex ver_align">
          {this.type && (
            <span>
              {this.type}
              <i className="material-icons keyboard_arrow_right center"></i>
            </span>
          )}
          <b>Payment</b>
        </div>
        <div className="student_profile_header">Select a Payment Option</div>
      </div>
    );
  }
}

export default PaymentPage;
