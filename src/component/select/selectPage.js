import React, { PureComponent } from "react";
import Select from "./select";
import "./select.css";
import { withRouter, Link } from "react-router-dom";
// import { connect } from 'react-redux'

class SelectPage extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      txt1: "",
      txt2: "",
    };
  }
  handleSelect = (txt, num) => {
    console.log("err");
    this.setState({
      ["txt" + num.toString()]: txt,
    });
  };
  render() {
    const { pathLink, match, location, btnText } = this.props;
    console.log(pathLink);
    return location && location.state && location.state.redirected ? (
      <div className="tll flex1 pl1 pr1">Something went wrong</div>
    ) : (
      <div className="selectPage_wrapper flex1 flex fd_col div1 div-width-100">
        {[1, 2].map((_, nd) => (
          <Select
            key={`select_${match.url}_col_${nd}`}
            colText={this.state["txt" + (nd + 1).toString()]}
            num={(nd + 1).toString()}
            list={this.props["list" + (nd + 1).toString()]}
            selector={this.handleSelect}
            txt={this.props["txt" + (nd + 1).toString()]}
          />
        ))}
        <div className="selectPage_btn_wrapper flex1 flex horiz_align">
          <div
            disabled={!this.state.txt1 || !this.state.txt2 ? true : false}
            className="selectPage_btn div1 center inline_flex div-width-100"
          >
            <Link
              className="Link"
              to={{
                pathname: pathLink || match.url,
                state: {
                  redirected: !pathLink ? true : false,
                  txt1: this.state.txt1,
                  txt2: this.state.txt2,
                },
              }}
            >
              {btnText || "Next"}
            </Link>
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

export default withRouter(SelectPage);
