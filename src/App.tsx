import React from "react";

import { Switch, Route, useHistory } from "react-router-dom";
import ReactGA from "react-ga";

import Main from "./views/Main";
import AboutMe from "./views/AboutMe";

ReactGA.initialize("UA-156912055-1");
ReactGA.pageview("/");
ReactGA.pageview("/about-me");

const App: React.FC = () => {
  let history = useHistory();
  history.listen(location => ReactGA.pageview(location.pathname));

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about-me" component={AboutMe} />
      </Switch>
    </div>
  );
};

export default App;
