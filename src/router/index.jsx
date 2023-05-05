/** @format */

import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Error from "../components/Error";
import Login from "../pages/Login";
import Enter from "../pages/Enter";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "enter",
            element: <Enter />,
          },
        ],
      },
    ],
  },
]);
