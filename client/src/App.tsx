import React from "react";
import { RouterProvider } from "react-router-dom";

import router from "routes";

import "css/normalize.css";

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
