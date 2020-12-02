import React, { PureComponent } from "react";
import "./lowHeader.css";
// import { connect } from 'react-redux'

export class LowHeader extends PureComponent {
  render() {
    const { handleOpen, isOpen } = this.props;
    return (
      <div className="lowHeader_wrapper">
        <div className="lowHeader_wrapper_icon_div" onClick={handleOpen}>
          {!isOpen ? (
            <i className="material-icons menu lowHeader_wrapper_icon"></i>
          ) : (
            <i className="material-icons close lowHeader_wrapper_icon_close"></i>
          )}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default LowHeader;
