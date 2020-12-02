import React, { PureComponent } from "react";
import "./select.css";

class Select extends PureComponent {
  render() {
    const { open, type, handleClick, list, text } = this.props;
    return (
      <div className="select_wrapper div-width-100">
        {/* List starts */}
        <div className={open ? "select_float" : "noSHOW"}>
          <div className="select_float_inner">Session</div>
          {list}
        </div>
        {/* List ends */}

        <div
          className="select_body div-width-100 flex vert_align"
          onClick={handleClick}
        >
          <div className="select_body_inner flex1">
            {type === "" ? { text } : <b onClick={handleClick}>{type}</b>}
          </div>
          <div className="select_body_inner_btn center">
            <i className="material-icons arrow_drop_down"></i>
          </div>
        </div>
      </div>
    );
  }
}
export default Select;
