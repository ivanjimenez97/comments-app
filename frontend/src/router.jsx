import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/authentication/Login";
import GuestLayout from "./components/layouts/GuestLayout";
import NotFound from "./views/NotFound";
import Dashboard from "./views/dashboard/Dashboard";
import DefaultLayout from "./components/layouts/DefaultLayout";
import UsersIndex from "./views/users/UsersIndex";
import CreateUser from "./views/users/CreateUser";
import EditUser from "./views/users/EditUser";
import CommentIndex from "./views/comments/CommentIndex";
import CommentIndexTs from "./views/comment-ts/CommentIndexTs.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        //This will redirect to this url every time the user enters the "/".
        element: <Navigate to={"/dashboard"} />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      // ***** Comments *****
      {
        path: "/comments",
        element: <CommentIndex />,
      },
      // ***** Comments TS Version *****
      {
        path: "/comments-ts-version",
        element: <CommentIndexTs />,
      },
      // ***** USERS *****
      {
        path: "/users",
        element: <UsersIndex />,
      },
      {
        path: "/users/create",
        element: <CreateUser />,
      },
      {
        path: "/users/edit/:id",
        element: <EditUser />,
      },
      // ***** NOT FOUND *****
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
