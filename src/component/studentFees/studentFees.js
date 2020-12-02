import React, { PureComponent } from "react";
import "./studentFees.css";
import { Link, Switch, Route } from "react-router-dom";
import PaymentHistory from "../paymentHistory/paymentHistory";
import CompulsoryFee from "../compulsoryFee/compulsoryFee";
import NotFound from "../notFound";
import RowBox from "../rowBox/rowBox";
// import { connect } from 'react-redux'

class StudentFees extends PureComponent {
  render() {
    const { match } = this.props;
    this.historyLink = match.url.substr(0, match.url.length - 4);
    const student_fees_arr = [
      {
        title: "2nd Term School Fees 2018/2019 Session",
        type: "School Fees",
        amount: "25,000",
      },
      {
        title: "2nd Term PTA Levy, 2018/2019 Session",
        type: "PTA",
        amount: "3,500",
      },
    ];
    const student_fees_list = student_fees_arr.map((elem, n) => {
      return (
        <div className="studentFees_body_wrapper_inner" key={n}>
          <div className="studentFees_body_wrapper_pane div1">{elem.title}</div>
          <div className="studentFees_body_wrapper_pane div2">
            <p>
              <b>Amount:</b> N{elem.amount}
            </p>
          </div>
          <div className="studentFees_body_wrapper_pane div3">
            <div className="studentFees_body_wrapper_pane_btn btn_link">
              <Link
                className="Link"
                to={{
                  pathname: `${this.historyLink}payment`,
                  state: { type: `${elem.type}` },
                }}
              >
                Pay Now!
              </Link>
            </div>
          </div>
        </div>
      );
    });
    return (
      <Switch>
        <Route
          path={`${match.url}/compulsory`}
          render={(props) => <CompulsoryFee {...props} />}
        />
        <Route
          path={`${match.url}/history`}
          render={(props) => <PaymentHistory {...props} />}
        />
        <Route
          exact
          path={`${match.url}`}
          render={() => (
            <div className="studentProfile_body flex fd_col pt1">
              <div className="student_profile_history_wrapper">
                <div className="student_profile_history_wrapper_btn btn_link">
                  <Link
                    className="Link"
                    to={{ pathname: `${match.url}/history` }}
                  >
                    View Your Payment History
                  </Link>
                </div>
              </div>
              <div className="studentFees_body_div_mrg"></div>
              <div className="student_profile_body no_side_padding pt0">
                <RowBox
                  title="Compulsory Fees"
                  link={`${match.url}/compulsory`}
                  info="Pending (5)"
                />
                <div className="studentFees_body_div_mrg"></div>
                <div className="studentFees_body_div">Non-Compulsory Fees</div>
                <div className="studentFees_body_wrapper">
                  {student_fees_list}
                </div>
              </div>
            </div>
          )}
        />
        <Route
          exact
          render={(props) => (
            <NotFound
              {...props}
              height="calc(var(--vvh, 1vh) * 100 - 6.5rem)"
            />
          )}
        />
      </Switch>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default StudentFees;
