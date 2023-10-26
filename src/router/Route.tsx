import { createBrowserRouter } from "react-router-dom";
import Home from "../features/home/Home";
import Layout from "../features/layout/Layout";
import Login from "../features/login/Login";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
