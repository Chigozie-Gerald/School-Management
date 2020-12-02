import React, { PureComponent } from "react";
import "./photoPane.css";
import Swipe from "../swipeFile";
import { withRouter } from "react-router-dom";
// import { connect } from 'react-redux'

class PhotoPane extends PureComponent {
  componentDidMount() {
    console.log(this.props.location);
    if (
      this.props.location &&
      this.props.location.state !== undefined &&
      this.props.location.state.index
    ) {
      this.slide_index = this.props.location.state.index;
    } else {
      this.slide_index = 0;
    }
    let N = document.getElementById("OutingPhoto_swipe").children.length;
    document.getElementById("OutingPhoto_swipe").style.setProperty("--n", N);
    this.Outing_Photo_Swiper = new Swipe(
      "OutingPhoto_swipe",
      100,
      500,
      "100",
      "0",
      this.slide_index
    );
    this.Outing_Photo_Swiper.go();
  }
  render() {
    const arrOuting = [
      "engineer",
      "plumber",
      "jesse",
      "doctor",
      "mechanic",
      "developer",
      "trader",
      "pencil",
      "galaxy",
      "flower",
      "architect",
      "banner",
      "plumber",
      "jesse",
      "doctor",
      "mechanic",
      "trader",
      "plumber",
      "doctor",
      "developer",
    ];
    const OutingList = arrOuting.map((img, n) => {
      return (
        <div className="photoPane_inner_div slider_div" key={n}>
          <img
            src={require(`../mediaFiles/${img}.jpg`)}
            alt=""
            className="img_div_contain"
          />
        </div>
      );
    });
    return (
      <div
        className="photoPane_wrapper"
        style={{ height: this.props.height || NaN }}
      >
        <div className="photoPane_inner swipe_wrapper" id="OutingPhoto_swipe">
          {OutingList}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default withRouter(PhotoPane);
