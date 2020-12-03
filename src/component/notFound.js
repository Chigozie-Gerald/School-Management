import React, { PureComponent } from "react";
import "./notFound.css";
import { Link, withRouter } from "react-router-dom";

class NotFound extends PureComponent {
  render() {
    let height;
    if (this.props.height) {
      height = this.props.height;
    } else {
      height = "100%";
    }
    return (
      <div
        className="notFound-wrapper"
        style={{
          height: height,
          flex: "1",
          backgroundColor: "var(--lteBacColor)",
        }}
      >
        <div>
          <h1>404 Not Found</h1>
          <div className="notFound_btn">
            <Link to={this.props.match.url} className="Link" replace>
              Kindly go back a little
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => ({});

export default withRouter(NotFound);
