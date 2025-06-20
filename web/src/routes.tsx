import { createBrowserRouter } from "react-router";

import { AppLayout } from "./pages/_layouts/app";
import { ErrorPage } from "./pages/error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: []
    }
]);