import React, { PureComponent } from "react";
import "./assignmentCreate.css";
import Select from "../../select/select";
import { Route, Switch, Link } from "react-router-dom";
import NotFound from "../../notFound";
import AssignmentText from "./assignmentText";
import { resizeTArea } from "../../utils/resizer";
// import { connect } from 'react-redux'

class AssignmentCreate extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          height: 59,
          value: "",
        },
      ],
    };
  }
  handleChange = (e, n) => {
    this.setState(
      {
        questions: this.state.questions.map((elem, ind) => {
          if (n === ind) {
            elem.value = e.target.value;
            elem.height = 54;
          }
          return elem;
        }),
      },
      () => {
        this.setState({
          questions: this.state.questions.map((elem, ind) => {
            if (n === ind) {
              elem.height = resizeTArea(
                document.getElementById(`assTAreaElem_${n}`),
                elem.value || "",
                54,
                150
              );
            }
            return elem;
          }),
        });
      }
    );
  };
  addQuestion = () => {
    this.setState({
      questions: [
        ...this.state.questions,
        {
          height: 59,
          value: "",
        },
      ],
    });
  };
  deleteQuestion = (n) => {
    const newQ = this.state.questions.filter((_, ind) => ind !== n);
    this.setState({
      questions:
        newQ.length > 0
          ? newQ
          : [
              {
                height: 59,
                value: "",
              },
            ],
    });
  };
  submitQuestions = async () => {
    const questions = this.state.questions.filter((elem) => {
      delete elem.height;
      return elem.value;
    });
    console.log(questions);
    this.setState({
      questions: [
        {
          height: 59,
          value: "",
        },
      ],
    });
    setTimeout(() => {
      const num = questions.length;
      if (num) {
        alert(
          `You have successfully uploaded ${num} question${num > 1 ? "s" : ""}`
        );
        this.props.history.replace(this.props.match.url);
      }
    }, 0);
  };
  render() {
    return (
      <div className="assCreate div-width-100 profile_min_height">
        <Switch>
          <Route
            exact
            path={this.props.match.url}
            render={() => (
              <div className="assCreatePane profile_min_height rel flex1 flex fd_col div1 div-width-100">
                <Select />
                <Select />
                <div className="assCreate_btn_wrapper flex1 flex horiz_align">
                  <div className="assCreate_btn div1 center inline_flex div-width-100">
                    <Link
                      replace
                      className="Link"
                      to={{ pathname: this.props.match.url + "/class" }}
                    >
                      Next
                    </Link>
                  </div>
                </div>
              </div>
            )}
          />
          <Route
            exact
            path={this.props.match.url + "/class"}
            render={(props) => (
              <AssignmentText
                questions={this.state.questions}
                addQuestion={this.addQuestion}
                deleteQuestion={this.deleteQuestion}
                submitQuestions={this.submitQuestions}
                handleChange={this.handleChange}
                {...props}
              />
            )}
          />
          <Route
            exact
            render={() => (
              <NotFound height="calc(var(--vvh, 1vh) * 100 - 9.5rem)" />
            )}
          />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default AssignmentCreate;
