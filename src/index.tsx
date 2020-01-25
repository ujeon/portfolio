import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";

// import { HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

import App from "./App";
import "./css/reset.css";
require("dotenv").config();

ReactGA.initialize("UA-156912055-1");

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

ReactDOM.render(
  // <HashRouter basename={process.env.PUBLIC_URL}>
  <Router history={history}>
    <App />
  </Router>,
  // </HashRouter>,
  document.getElementById("root")
);
