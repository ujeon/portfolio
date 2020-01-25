import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";

import { HashRouter } from "react-router-dom";

import App from "./App";
import "./css/reset.css";
require("dotenv").config();

ReactGA.initialize("UA-156912055-1");

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
