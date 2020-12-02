import React, { PureComponent } from "react";
import "./suggestion.css";
import HomeSuggest from "../home/homeSuggest";
// import { connect } from 'react-redux'

class Suggestion extends PureComponent {
  render() {
    return (
      <div className="suggestion_wrapper">
        <div className="suggestion_header">
          <div
            className="suggestion_header_inner div1"
            onClick={() => this.props.history.goBack()}
          >
            <i className="material-icons arrow_back arrow_back_icon white"></i>
          </div>
          <div className="suggestion_header_inner div2">
            <div className="suggestion_header_inner_img_div">
              <img
                src={require("../social.jpg")}
                alt="badge"
                className="suggestion_header_inner_img"
              />
            </div>
          </div>
        </div>
        <div className="suggestion_body">
          <HomeSuggest />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default Suggestion;
