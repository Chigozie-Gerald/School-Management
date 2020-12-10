import React, { PureComponent } from "react";
import "./compulsoryFee.css";
import { Link } from "react-router-dom";
// import { connect } from 'react-redux'

class CompulsoryFee extends PureComponent {
  render() {
    const { match } = this.props;
    this.historyLink = match.url.substr(0, match.url.length - 10);
    return (
      <div className="flex1 flex fd_col">
        <div className="compulsoryFee_wrapper_top">
          {2 * 2 < 3 ? (
            <div className="compulsoryFee_wrapper_top_img_div">
              You have no Pending Fees
            </div>
          ) : null}
        </div>
        <div className="compulsoryFee_wrapper_bottom">
          <div className="student_profile_history_wrapper">
            <div className="student_profile_history_wrapper_btn btn_link">
              <Link
                className="Link"
                to={{ pathname: `${this.historyLink}history` }}
              >
                View Your Payment History
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

export default CompulsoryFee;
