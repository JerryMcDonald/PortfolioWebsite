import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
// import Components from "views/Components/Components.js";
// import LandingPage from "views/LandingPage/LandingPage.js";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";
import Contact from "./views/ContactPage/ContactPage.js";
import About from "./views/AboutPage/AboutPage.js";
import Images from "./views/ImagesPage/ImagesPage.js";
import ASBlog from "./views/BlogPosts/AppliedSystems/AppliedSystemsBlogPost.js";
import Schedule from "./views/SchedulePage/SchedulePage.js";

// import Resume from "./views/ResumePage/ResumePage.js";
import HomePage from "./views/HomePage/HomePage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/* <Route path="/landing-page" component={LandingPage} /> */}
      <Route exact path="/aboutme-page" component={About} />
      <Route exact path="/appliedsystems" component={ASBlog} />
      <Route path="/schedule-page" component={Schedule} />
      {/* <Route path="/resume-page" component={Resume} /> */}
      <Route exact path="/contact-page" component={Contact} />
      {/* <Route path="/wtf/page" components={HomePage} /> */}
      <Route path="/image-page" component={Images} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
