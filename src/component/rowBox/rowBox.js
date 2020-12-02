import React, { PureComponent } from "react";
import "./rowBox.css";
import { Link, withRouter } from "react-router-dom";
// import { connect } from 'react-redux'

class RowBox extends PureComponent {
  render() {
    const { match, info, title, link } = this.props;
    return (
      <div
        className="rowBox div-width-100 tll"
        style={{
          padding: this.props.padding ? `${this.props.padding}` : NaN,
        }}
      >
        <Link className="Link" to={{ pathname: link ? link : match.url }}>
          <div className="rowBox_title flex1">
            <div className="rowBox_title_head flex vert_align flex_left">
              {title ? title : ""}
            </div>
            {info && (
              <div className="rowBox_title_btn_div flex vert_align flex_left div-width-100">
                <div className="rowBox_title_btn center">
                  {info ? info : ""}
                </div>
              </div>
            )}
          </div>
          <div className="rowBox_icon_div center">
            <i className="material-icons keyboard_arrow_right keyboard_arrow"></i>
          </div>
        </Link>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default withRouter(RowBox);
