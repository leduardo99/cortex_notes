import { Outlet, createBrowserRouter } from "react-router-dom";

import Home from '@/pages/Home'
// import Wrapper from "@/shared/components/Wrapper";

// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default function RouteLayout() {
  return (
    // <Wrapper>
    <Outlet />
    // </Wrapper>
  );
}
