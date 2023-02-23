import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import paths from "../enums/Paths";

import Home from "./Home";
import Stories from "./Stories";
import Admin from "./Admin";
import Test from "./Test";
import Events from "./Events";
import Post from "components/Post";
import PostDetail from "./PostDetail";
import BaseComponent from "components/BaseComponent/BaseComponent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/" element={<Home></Home>} />
      <Route index path="/stories" element={<Stories></Stories>} />
      <Route
        index
        path="/events"
        element={
          <BaseComponent>
            <Events></Events>
          </BaseComponent>
        }
      />
      <Route index path="/admin" element={<Admin></Admin>} />
      <Route index path="/posts/:postId" element={<PostDetail></PostDetail>} />
    </>
  )
);

//   [
//   {
//     path: paths.HOME,
//     element: <Home></Home>,
//   },
//   {
//     path: paths.STORIES,
//     element: <Stories></Stories>,
//   },
//   {
//     path: paths.EVENTS,
//     element: <Events></Events>,
//   },
//   {
//     path: paths.ADMIN,
//     element: <Admin></Admin>,
//   },
//   {
//     path: paths.TEST,
//     element: <Test></Test>,
//   },
//   {
//     path: "/posts:id",
//     element: <Events></Events>,
//   },
// ]);

export default router;
