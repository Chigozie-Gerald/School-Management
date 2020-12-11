import React, { PureComponent } from "react";
import "../../profile/studentProfile.css";
import "./staff_profile.css";
import { Link, Switch, Route } from "react-router-dom";
import { handleOpen, openHandlerDefault } from "../../utils/openHandler";
// import LowHeader from "../../lowHeader";
import TopHeader from "../../topHeader";
import PeriodInit from "../period/periodInit";
import StudentDetails from "../../studentDetails/studentDetails";
import Assignment from "../assignment/assignment";
import Student from "../student/student";
import Result from "../result/result";
import StaffList from "../staffList/staffList";
import ListOfBooks from "../listOfBooks/listOfBooks";
// import StaffProfileTable from "./staffProfileTable";
import NotFound from "../../notFound";
import { MainSideRight } from "../../profile/studentProfile";
import LittleFooter from "../../littleFooter";
import SearchHeader from "../searchHeader";
// import { connect } from 'react-redux'

class StaffProfile extends PureComponent {
  constructor(props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.state = {
      menu: false,
      makeShadow: false,
      makeRightShadow: false,
      makeRightFooterShadow: false,
      staffSearch: "",
      classSearch: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handlemakeRightFooterShadow = (data) => {
    this.setState({
      makeRightFooterShadow: data ? true : false,
    });
  };
  handlemakeRightShadow = (data) => {
    this.setState({
      makeRightShadow: data ? true : false,
    });
  };
  cancelSearch = (name) => {
    this.setState({
      [name]: "",
    });
  };
  handleOpen = (e) => {
    handleOpen(e, this.state.menu, this.handleStateChange);
  };
  handleStateChange = () => {
    this.setState({
      menu: !this.state.menu,
    });
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
        name: "Your Subject and form Classes",
        strict: false,
        link: `${match.url}/class`,
        render: Student,
      },
      {
        name: "Create / View Assignment",
        strict: false,
        link: `${match.url}/assignment`,
        render: Assignment,
      },
      {
        name: "Timetable & Periods",
        strict: false,
        link: `${match.url}/tandp`,
        render: PeriodInit,
      },
      {
        name: "Staff",
        strict: false,
        link: `${match.url}/staff`,
        render: StaffList,
      },
      {
        name: "View / Upload Results",
        strict: false,
        link: `${match.url}/results`,
        render: Result,
      },
      {
        name: "List of Books",
        strict: false,
        link: `${match.url}/lob`,
        render: ListOfBooks,
      },
    ];
    const linkList = Link_Arr.map((elem, n) => (
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
    ));

    const LinkRoutes = Link_Arr.reverse().map((elem, n) => (
      <Route
        key={"staff_profile_route" + n}
        exact={elem.strict ? true : false}
        path={elem.link}
        render={(props) => <elem.render {...props} />}
      />
    ));
    return (
      <div className="page_wrapper flex">
        <div className="page_wrapper_left"></div>
        <div className="page_wrapper_middle flex1">
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
                <i className="material-icons arrow_back arrow_back_icosn studentProfile_header_icon"></i>
              </div>
              <div className="studentProfile_header_inner div2 vert_align flex flex1 tll">
                <span className="div-width-100 ellipsis">Staff Profile</span>
              </div>
              <div
                style={{ visibility: this.state.menu ? "hidden" : "visible" }}
                className="lowHeader_wrapper_icon_div profile box_border center smFlex"
              >
                <i
                  onClick={this.handleOpen}
                  className="material-icons menu lowHeader_wrapper_icon"
                ></i>
              </div>
            </div>
          ) : this.props.location.pathname ===
            this.props.match.url + "/class" ? (
            <SearchHeader
              handleOpen={this.handleOpen}
              isOpen={this.state.menu}
              handleChange={this.handleChange}
              cancelSearch={this.cancelSearch}
              value={this.state.classSearch}
              name="classSearch"
              color="var(--pantone)"
              placeholder="Search for Class"
              makeShadow={this.state.makeShadow}
            />
          ) : this.props.location.pathname ===
            this.props.match.url + "/staff" ? (
            <SearchHeader
              handleOpen={this.handleOpen}
              isOpen={this.state.menu}
              handleChange={this.handleChange}
              cancelSearch={this.cancelSearch}
              name="staffSearch"
              value={this.state.staffSearch}
              color="var(--pantone)"
              placeholder="Search for Staff"
              makeShadow={this.state.makeShadow}
            />
          ) : (
            <TopHeader
              image="./social.jpg"
              title="Dr. Nwokoye Tochukwu"
              subTitle="Form Teacher: JSS3A"
              isOpen={this.state.menu}
              handleOpen={this.handleOpen}
            />
          )}
          <MainSideRight
            menu={this.state.menu}
            handleOpen={this.handleOpen}
            makeRightShadow={this.state.makeRightShadow}
            makeRightFooterShadow={this.state.makeRightFooterShadow}
            name="Dr. Nwokoye Tochukwu"
            status="Form Teacher: JSS3A"
            isOpen={this.state.menu}
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
                    height="calc(var(--vvh, 1vh) * 100 - 9.5rem)"
                  />
                )}
              />
            </Switch>
            <LittleFooter />
          </div>
        </div>
        <div className="page_wrapper_right">
          <div className="inner hide">
            <MainSideRight
              menu={true}
              noSHADOW={true}
              handleOpen={this.handleOpen}
              makeRightShadow={this.state.makeRightShadow}
              makeRightFooterShadow={this.state.makeRightFooterShadow}
              name="Dr. Nwokoye Tochukwu"
              status="Form Teacher: JSS3A"
              isOpen={this.state.menu}
              handlemakeRightShadow={this.handlemakeRightShadow}
              linkList={linkList}
              handlemakeRightFooterShadow={this.handlemakeRightFooterShadow}
            />
          </div>
        </div>

        {/* <LowHeader handleOpen={this.handleOpen} isOpen={this.state.menu} /> */}
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default StaffProfile;
