import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import registerServiceWorker from "./registerServiceWorker";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "./fontAwesome";
import "./styles/app.css";
import AppProvider from "./context";

ReactDOM.render(
  <AppProvider>
    <Routes />
  </AppProvider>,
  document.getElementById("root")
);
registerServiceWorker();
