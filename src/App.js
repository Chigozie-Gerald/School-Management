import React, { PureComponent } from "react";
import "./App.css";
import "./material-design-icons-iconfont-master/material-design-icons-iconfont-master/dist/material-design-icons.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import MainSide from "./component/mainSide";
import HomePage from "./component/home/homePage";
import Login from "./component/login/login";
import StudentProfile from "./component/profile/studentProfile";
import NotFound from "./component/notFound";
import Gallery from "./component/gallery/gallery";
import Contact from "./component/contact/contact";
import Location from "./component/location/location";
import Service from "./component/services/service";
import Suggestion from "./component/suggestion/suggestion";
import SchoolAndStudentPhoto from "./component/schoolAndStudentPhoto/schoolAndStudentPhoto";
import ServiceStarted from "./component/serviceStarted/serviceStarted";
import LocationDirection from "./component/locationDirection/locationDirection";
import RegisterWard from "./component/registerWard/registerWard";
import News from "./component/news/news";
import ForgetPassword from "./component/forgetPassword/forgetPassword";
import LocationFullScreen from "./component/locationFullScreen/locationFullScreen";
import StaffProfile from "./component/staff/profile/staff_profile";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleOrientation = this.handleOrientation.bind(this);
    this.handleResize();
    this.state = {
      menu: false,
    };
  }

  handleMenuClose = () => {
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.right = "";
    document.body.style.left = "";
    window.scrollTo(0, parseFloat(scrollY || "0") * -1);
    this.setState({
      menu: false,
    });
  };
  handleMenuOpen = () => {
    const scrollH = `-${window.scrollY}px`;
    document.body.style.position = "fixed";
    document.body.style.top = scrollH;
    document.body.style.right = 0;
    document.body.style.left = 0;
    this.setState({
      menu: true,
    });
  };

  handleOrientation = () => {
    const timeout = 120;
    return new window.Promise((resolve) => {
      const go = (i, Width0) => {
        console.log(i);
        console.log(Width0, "width0");
        console.log(window.outerWidth, "window.outerWidth");
        if (window.outerWidth !== Width0 || i >= timeout) {
          window.removeEventListener("resize", this.handleResize);
          resolve(this.handleResize());
        } else {
          window.requestAnimationFrame(() => go(i + 1, Width0));
        }
      };
      go(0, window.outerWidth);
    });
  };
  handleResize = () => {
    const viewheight = window.outerHeight;
    const viewheight1 = window.innerHeight;
    const viewwidth = window.outerWidth;
    // let viewwidth = window.innerWidth;
    let viewH;
    if (viewheight > viewheight1) {
      viewH = viewheight;
    } else {
      viewH = viewheight1;
    }
    let viewport = document.querySelector("meta[name = viewport]");
    viewport.setAttribute(
      `content`,
      `height = ${viewheight1}, width = ${viewwidth}, initial-scale = 1.0`
      // "content",
      // "height=" + viewheight + ",width=" + viewwidth + ",initial-scale = 1.0"
    );
    document.documentElement.style.setProperty(
      "--vvh",
      `${viewheight1 * 0.01}px`
    );
    document.documentElement.style.setProperty(
      "--vvw",
      `${viewwidth * 0.01}px`
    );
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    // window.addEventListener("orientationchange", this.handleOrientation);
  }
  componentWillUnmount() {
    window.removeEventListener("orientationchange", this.handleOrientation);
    window.removeEventListener("resize", this.handleResize);
  }
  render() {
    return (
      <Router>
        <div className="App flex">
          <div className="App_wrapper">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <HomePage
                    {...props}
                    handleMenuClose={this.handleMenuClose}
                    handleMenuOpen={this.handleMenuOpen}
                    menu={this.state.menu}
                  />
                )}
              />
              <Route path="/login" render={(props) => <Login {...props} />} />
              <Route
                path="/register_ward"
                render={(props) => <RegisterWard {...props} />}
              />
              <Route
                exact
                path="/gallery"
                render={(props) => <Gallery {...props} />}
              />
              <Route
                path="/gallery/photo/:cat"
                render={(props) => <SchoolAndStudentPhoto {...props} />}
              />
              <Route
                path="/contact_us"
                render={(props) => <Contact {...props} />}
              />
              <Route
                path="/location/get_direction"
                render={(props) => <LocationDirection {...props} />}
              />
              <Route
                path="/location_large"
                render={(props) => <LocationFullScreen {...props} />}
              />
              <Route
                path="/location"
                render={(props) => <Location {...props} />}
              />
              <Route
                path="/services/get_started"
                render={(props) => <ServiceStarted {...props} />}
              />

              <Route
                path="/services"
                render={(props) => <Service {...props} />}
              />
              <Route
                path="/forget_password"
                render={(props) => <ForgetPassword {...props} />}
              />
              <Route
                path="/suggestion"
                render={(props) => <Suggestion {...props} />}
              />
              <Route
                path="/staff_profile"
                render={(props) => <StaffProfile {...props} />}
              />
              <Route
                path="/profile"
                render={(props) => <StudentProfile {...props} />}
              />
              <Route path="/news" render={(props) => <News {...props} />} />
              <Route
                exact
                render={(props) => (
                  <NotFound {...props} height="calc(var(--vvh, 1vh) * 100)" />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
