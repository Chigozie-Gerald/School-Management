import React, { PureComponent } from "react";
import "./account.css";
// import { connect } from 'react-redux'

class Account extends PureComponent {
  render() {
    return (
      <div className="account_wrapper">
        <div className="student_profile_header">Your Payment Account</div>
        <div className="student_profile_body account_inner_body">
          <div className="account_info_wrapper">
            <div className="account_info_header pending">
              Pending <i className="material-icons warning account_icon1"></i>
            </div>
            <div className="account_info_body"></div>
          </div>
          {/* <div className="account_info_wrapper">
            <div className="account_info_header">Owing</div>
            <div className="account_info_body"></div>
          </div> */}
          <div className="account_info_wrapper">
            <div className="account_info_header paid">
              Paid <i className="material-icons done account_icon2"></i>
            </div>
            <div className="account_info_body"></div>
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

export default Account;
