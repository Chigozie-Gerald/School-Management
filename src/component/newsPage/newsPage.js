import React, { PureComponent } from "react";
import "./newsPage.css";
import { SuggestDiv } from "../home/homeSuggest";
import LittleFooter from "../littleFooter";
import HomeNews from "../home/homeNews";
// import { connect } from 'react-redux'

class NewsPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      textarea: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: this.state.name,
      phone: this.state.phone,
      textarea: this.state.textarea,
    });
    this.setState({
      name: "",
      phone: "",
      textarea: "",
    });
  };
  render() {
    return (
      <div className="tll full_page_height_min width_100 flex fd_col newsPage_wrap pt1">
        <div
          onClick={this.props.history.goBack}
          className="newsPage_head_icon_div rad_50 center box_border noBorder"
        >
          <i className="material-icons arrow_back arrow_back_icon white"></i>
        </div>
        <div className="newsPage_head div-width-100 p1">
          <div className="flex">
            <div className="flex1 pr1">
              <div className="newsPage_head_title">
                School settles resumption date for 12th August, 2020
              </div>
              <div className="newsPage_head_cal">
                <div className="flex vert_align">
                  <i className="material-icons calendar_today"></i>9:00pm, Oct
                  3, 2019
                </div>
              </div>
            </div>
            <div className="newsPage_title_img"></div>
          </div>

          <div className="newsPage_head_quote p1 box_border">
            <p>
              <b>Here's the article's summary</b>
            </p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae reiciendis nisi iure excepturi est facere repellat
            sapiente rerum, distinctio nulla mollitia ipsum aut in debitis modi
            a sequi, quis molestias.
          </div>
        </div>
        <div className="newsPage_body p1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            aut ullam nihil in consequuntur, voluptate id adipisci nobis
            similique consectetur est perspiciatis harum, impedit optio nostrum
            voluptatum deserunt ducimus atque.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            ipsa consectetur inventore omnis corrupti. Cumque, exercitationem
            nisi animi excepturi pariatur ipsum molestias labore maxime debitis
            placeat voluptatem laudantium minus reiciendis nemo a fuga, culpa ut
            maiores? Est qui repellendus animi ipsa, cumque praesentium debitis
            dignissimos. Nobis sapiente labore quod sit laudantium perferendis
            minus enim culpa.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            quo consectetur totam distinctio, officia consequatur perferendis
            eius atque? In, maxime animi similique, beatae adipisci, amet ipsum
            quae pariatur veritatis nam accusamus aut asperiores hic
            exercitationem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti et
            vel quas ut cum corrupti?
          </p>
        </div>
        <div className="flex1 center newsPage_footer_div">
          <div className="newsPage_footer p1 div-width-100 flex flex1d">
            <SuggestDiv
              title="Type your Message here"
              name=""
              heading="Send us a Message"
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              state={this.state}
            />
          </div>
        </div>
        <HomeNews />
        <div className="pr1 pl1 serviceAd">
          <div className="p1 box_border serviceAd_wrapper noBorder div-width-100">
            <div className="serviceAd_head div-width-100 flex horiz_align">
              <div className="serviceAd_head_inline tll center">
                <i className="material-icons work"></i>
                <i className="material-icons work"></i>
                <i className="material-icons work"></i>
                <i className="material-icons work"></i>
              </div>
              {/* Heloooooooooooooooooo */}
              {/* <i className="material-icons work inline_flex hide"></i> */}
            </div>
            <p>
              <b>Let's help your reach your customers</b>
            </p>
            <div className="serviceAd_body div-width-100">
              Advertise your products and services to our huge community, and
              enjoy the regional distribution and seamless contact for your
              products
            </div>
            <div className="serviceAd_btn_div flex flex_right div-width-100">
              <div className="serviceAd_btn center">Get Started</div>
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

export default NewsPage;
