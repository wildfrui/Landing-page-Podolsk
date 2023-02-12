import { createBrowserRouter } from "react-router-dom";

import paths from "../enums/Paths";

import Home from "./Home";
import Stories from "./Stories";
import Admin from "./Admin";
import Test from "./Test";
import Events from "./Events";

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
    path: paths.EVENTS,
    element: <Events></Events>,
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
