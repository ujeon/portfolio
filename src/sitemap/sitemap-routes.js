import React from "react";
import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route exact path="/" />
    <Route exact path="/about-me" />
    <Route exact path="/:project" />
    <Route exact path="/404" />
  </Switch>
);
