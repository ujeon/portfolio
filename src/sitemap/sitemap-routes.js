import React from "react";
import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route exact path="/" />
    <Route exact path="/about-me" />
    <Route exact path="/projects/uritube" />
    <Route exact path="/projects/gdflower" />
    <Route exact path="/projects/secondhand" />
    <Route exact path="/projects/misinterpreter" />
    <Route />
  </Switch>
);
