import React from "react";

import { Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";

import Main from "./views/Main";
import ProjectDetail from "./views/ProjectDetail";

import HomeButton from "./components/HomeButton";

ReactGA.initialize("UA-156912055-1");

const App: React.FC = () => {
  return (
    <div>
      <HomeButton>
        <img src="../public/logo192.png" alt="" />
      </HomeButton>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/uritube" component={ProjectDetail} />
        <Route exact path="/secondhand" component={ProjectDetail} />
        <Route exact path="/gdflower" component={ProjectDetail} />
        <Route exact path="/misinterpreter" component={ProjectDetail} />
      </Switch>
    </div>
  );
};

export default App;
