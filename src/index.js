import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  //basename added becouse it shows a whitepage on the phone
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
