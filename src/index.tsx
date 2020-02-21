import React from "react";
import { hydrate, render } from "react-dom";

import { HashRouter } from "react-router-dom";

import App from "./App";

import "./css/style.css";
require("dotenv").config();

const rootElement = document.getElementById("root")!;

// if (rootElement.hasChildNodes()) {
//   hydrate(
//     <HashRouter basename={process.env.PUBLIC_URL}>
//       <App />
//     </HashRouter>,
//     rootElement
//   );
// } else {
render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <App />
  </HashRouter>,
  rootElement
);
// }
