import React, { PureComponent } from "react";
import "./photoHeader.css";
import { withRouter } from "react-router-dom";
// import { connect } from 'react-redux'

class PhotoHeader extends PureComponent {
  render() {
    const { title } = this.props;
    if (this.props.location.state.showHeader === false) {
      this.display = "none";
    } else {
      this.display = "flex";
    }
    return (
      <div
        className="photoHeader_wrapper header_sticky flex div-width-100"
        style={{ minHeight: this.props.height || "3rem" }}
      >
        <div
          className="photoHeader_inner center div1"
          onClick={() => this.props.history.goBack()}
          style={{ display: `${this.display}` }}
        >
          <i className="material-icons arrow_back arrow_back_icon white"></i>
        </div>
        <div className="photoHeader_inner flex vert_align flex_left pl1 ellipsis div2">
          {title ? title : "Photos"}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default withRouter(PhotoHeader);
