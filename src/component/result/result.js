import React, { PureComponent } from "react";
import "./result.css";
import { Route, Switch, withRouter } from "react-router-dom";
import ResultPage from "../resultPage/resultPage";
import NotFound from "../notFound";
import SelectPage from "../select/selectPage";
// import { connect } from 'react-redux'

class Result extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.cancelAll = this.cancelAll.bind(this);
    this.handleSession = this.handleSession.bind(this);
    this.handleTerm = this.handleTerm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      session: "",
      term: "",
      sessionOpen: false,
      termOpen: false,
    };
  }
  cancelAll = (e) => {
    if (this.state.termOpen || this.state.sessionOpen) {
      this.setState({
        sessionOpen: false,
        termOpen: false,
      });
    }
  };
  handleClick = (e) => {
    e.stopPropagation();
    let param = e.target.id;
    if (param.startsWith("result_session")) {
      if (this.state.termOpen) {
        this.setState({
          termOpen: !this.state.termOpen,
        });
      } else {
        this.setState({
          sessionOpen: !this.state.sessionOpen,
        });
      }
    } else if (param.startsWith("result_term")) {
      if (this.state.sessionOpen) {
        this.setState({
          sessionOpen: !this.state.sessionOpen,
        });
      } else {
        this.setState({
          termOpen: !this.state.termOpen,
        });
      }
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      session: this.state.session,
      term: this.state.term,
    });
    // this.setState({
    //   session: "",
    //   term: "",
    // });
    this.props.history.push(`${this.props.match.url}/view`, {
      session: this.state.session,
      term: this.state.term,
    });
  };
  handleSession = (param) => {
    this.setState({
      session: param,
    });
  };
  handleTerm = (param) => {
    this.setState({
      term: param,
    });
  };

  render() {
    const { match } = this.props;
    // const result_session_arr = [
    //   "2016/2017 Session",
    //   "2017/2018 Session",
    //   "2018/2019 Session",
    // ];
    // const result_session_list = result_session_arr.map((elem, n) => {
    //   return (
    //     <div
    //       className="studentProfile_inner_session_float_inner"
    //       key={n}
    //       onClick={() => this.handleSession(elem)}
    //     >
    //       {elem}
    //     </div>
    //   );
    // });

    // const result_term_arr = ["1st Term", "2nd Term", "3rd Term"];
    // const result_term_list = result_term_arr.map((term, n) => {
    //   return (
    //     <div
    //       className="studentProfile_inner_session_float_inner"
    //       onClick={() => this.handleTerm(term)}
    //       key={n * 0.09}
    //     >
    //       {term}
    //     </div>
    //   );
    // });

    return (
      <Switch>
        <Route
          exact
          path={`${match.url}/view`}
          render={(props) => <ResultPage {...props} />}
        />
        <Route
          exact
          path={`${match.url}`}
          render={() => (
            <SelectPage
              pathLink={`${this.props.match.url}/view`}
              btnText="View Result"
              txt1="Select Session"
              list1={[
                "2016/2017 Session",
                "2017/2018 Session",
                "2018/2019 Session",
              ]}
              txt2="Select Term"
              list2={["1st term", "2nd Term", "3rd Term"]}
            />
            // <div
            //   className="studentProfile_body div-width-100"
            //   onClick={this.cancelAll}
            // >
            //   <div className="student_profile_body studentProfile_inner_body">
            //     <div className="studentProfile_inner_session_div">
            //       <div
            //         className={
            //           this.state.sessionOpen
            //             ? "studentProfile_inner_session_float div1"
            //             : "noSHOW"
            //         }
            //       >
            //         <div className="studentProfile_inner_session_float_inner header">
            //           Session
            //         </div>
            //         {result_session_list}
            //       </div>
            //       <div
            //         className="studentProfile_inner_session_inner"
            //         id="result_session"
            //         onClick={this.handleClick}
            //       >
            //         <div
            //           className="studentProfile_inner_select_div"
            //           id="result_session_title"
            //         >
            //           {this.state.session === "" ? (
            //             "Select Session"
            //           ) : (
            //             <b
            //               id="result_session_title_b"
            //               onClick={this.handleClick}
            //             >
            //               {this.state.session}
            //             </b>
            //           )}
            //         </div>
            //         <div
            //           className="studentProfile_inner_select_btn_div"
            //           id="result_session_btn"
            //         >
            //           <i
            //             className="material-icons arrow_drop_down"
            //             id="result_session_icon"
            //           ></i>
            //         </div>
            //       </div>
            //     </div>
            //     <div className="studentProfile_inner_term_div">
            //       <div
            //         className={
            //           this.state.termOpen
            //             ? "studentProfile_inner_session_float div2"
            //             : "noSHOW"
            //         }
            //       >
            //         <div className="studentProfile_inner_session_float_inner header">
            //           Term
            //         </div>
            //         {result_term_list}
            //       </div>
            //       <div
            //         className="studentProfile_inner_session_inner"
            //         id="result_term"
            //         onClick={this.handleClick}
            //       >
            //         <div
            //           className="studentProfile_inner_select_div"
            //           id="result_term_title"
            //         >
            //           {this.state.term === "" ? (
            //             "Select Term"
            //           ) : (
            //             <b id="result_term_title_b" onClick={this.handleClick}>
            //               {this.state.term}
            //             </b>
            //           )}
            //         </div>
            //         <div
            //           className="studentProfile_inner_select_btn_div"
            //           id="result_term_btn"
            //         >
            //           <i
            //             className="material-icons arrow_drop_down"
            //             id="result_term_icon"
            //           ></i>
            //         </div>
            //       </div>
            //     </div>
            //     <div className="studentProfile_inner_next_div">
            //       <form method="POST" onSubmit={this.handleSubmit}>
            //         <button
            //           className="studentProfile_inner_next_btn result_btn btn_link"
            //           onClick={this.handleSubmit}
            //           disabled={
            //             !this.state.session || !this.state.term ? true : false
            //           }
            //         >
            //           View Result
            //         </button>
            //       </form>
            //     </div>
            //   </div>
            // </div>
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

export default withRouter(Result);
