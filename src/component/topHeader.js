import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./topHeader.css";

class TopHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      makeShadow: false,
      makeRightShadow: false,
      makeRightFooterShadow: false,
      staffSearch: "",
      classSearch: "",
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
    const { image, title, subTitle, history } = this.props;
    return (
      <div
        className={`topHeader_header header_sticky flex fd_col ${
          this.state.makeShadow ? "" : " noSHADOW"
        }`}
      >
        <div className="topHeader_header_top hide flex div-width-100">
          <div
            className="topHeader_header_top_inner center div1"
            onClick={() => history.goBack()}
          >
            <i className="material-icons arrow_back arrow_back_icon white"></i>
          </div>
          <div className="topHeader_header_top_inner flex vert_align flex_left div2">
            <div className="topHeader_header_top_inner_img_div rad_50 hide center">
              <img src={require(`${image}`)} alt="badge" className="img_div" />
            </div>
            <div className="topHeader_header_top_inner_title_div">
              <div className="topHeader_header_top_inner_title_inner flex vert_align div-width-100 flex_right div1">
                <span className="ellipsis div-width-100">
                  {title ? title : ""}
                </span>
              </div>
              <div className="topHeader_header_top_inner_title_inner flex vert_align div-width-100 flex_right div2">
                <span className="ellipsis div-width-100">
                  {subTitle ? subTitle : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TopHeader);
