import { createBrowserRouter } from "react-router-dom";

import paths from "../enums/Paths.ts";

import Home from "./Home";
import Stories from "./Stories";
import Admin from "./Admin";
import Test from "./Test/index.tsx";

const router = createBrowserRouter([
  {
    path: paths.HOME,
    element: <Home></Home>,
  },
  {
    path: paths.STORIES,
    element: <Stories></Stories>,
  },
  {
    path: paths.ADMIN,
    element: <Admin></Admin>,
  },
  {
    path: paths.TEST,
    element: <Test></Test>,
  },
]);

export default router;
