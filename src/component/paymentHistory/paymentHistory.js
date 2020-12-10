import React, { PureComponent } from "react";
import "./paymentHistory.css";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";

class PaymentHistory extends PureComponent {
  render() {
    const { match } = this.props;
    this.Link = match.url.substr(0, match.url.length - 12);
    return (
      <div className="tll flex1 pr1 pl1 flex fd_col">
        <div className="student_profile_header">Your Payment History</div>
        <div className="paymentHistory_header div-width-100 flex ver_align">
          Sorted by Date
        </div>
        <div className="paymentHistory_body pt1">
          <div className="studentFees_body_wrapper_inner box_border p1">
            <div className="studentFees_body_pane flex1 div1">
              2nd School Fees 2018/2019 Session
            </div>
            <div className="paymentHistory_body_tny flex1 div1">
              Paid via <span>Remita</span>
            </div>
            <div className="paymentHistory_inner div2 p0-5">
              <p className="top">
                Amount: <span>N25,000</span>
              </p>
              <p>
                Paid on: <span className="dur">4th August, 2018</span>
              </p>
              <p>
                Time: <span className="dur">4:45pm</span>
              </p>
            </div>
            <div className="studentProfile_btn btn_link">
              <Link className="Link" to={{ pathname: `${this.Link}receipt` }}>
                View Receipt
              </Link>
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
