import { createBrowserRouter } from "react-router-dom";

import paths from "../enums/Paths";

import Home from "./Home/index.js";
import Stories from "./Stories/index.tsx";
import Admin from "./Admin/index.js";
import Test from "./Test/index.tsx";
import Events from "./Events/index.tsx";

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
