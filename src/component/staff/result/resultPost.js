import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Select from "../../select/select";
import { link } from "../../utils/indexHandler";
// import { connect } from 'react-redux'

class ResultPost extends PureComponent {
  render() {
    // const {match} = this.props
    return (
      <div className="assCreatePane rel flex1 flex1 flex fd_col div1 div-width-100">
        <Select />
        <Select />
        <div className="assCreate_btn_wrapper flex1 flex horiz_align">
          <div className="assCreate_btn div1 center inline_flex div-width-100">
            <Link
              className="Link"
              to={{ pathname: link(this.props.match.url) + "/list" }}
            >
              Next
            </Link>
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

export default ResultPost;
