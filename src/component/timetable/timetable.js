import React, { PureComponent } from "react";
import "./timetable.css";
import { Route, Switch } from "react-router-dom";
import TimetablePane from "../timetable_pane/timetable_pane";
import NotFound from "../notFound";
import SelectPage from "../select/selectPage";

// import { connect } from 'react-redux'

class Timetable extends PureComponent {
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
  cancelAll = () => {
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
    if (param.startsWith("timetable_session")) {
      if (this.state.termOpen) {
        this.setState({
          termOpen: !this.state.termOpen,
        });
      } else {
        this.setState({
          sessionOpen: !this.state.sessionOpen,
        });
      }
    } else if (param.startsWith("timetable_term")) {
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
    this.props.history.push(`${this.props.match.url}/grid`, {
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

    return (
      <Switch>
        <Route
          exact
          path={`${match.url}/grid`}
          render={(props) => <TimetablePane {...props} />}
        />
        <Route
          exact
          path={`${match.url}`}
          render={() => {
            return (
              <SelectPage
                pathLink={`${this.props.match.url}/grid`}
                btnText="View TimeTable"
                txt1="Select Session"
                list1={[
                  "2016/2017 Session",
                  "2017/2018 Session",
                  "2018/2019 Session",
                ]}
                txt2="Select Term"
                list2={["1st term", "2nd Term", "3rd Term"]}
              />
            );
          }}
        />
        <Route
          exact
          render={() => (
            <NotFound height="calc(var(--vvh, 1vh) * 100 - 6.5rem)" />
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

export default Timetable;
