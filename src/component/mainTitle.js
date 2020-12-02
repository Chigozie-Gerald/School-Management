import React, { PureComponent } from "react";
// import { connect } from 'react-redux'
import "./mainTitle.css";

export class MainTitle extends PureComponent {
  render() {
    const { menu } = this.props;
    return (
      <div className="mainTitle_wrapper">
        <div className="mainTitle_img_wrapper">
          <div className="mainTitle_img_div">
            <img
              src={require("./social.jpg")}
              alt="badge"
              className={!menu ? "mainTitle_img" : "mainTitle_img transparent"}
            />
          </div>
        </div>

        <div className="mainTitle_title_div">
          <div className="mainTitle_title_inner div1">King's College Lagos</div>
          <div className="mainTitle_title_inner div2">Spero Lucem</div>
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
