import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { link } from "../../utils/indexHandler";
// import { resizeTArea } from "../../utils/resizer";
// import { connect } from 'react-redux'

class AssignmentText extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: [1],
  //   };
  // }
  render() {
    const {
      handleChange,
      questions,
      addQuestion,
      deleteQuestion,
      submitQuestions,
      match,
    } = this.props;
    const assTAreaList = questions.map((elem, n) => (
      <div className="assCreate_tarea_wrapper tll" key={`assTAreaElem_${n}`}>
        <div className="assCreate_tarea_header flex">
          <span className="flex1">
            {n + 1}/{questions.length}
          </span>
          <span
            className={`${elem.value ? "" : "noSHOW"}`}
            onClick={() => {
              let option = window.confirm(
                "Do you want to delete this question?"
              );
              if (option) {
                deleteQuestion(n);
              } else {
                return;
              }
            }}
          >
            Delete
          </span>
        </div>
        <textarea
          placeholder="Start typing your question"
          value={elem.value}
          id={`assTAreaElem_${n}`}
          style={{
            height: elem.height + "px" || "54px",
          }}
          autoFocus
          onChange={(e) => handleChange(e, n)}
          className="assCreate_tarea box_border div-width-100 my_input"
        ></textarea>
      </div>
    ));
    return (
      <div className="assCreatePane flex1 div2 flex fd_col">
        {assTAreaList}
        <div className="assCreate_opt flex_left vert_align inline_flex">
          <span
            disabled={
              questions &&
              questions[0].value &&
              questions[questions.length - 1].value
                ? false
                : true
            }
            onClick={addQuestion}
          >
            Add another question
          </span>
          <i
            disabled={questions[questions.length - 1].value ? false : true}
            className="material-icons add_circle_outline"
            onClick={addQuestion}
          ></i>
        </div>
        <div className="assCreate_btn_wrapper flex1 flex horiz_align">
          <div
            className="assCreate_btn div1 center inline_flex div-width-100"
            disabled={
              questions.filter((e) => e.value).length < 1 ? true : false
            }
          >
            <div
              disabled={
                questions.filter((e) => e.value).length < 1 ? true : false
              }
              onClick={() => {
                submitQuestions();
              }}
              className="Link"
              to={{ pathname: link(match.url) }}
            >
              Finish ({questions.filter((e) => e.value).length})
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

export default withRouter(AssignmentText);
