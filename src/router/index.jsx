import { Outlet, HashRouter, Routes, Route } from "react-router-dom";

import Responsive from "@/shared/components/Responsive";

import Home from "@/pages/Home";
import Note from "@/pages/Note";

function Layout() {
  return (
    <Responsive>
      <Outlet />
    </Responsive>
  );
}

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="note" element={<Note />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
