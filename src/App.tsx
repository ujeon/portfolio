import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./views/Main";
import AboutMe from "./views/AboutMe";

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Main} />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/about-me"}
          component={AboutMe}
        />
      </Switch>
    </div>
  );
};

export default App;
