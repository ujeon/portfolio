import React from "react";
import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route exact path="/" />
    <Route exact path="/about-me" />
    <Route exact path="/uritube" />
    <Route exact path="/gdflower" />
    <Route exact path="/secondhand" />
    <Route exact path="/misinterpreter" />
  </Switch>
);
