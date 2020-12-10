import React, { PureComponent } from "react";
import "./studentFees.css";
import { Link, Switch, Route } from "react-router-dom";
import PaymentHistory from "../paymentHistory/paymentHistory";
import CompulsoryFee from "../compulsoryFee/compulsoryFee";
import NotFound from "../notFound";
// import RowBox from "../rowBox/rowBox";
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
        <div
          className="studentFees_body_wrapper_inner box_border p1 flex div-width-100"
          key={n}
        >
          <div className="div-width-100 studentFees_body_pane_box flex1">
            <div className="studentFees_body_pane flex1 div1">{elem.title}</div>
            <div className="studentFees_body_pane flex1 div2">
              <p>
                Amount:{" "}
                <b>
                  <span>N{elem.amount}</span>
                </b>
              </p>
            </div>
            <Link
              className="flex1"
              to={{
                pathname: `${this.historyLink}payment`,
                state: { type: `${elem.type}` },
              }}
            >
              <div className="studentProfile_btn div-width-100 center btn_link">
                Pay Now!
              </div>
            </Link>
          </div>
          <div className="studentFees_body_pane_img"></div>
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
            <div className="tll studentFees_wrapper flex1 div-width-100 flex fd_col pr1 pl1">
              <div className="studentFees_hist">
                <div className="studentProfile_btn header btn_link div-width-100">
                  <Link
                    className="Link"
                    to={{ pathname: `${match.url}/history` }}
                  >
                    View Your Payment History{" "}
                  </Link>
                </div>
              </div>
              <div className="flex1 pt0">
                <div className="studentFees_comp div-width-100 box_border p1 flex">
                  <Link
                    className="Link"
                    to={{ pathname: `${match.url}/compulsory` }}
                  >
                    <div className="studentFees_comp_icon center">
                      <i className="material-icons account_balance_wallet"></i>
                    </div>
                    <div className="studentFees_comp_title flex1">
                      <div className="studentFees_comp_det">
                        Compulsory Fees
                      </div>
                      <div className="studentFees_comp_info">Pending (5)</div>
                    </div>
                    <i className="material-icons keyboard_arrow_right keyboard_arrow"></i>
                  </Link>
                </div>
                <div className="studentFees_body">
                  <div className="studentFees_body_div div-width-100">
                    Non Compulsory Fees
                  </div>
                  <div className="studentFees_body_wrapper div-width-100">
                    {student_fees_list}
                  </div>
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
