import React, { PureComponent } from "react";
import "./servicePane.css";
import { Link } from "react-router-dom";
import LittleFooter from "../littleFooter";
// import { connect } from 'react-redux'

class ServicePane extends PureComponent {
  constructor(props) {
    super(props);
    this.handleCopy = this.handleCopy.bind(this);
    this.state = {
      copiedClicked: false,
    };
  }
  handleCopy = (text) => {
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

    let textarea = document.createElement("textarea");
    textarea.style.position = "fixed";
    textarea.style.left = "0";
    textarea.style.top = "0";

    textarea.style.height = "2em";
    textarea.style.width = "2em";
    textarea.style.padding = "0";
    textarea.style.border = "none";
    textarea.style.outline = "none";
    textarea.style.shadow = "none";
    textarea.style.background = "transparent";
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      let copied = document.execCommand("copy");
      this.copyNode.innerText = copied ? "Copied!" : "Operation failed";
    } catch {
      this.copyNode.value = "Operation failed";
    }
    document.body.removeChild(textarea);
  };
  render() {
    const servicePane_arr = ["gmail_logo", "twitter", "phone", "whatsapp_box"];
    const servicePaneList = servicePane_arr.map((elem, n) => {
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
      <div className="servicePane_wrapper div-width-100">
        <div
          className={
            !this.state.copiedClicked
              ? "copy_div center noSHOW"
              : this.state.copiedClicked && "copy_div center"
          }
          ref={(node) => (this.copyNode = node)}
        ></div>
        <div className="servicePane_body div-width-100">
          <div className="servicePane_top_img_div center">
            <div
              className="servicePane_top_img_div_float center rad_50"
              onClick={() => this.props.history.goBack()}
            >
              <i className="material-icons arrow_back arrow_back_icon semi_trans"></i>
            </div>
            <img
              src={require("../mediaFiles/trader.jpg")}
              alt=""
              className="img_div"
            />
          </div>
          <div className="servicePane_title_div div-width-100 flex">
            <div className="servicePane_title_inner flex1 flex vert_align">
              <span className="div-width-100">
                Joint Electrical Management Enterprise
              </span>
            </div>
            <div className="servicePane_title_img center hide rad_50"></div>
          </div>
          <div className="servicePane_des_wrapper div-width-100 flex vert_align"></div>
          <div className="servicePane_gallery_wrapper div-width-100 flex vert_align fd_col">
            <div className="servicePane_gallery_header div-width-100"></div>
            <div className="servicePane_gallery_img_div rel div-width-100">
              <div className="servicePane_gallery_float_dir center rad_50 left">
                <i className="material-icons arrow_back arrow_back_icon servicePane_gallery_float_icon"></i>
              </div>
              <div className="servicePane_gallery_float_dir center rad_50 right">
                <i className="material-icons arrow_forward arrow_back_icon servicePane_gallery_float_icon"></i>
              </div>
              <div className="servicePane_gallery_float_circle_div div-width-100 center">
                <div className="servicePane_gallery_float_circle"></div>
                <div className="servicePane_gallery_float_circle"></div>
                <div className="servicePane_gallery_float_circle"></div>
              </div>
            </div>
          </div>
          <div className="servicePane_contact_wrapper div-width-100 flex vert_align fd_col">
            <div className="servicePane_contact_body div-width-100 flex fd_col flex_left vert_align">
              <div>
                <i className="material-icons work servicePane_icon_work"></i>
              </div>
              <p>
                Are you looking for a technician to repair various spoilt
                appliances at home that you thought inrepairable?{" "}
                <b>Quicky-Repairs</b> brings that to your table
              </p>
            </div>
            <div className="servicePane_contact_header div-width-100 flex vert_align flex_left">
              You can contact us at:
            </div>
            <div className="contact_pane_wrap box_border ">
              {servicePaneList}
            </div>

            <div className="servicePane_contact_footer div-width-100">
              <Link className="Link" to={{ pathname: "/contact_us" }}>
                CALL NOW!
              </Link>
            </div>
          </div>
          <div className="service_body_wrapper_footer_des servicePane_Footer">
            The content of this page has being reviewed and acknowledged by us.
            Xensites will not be held responsible if anything happens. In event
            of any additional detail please contact the provider.
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

export default ServicePane;
