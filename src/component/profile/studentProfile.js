import React, { PureComponent } from "react";
import "./studentProfile.css";
import TopHeader from "../topHeader";
import { handleOpen, openHandlerDefault } from "../utils/openHandler";
import { Link, Switch, Route } from "react-router-dom";
import NotFound from "../notFound";
import LOB from "../staff/listOfBooks/listOfBooks";
import StudentYearBook from "../studentYearBook/studentYearBook";
import StudentGallery from "../studentGallery/studentGallery";
import Result from "../result/result";
import Timetable from "../timetable/timetable";
import StudentAssignment from "../studentAssignment/studentAssignment";
import StudentDetails from "../studentDetails/studentDetails";
import StudentFees from "../studentFees/studentFees";
import PaymentPage from "../paymentPage/paymentPage";
import StudentReceipt from "../studentReceipt/studentReceipt";
import LittleFooter from "../littleFooter";
// import { connect } from 'react-redux'

class StudentProfile extends PureComponent {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      menu: false,
      makeShadow: false,
      makeRightShadow: false,
      makeRightFooterShadow: false,
    };
    let viewport = document.querySelector("meta[name = theme-color]");
    viewport.setAttribute("content", "teal");
  }
  handleStateChange = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };
  handleOpen = (e) => {
    handleOpen(e, this.state.menu, this.handleStateChange);
  };
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
  handlemakeRightShadow = (data) => {
    this.setState({
      makeRightShadow: data ? true : false,
    });
  };
  handlemakeRightFooterShadow = (data) => {
    this.setState({
      makeRightFooterShadow: data ? true : false,
    });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    if (this.state.menu) {
      openHandlerDefault();
    }
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    const { match, location, history } = this.props;
    const Link_Arr = [
      {
        name: "Profile",
        strict: true,
        link: `${match.url}`,
        render: StudentDetails,
      },
      {
        name: "Results",
        strict: false,
        link: `${match.url}/result`,
        render: Result,
      },
      {
        name: "Fees",
        strict: false,
        link: `${match.url}/fees`,
        render: StudentFees,
      },
      {
        name: "Uniform",
        strict: false,
        link: `${match.url}/uniform`,
        render: StudentYearBook,
      },
      {
        name: "Timetable",
        strict: false,
        link: `${match.url}/timetable`,
        render: Timetable,
      },
      {
        name: "Assignment",
        strict: false,
        link: `${match.url}/assignment`,
        render: StudentAssignment,
      },
      {
        name: "Gallery",
        strict: false,
        link: `${match.url}/gallery`,
        render: StudentGallery,
      },

      {
        name: "List of Books",
        strict: false,
        link: `${match.url}/lob`,
        render: LOB,
      },
      { return: false, link: `${match.url}/payment`, render: PaymentPage },
      { return: false, link: `${match.url}/receipt`, render: StudentReceipt },
    ];
    const linkList = Link_Arr.filter((el) => el.return !== false).map(
      (elem, n) => (
        <div
          key={`${n}-student-profile-links`}
          className={
            elem.strict
              ? location.pathname === `${elem.link}`
                ? "mainSide_right_body_inner active"
                : "mainSide_right_body_inner"
              : location.pathname.startsWith(`${elem.link}`)
              ? "mainSide_right_body_inner active"
              : "mainSide_right_body_inner"
          }
        >
          <Link
            to={{ pathname: elem.link }}
            replace
            className="Link flex-start"
            onClick={this.handleOpen}
          >
            {elem.name}
          </Link>
        </div>
      )
    );
    const LinkRoutes = Link_Arr.reverse().map((elem, n) => (
      <Route
        key={"student_profile_route" + n}
        exact={elem.strict ? true : false}
        path={elem.link}
        render={(props) => <elem.render {...props} />}
      />
    ));
    return (
      <div className="page_wrapper">
        {location.pathname === `${match.url}` ? (
          <div
            className={`studentProfile_header flex ${
              this.state.makeShadow ? "" : "noSHADOW"
            }`}
          >
            <div
              className="studentProfile_header_inner div1 center"
              onClick={() => history.goBack()}
            >
              <i className="material-icons arrow_back studentProfile_header_icon"></i>
            </div>
            <div className="studentProfile_header_inner div2 vert_align flex flex1 tll">
              <span className="div-width-100 ellipsis">Student Profile</span>
            </div>
            <div
              style={{ visibility: this.state.menu ? "hidden" : "visible" }}
              className="lowHeader_wrapper_icon_div smFlex profile box_border center"
            >
              <i
                onClick={this.handleOpen}
                className="material-icons menu lowHeader_wrapper_icon"
              ></i>
            </div>
          </div>
        ) : (
          <TopHeader
            image="./social.jpg"
            title="Ijomah Chigozie G."
            subTitle="SS3A"
            handleOpen={this.handleOpen}
            makeShadow={this.state.makeShadow}
          />
        )}
        <MainSideRight
          menu={this.state.menu}
          handleOpen={this.handleOpen}
          makeRightShadow={this.state.makeRightShadow}
          makeRightFooterShadow={this.state.makeRightFooterShadow}
          name="Ijomah Chigozie Gerald"
          status="JSS3H"
          handlemakeRightShadow={this.handlemakeRightShadow}
          linkList={linkList}
          handlemakeRightFooterShadow={this.handlemakeRightFooterShadow}
        />

        <div className="studentProfile_body flex fd_col">
          <Switch>
            {LinkRoutes}
            <Route
              exact
              render={(props) => (
                <NotFound
                  {...props}
                  height="calc(var(--vvh, 1vh) * 100 - 6.5rem)"
                />
              )}
            />
          </Switch>
          <LittleFooter />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default StudentProfile;

export class MainSideRight extends PureComponent {
  render() {
    const {
      menu,
      handleOpen,
      makeRightShadow,
      makeRightFooterShadow,
      name,
      status,
      handlemakeRightShadow,
      linkList,
      md,
      handlemakeRightFooterShadow,
    } = this.props;
    return (
      <div className={`main_header_side_right ${menu ? " active" : ""}`}>
        <div
          className={menu ? "main_header_side_float smFlex" : "noSHOW"}
          onClick={handleOpen}
        ></div>
        <div className={`mainSide_wrapper rel`}>
          <div
            onClick={handleOpen}
            className="mainSide_wrapper_close_icon rad_50 center smFlex"
          >
            <i className="material-icons close"></i>
          </div>
          <div
            className={`mainSide_right_header div-width-100 flex ${
              makeRightShadow ? "" : " noSHADOW"
            }`}
          >
            <div className="mainSide_right_header_img_div center hide rad_50">
              <img
                src={require("../social.jpg")}
                alt="student"
                className="img_div"
              />
            </div>
            <div className="mainSide_right_header_title_div flex fd_col flex_left">
              <div className="div1">{name}</div>
              <div className="div2">{status}</div>
            </div>
          </div>
          <div
            className="mainSide_right_body"
            ref={(node) => (this.rightList = node)}
            onScroll={() => {
              if (this.rightList.scrollTop > 0) {
                handlemakeRightShadow(true);
                handlemakeRightFooterShadow(
                  Math.floor(
                    this.rightList.scrollTop +
                      parseInt(getComputedStyle(this.rightList).height)
                  ) <
                    this.rightList.scrollHeight - 2
                );
              } else {
                handlemakeRightShadow(true);
              }
            }}
          >
            {linkList}
          </div>
          <div
            className={`mainSide_body_footer right ${
              makeRightFooterShadow ? "myshadow" : ""
            }`}
          ></div>
        </div>
      </div>
    );
  }
}
