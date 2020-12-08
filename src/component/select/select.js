import React, { PureComponent } from "react";
import "./select.css";

class Select extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      open: false,
      txt: "",
    };
  }
  handleOpen = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  render() {
    const { selector, list, colText, txt, num } = this.props;
    const timetable_session_list = (Array.prototype.isPrototypeOf(list)
      ? list
      : [false]
    ).map((elem, n) => {
      return (
        <div
          className={`select_float_inner ${!elem ? "empty" : ""}`}
          key={n}
          onClick={() => {
            if (!elem) {
              return;
            } else {
              this.handleOpen();
              selector(elem, num);
            }
          }}
        >
          {elem ? (
            <span>{elem}</span>
          ) : (
            <span className="blindTxt">No option available</span>
          )}
        </div>
      );
    });
    return (
      <div className="tll select_wrapper">
        {this.state.open && (
          <div className="float z2" onClick={this.handleOpen}></div>
        )}
        <div className="rel div-width-100">
          {/* List starts */}
          <div
            className={`select_float flex fd_col 
        ${this.state.open ? "" : "noSHOW"}`}
          >
            <div className="select_float_inner header">{txt}</div>
            {timetable_session_list}
          </div>
          {/* List ends */}

          <div
            onClick={this.handleOpen}
            className={`select_body div-width-100 flex ${
              this.state.open || colText ? "active" : ""
            }`}
          >
            <div className="select_body_inner flex1 flex vert_align">
              {colText === "" ? txt ? txt : "Select" : <b>{colText}</b>}
            </div>
            <div className="select_body_inner_btn center">
              <i className="material-icons arrow_drop_down"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Select;
