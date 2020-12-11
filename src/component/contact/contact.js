import React, { PureComponent } from "react";
import "./contact.css";
import { handleCopy } from "../utils/copyHandler";
import LittleFooter from "../littleFooter";
// import { connect } from 'react-redux'

class Contact extends PureComponent {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
    this.state = {
      makeShadow: false,
      copiedClicked: false,
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
  copyStateHandler = () => {
    this.setState(
      {
        copiedClicked: false,
      },
      () => {
        setTimeout(() => {
          this.setState({
            copiedClicked: !this.state.copiedClicked,
          });
        }, 100);
      }
    );
  };
  handleCopy = (text) => {
    handleCopy(text, this.copyStateHandler, this.copyNode);
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    const contact_arr = ["gmail_logo", "twitter", "phone", "whatsapp_box"];
    const contactList = contact_arr.map((elem, n) => {
      return (
        <div className="contact_pane div-width-100" key={n}>
          <div className="contact_pane_header flex vert_align">
            <img
              src={require(`../mediaFiles/${elem}.svg`)}
              alt="logo"
              className="contact_pane_header_img"
            />
            <i
              className="material-icons content_copy copy_icon"
              onClick={() => this.handleCopy(elem)}
            ></i>
          </div>
          <div className="contact_pane_body"></div>
        </div>
      );
    });
    return (
      <div className="contact_wrapper flex fd_col div-width-100">
        <div
          className={
            this.state.makeShadow
              ? "contact_header header_sticky flex div-width-100"
              : "contact_header header_sticky flex div-width-100 noSHADOW"
          }
        >
          <div
            className={
              !this.state.copiedClicked
                ? "copy_div center noSHOW"
                : this.state.copiedClicked && "copy_div center"
            }
            ref={(node) => (this.copyNode = node)}
          ></div>
          <div
            className="contact_header_inner center smFlex div1"
            onClick={() => this.props.history.goBack()}
          >
            <i className="material-icons arrow_back arrow_back_icon white"></i>
          </div>
          <div className="contact_header_inner flex vert_align flex_left div2">
            <div className="contact_header_img_div hide center rad_50">
              <img
                src={require("../social.jpg")}
                alt="badge"
                className="img_div"
              />
            </div>
            <div className="contact_header_inner_title flex vert_align ellipsis">
              King's College Lagos
            </div>
          </div>
        </div>
        <div className="innerWrapper_flex">
          <div className="contact_body innerBody div-width-100">
            <div className="contact_banner flex fd_col center div-width-100">
              <div className="contact_banner_header flex vert_align flex_right div-width-100 pr1">
                <div className="contact_banner_header flex vert_align flex_right div-width-100 pr1"></div>
                <div className="contact_banner_badge center hide rad_50">
                  <img
                    src={require("../social.jpg")}
                    alt="badge"
                    className="img_div"
                  />
                </div>
              </div>
              <div className="contact_banner_body center div-width-100">
                Contact the School, Discuss issues, Do more!
              </div>
            </div>
            <div className="contact_inner div-width-100">
              <div className="contact_inner_dev_header div-width-100 flex vert_align flex_left">
                Contact School
              </div>
              <div className="contact_pane_wrap box_border">{contactList}</div>

              <div className="contact_inner_dev flex fd_col vert_align div-width-100">
                <div className="contact_inner_dev_header div-width-100 flex vert_align flex_left">
                  Contact Developer
                </div>
                <div className="contact_pane_wrap box_border">
                  {contactList}
                </div>
              </div>
            </div>
          </div>
        </div>
        <LittleFooter />
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default Contact;
