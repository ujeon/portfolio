import React from "react";
import { hydrate, render } from "react-dom";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./css/style.css";
require("dotenv").config();

const rootElement = document.getElementById("root")!;

if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>,
    rootElement
  );
} else {
  render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>,
    rootElement
  );
}
