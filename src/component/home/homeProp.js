import React, { PureComponent } from "react";
// import { connect } from 'react-redux'
import "./homeProp.css";

class HomeProp extends PureComponent {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this.state = {
      dropped: null,
    };
  }
  handleDrop = () => {
    if (this.state.dropped === null) {
      this.setState({
        dropped: true,
      });
    } else if (this.state.dropped === true || this.state.dropped === false) {
      this.setState({
        dropped: !this.state.dropped,
      });
    }
  };
  render() {
    return (
      <div className="about_wrapper">
        <div className="about_top_header">Meet the Proprietor</div>
        <div className="about_header">
          <div className="about_header_img_wrapper">
            <div className="about_header_img_div">
              <img
                src={require("../mediaFiles/prop.jpg")}
                alt=""
                className="img_div"
              />
            </div>
          </div>
          <div className="about_header_title">
            <div className="about_header_title_inner div1">
              Mr. Adewale Martin Chukwuemeka
            </div>
            <div className="about_header_title_inner div2"></div>
            <div className="about_header_title_inner div3">
              <i></i>
            </div>
          </div>
        </div>
        <div className={!this.state.dropped ? "about_body" : "about_body drop"}>
          <div className="about_body_main">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
              aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quidem, nobis veritatis excepturi error blanditiis.
              Lorem ipsum dolor sit amet consectetur adipisicing. yyLorem ipsum
              dolor sit, amet consectetur adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
              aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quidem, nobis veritatis excepturi error blanditiis.
              Lorem ipsum dolor sit amet consectetur adipisicing. yyLorem ipsum
              dolor sit, amet consectetur adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
              aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quidem, nobis veritatis excepturi error blanditiis.
              Lorem ipsum dolor sit amet consectetur adipisicing. yyLorem ipsum
              dolor sit, amet consectetur adipisicing elit.
            </p>
            <p>
              Quam, aliquam? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptates quidem, nobis veritatis excepturi error
              blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing.
              yyLorem ipsum dolor sit, amet consectetur adipisicing elit
            </p>
            <p>
              Error blanditiis. Lorem ipsum dolor sit amet consectetur
              adipisicing. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Quam, aliquam? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptates quidem, nobis veritatis excepturi
              error blanditiis. Error blanditiis. Lorem ipsum dolor sit amet
              consectetur adipisicing. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Quam, aliquam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptates quidem, nobis veritatis
              excepturi error blanditiis.
            </p>
          </div>
          <div className="about_body_float">
            <span onClick={this.handleDrop}>
              View {!this.state.dropped ? "more" : "less"} about the Proprietor
            </span>
            <i
              className={
                this.state.dropped === null
                  ? "material-icons expand_more"
                  : this.state.dropped === false
                  ? "material-icons expand_more icon_turn_0"
                  : "material-icons expand_more icon_turn_180"
              }
              onClick={this.handleDrop}
            ></i>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default HomeProp;
