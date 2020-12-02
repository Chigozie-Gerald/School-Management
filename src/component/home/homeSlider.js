import React, { PureComponent } from "react";
import "./homeSlider.css";
import Swipe from "../swipeFile";
// import { connect } from 'react-redux'

class HomeSlider extends PureComponent {
  componentDidMount() {
    let N = document.getElementById("homeSlider_swipe_id").children.length;
    document.getElementById("homeSlider_swipe_id").style.setProperty("--n", N);
    this.homeSwiper = new Swipe("homeSlider_swipe_id", 100, 350, "100", "0");
    // this.homeSwiper.slider(10000);
  }
  componentWillUnmount() {
    // this.homeSwiper.sliderClear();
  }
  render() {
    const home_Slider_Arr = ["books", "doctor", "banner"];
    const home_Slider_List = home_Slider_Arr.map((img, n) => {
      return (
        <div className="homeSlider_inner swipe_div" key={n}>
          <img
            src={require(`../mediaFiles/${img}.jpg`)}
            alt=""
            className="img_div"
          />
        </div>
      );
    });
    return (
      <div className="homeSlider_wrapper">
        <div className="homeSlider_box">
          <div
            className="homeSlider_div swipe_wrapper slider_wrapper"
            id="homeSlider_swipe_id"
          >
            {home_Slider_List}
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

export default HomeSlider;
