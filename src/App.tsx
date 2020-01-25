import React from "react";

import { Switch, Route } from "react-router-dom";
// import ReactGA from "react-ga";

import Main from "./views/Main";
import AboutMe from "./views/AboutMe";

// ReactGA.initialize("UA-156912055-1");
// ReactGA.pageview("/portfolio/");

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about-me" component={AboutMe} />
    </Switch>
  );
};

export default App;
