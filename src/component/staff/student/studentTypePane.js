import React, { PureComponent } from "react";
import { withRouter, Link } from "react-router-dom";
import { colorGenerator } from "../../utils/indexHandler";
// import { connect } from 'react-redux'

export class StudentTypePane extends PureComponent {
  render() {
    //several issues wqith rowboc=x and this component
    const { match } = this.props;
    return (this.props.details && this.props.details.length === 0) ||
      !this.props.details ? (
      ""
    ) : (
      <div className="stnTypePane_wrap padWrap div-width-100 tll">
        <div className="stnTypePane_header div-width-100">
          {this.props.form ? "Your Form classes" : "Classes You Take"}
        </div>
        {this.props.details &&
          this.props.details.map((elem, n) => (
            <Link
              key={`studentTypePane_link_${n}`}
              to={{ pathname: match.url + "/l/" + elem.class.toLowerCase() }}
              className="Link"
            >
              <div
                className="stnTypePane_body div-width-100 box_border"
                key={`staff_studentPane_${n}`}
              >
                <div className="stnTypePane_inner_top">
                  {elem.role && elem.role}
                </div>
                <div className="stnTypePane_inner_body flex">
                  <div className="stnTypePane_left">
                    <div className="stnTypePane_img_div">
                      <div
                        className="stnTypePane_img rad_50 center hide"
                        style={{
                          backgroundColor: colorGenerator(elem.class, 13, 46),
                        }}
                      >
                        {elem.class &&
                          elem.class
                            .substr(elem.class.length - 2)
                            .toUpperCase()}
                      </div>
                    </div>
                  </div>
                  <div className="stnTypePane_right div-width-100">
                    <div className="stnTypePane_right_name div-width-100">
                      {elem.class && elem.class} Class students
                    </div>
                    <div className="stnTypePane_right_numb div-width-100">
                      {elem.number && elem.number} students
                    </div>
                    {elem.info && (
                      <div className="stnTypePane_right_info inline_flex">
                        *{elem.info ? ` ${elem.info}` : " Update required"}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    );
  }
}

export default withRouter(StudentTypePane);
