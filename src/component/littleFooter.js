import React, { PureComponent } from "react";
import "./littleFooter.css";
// import { connect } from 'react-redux'

class LittleFooter extends PureComponent {
  render() {
    var year = new Date().getFullYear();
    return (
      <div className="little_footer_wrapper div-width-100 center">
        <span className="little_footer_span1">
          {this.props.spanText1 ? this.props.spanText1 : "XenSites"} &copy;
        </span>
        <span className="little_footer_span2 center">
          <div></div>
        </span>
        <span className="little_footer_span3">{`2019 - ${year}`}</span>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default LittleFooter;
