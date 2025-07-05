import { createBrowserRouter } from "react-router";

import { AppLayout } from "./pages/_layouts/app";
import { ErrorPage } from "./pages/error";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Dashboard />,
        path: "/",
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
