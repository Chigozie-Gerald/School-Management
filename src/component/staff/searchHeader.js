import React, { PureComponent } from "react";
import "./searchHeader.css";
import "../topHeader.css";
import { withRouter } from "react-router-dom";
// import { connect } from 'react-redux'

class SearchHeader extends PureComponent {
  render() {
    const { color, history, handleOpen, isOpen } = this.props;
    return (
      <div className="topHeader_header header_sticky flex vert_align staff_profile_header">
        <div className="topHeader_header_top search hide flex flex1">
          <div
            className="topHeader_header_top_inner center div1"
            onClick={() => history.goBack()}
          >
            <i
              style={{ color: color ? color : "#212529" }}
              className="material-icons arrow_back topHeader_top_header_icon"
            ></i>
          </div>
          <div className="topHeader_header_top_inner norvs flex vert_align flex_left div2">
            <SearchHeaderBox
              holder={this.props.placeholder}
              value={this.props.value}
              name={this.props.name}
              handleChange={this.props.handleChange}
              cancelSearch={this.props.cancelSearch}
            />
          </div>
        </div>
        <div
          style={{ visibility: isOpen ? "hidden" : "visible" }}
          className="lowHeader_wrapper_icon_div smFlex search"
        >
          <i
            onClick={handleOpen}
            className="material-icons menu lowHeader_wrapper_icon"
          ></i>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchHeader);

export class SearchHeaderBox extends PureComponent {
  render() {
    return (
      <div className="srchHeadInput_wrapper div-width-100 flex">
        <input
          autoComplete="off"
          className="srchHeadInput_input div-width-100 my_input flex vert_align"
          type="text"
          value={this.props.value}
          onChange={this.props.handleChange}
          name={this.props.name ? this.props.name : ""}
          placeholder={this.props.holder ? this.props.holder : "Search"}
        />
        <div className="srvhHeader_close_div hide center">
          {this.props.value && (
            <i
              className="material-icons close"
              onClick={() => this.props.cancelSearch(this.props.name)}
            ></i>
          )}
        </div>
      </div>
    );
  }
}
