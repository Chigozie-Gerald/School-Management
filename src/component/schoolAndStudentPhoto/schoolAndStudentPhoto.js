import React, { PureComponent } from "react";
// import { connect } from 'react-redux'
import "./schoolAndStudentPhoto.css";
import PhotoHeader from "./photoHeader";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import PhotoPane from "../outingPhoto/photoPane";

class SchoolAndStudentPhoto extends PureComponent {
  render() {
    const { match } = this.props;
    if (this.props.location.state !== undefined && this.props.location.state) {
      this.title = this.props.location.state.title;
    } else {
      this.title = "Photos";
    }
    return (
      <div className="school_student_photo_wrapper div-width-100">
        <Switch>
          <Route
            path={`${this.props.match.url}/:id`}
            render={() => (
              <PhotoPane height="calc(var(--vvh, 1vh) * 100 - 9.5rem)" />
            )}
          />
          <Route
            path={this.props.match.url}
            render={() => {
              const photoPane_arr = [
                "engineer",
                "plumber",
                "jesse",
                "doctor",
                "mechanic",
                "developer",
                "plumber",
                "doctor",
                "developer",
              ];
              let photoPane_list = photoPane_arr.map((img, n) => {
                return (
                  <div className="gallery_body_outing_body_img div1" key={n}>
                    <Link
                      className="gallery_link"
                      to={{
                        pathname: `${match.url}/${n}`,
                        state: { index: n },
                      }}
                    >
                      <div className="content">
                        <img
                          src={require(`../mediaFiles/${img}.jpg`)}
                          alt=""
                          className="img_div"
                        />
                      </div>
                    </Link>
                  </div>
                );
              });
              return (
                <div>
                  <PhotoHeader
                    title={this.title}
                    height="3.5rem"
                    showHeader={
                      this.props.location.state &&
                      this.props.location.state.showHeader
                        ? this.props.location.state.showHeader
                        : true
                    }
                  />
                  <div className="gallery_body_outing_body">
                    {photoPane_list}
                  </div>
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default SchoolAndStudentPhoto;
