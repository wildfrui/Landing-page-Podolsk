import React from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";

import store from "config/configureStore";

import App from "./App";
import axiosInterceptor from "config/axiosInterceptor";

axiosInterceptor();

const root = createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
);
