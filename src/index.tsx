import React from "react";
import ReactDOM from "react-dom";

import { HashRouter } from "react-router-dom";

import App from "./App";

import "./css/style.css";
require("dotenv").config();

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
