import React, { PureComponent } from "react";
// import { connect } from 'react-redux'
import "./mainTitle.css";

export class MainTitle extends PureComponent {
  render() {
    const { menu } = this.props;
    return (
      <div className="tll mainTitle_wrapper div-width-100 flex">
        <div className="mainTitle_img_div center hide rad_50">
          <img
            src={require("./social.jpg")}
            alt="badge"
            className={!menu ? "img_div" : "img_div mainTitle_img transparent"}
          />
        </div>

        <div className="mainTitle_title_div flex fd_col flex1">
          <div className="mainTitle_title_inner flex vert_align div-width-100 div1">
            King's College Lagos
          </div>
          <div className="mainTitle_title_inner flex vert_align div-width-100 div2">
            Spero Lucem
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

export default MainTitle;
