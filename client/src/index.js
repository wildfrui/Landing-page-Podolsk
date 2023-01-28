import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import store from "./config/configureStore.js";

import App from "./App";
import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
);
