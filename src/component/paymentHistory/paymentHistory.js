import React, { PureComponent } from "react";
import "./paymentHistory.css";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";

class PaymentHistory extends PureComponent {
  render() {
    const { match } = this.props;
    this.Link = match.url.substr(0, match.url.length - 12);
    return (
      <div className="studentProfile_inner_wrapper flex fd_col">
        <div className="paymentHistory_wrapper flex fd_col">
          <div className="student_profile_header">Your Payment History</div>
          <div className="paymentHistory_header flex ver_align">
            Sorted by Date
          </div>
          <div className="paymentHistory_body">
            <div className="studentFees_body_wrapper">
              <div className="studentFees_body_wrapper_inner">
                <div className="studentFees_body_wrapper_pane div1">
                  2nd School Fees 2018/2019 Session
                </div>
                <div className="studentFees_body_wrapper_pane div2">
                  <p>
                    <b>Amount:</b> N25,000
                  </p>
                  <p>
                    <b>Paid on:</b> 4th August, 2018
                  </p>
                </div>
                <div className="studentFees_body_wrapper_pane div3">
                  <div className="studentFees_body_wrapper_pane_btn bc-blue btn_link">
                    <Link
                      className="Link"
                      to={{ pathname: `${this.Link}receipt` }}
                    >
                      View Receipt
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default PaymentHistory;
