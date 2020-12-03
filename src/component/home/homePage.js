import React, { PureComponent } from "react";
// import { connect } from 'react-redux'
import "./homePage.css";
import MainHeader from "../mainheader";
import HomeBanner from "./homeBanner";
import MainTitle from "../mainTitle";
import MainSide from "../mainSide";
import HomeReg from "./homeReg";
import HomeAbout from "./homeAbout";
import HomeProp from "./homeProp";
import HomeGallery from "./homeGallery";
import HomeService from "./homeService";
import HomeSuggest from "./homeSuggest";
import HomeMap from "./homeMap";
import HomeFooter from "./homeFooter";
import HomeNews from "./homeNews";
import HomeSlider from "./homeSlider";

class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      makeShadow: false,
    };
  }
  handleScroll = () => {
    if (window.scrollY > 2) {
      this.setState({
        makeShadow: true,
      });
    } else {
      this.setState({
        makeShadow: false,
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <div className="homePage_wrapper" ref={(node) => (this.list = node)}>
        <MainTitle menu={this.props.menu} />
        <MainHeader
          makeShadow={this.state.makeShadow}
          handleMenuClose={this.props.handleMenuClose}
          handleMenuOpen={this.props.handleMenuOpen}
          menu={this.props.menu}
        />
        <div
          className={
            this.props.menu ? "main_header_side active" : "main_header_side"
          }
        >
          <MainSide handleMenuClose={this.props.handleMenuClose} />
          <div
            className={this.props.menu ? "main_header_side_float" : "noSHOW"}
            onClick={this.props.handleMenuClose}
          ></div>
        </div>
        <HomeBanner />
        <HomeReg />
        <HomeAbout />
        <HomeSlider />
        <HomeProp />
        <HomeGallery />
        <HomeSuggest />
        <HomeService />
        <HomeNews />
        <HomeMap />
        <HomeFooter />
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default HomePage;
