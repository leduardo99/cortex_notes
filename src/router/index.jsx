import { Outlet, createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";

// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
