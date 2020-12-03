import React, { PureComponent } from "react";
// import { connect } from 'react-redux'
import "./homeBanner.css";

class HomeBanner extends PureComponent {
  render() {
    return (
      <div className="homeBanner_wrapper center hide div-width-100">
        <img
          src={require("../mediaFiles/pencil.jpg")}
          alt="banner"
          className="img_div"
        />
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default HomeBanner;
