import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./css/reset.css";
require("dotenv").config();

ReactDOM.render(
  <BrowserRouter basename={process.env.REACT_APP_PRODUCTION_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
