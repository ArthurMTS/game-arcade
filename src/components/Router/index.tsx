import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageRoutes, Home } from "@/views";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageRoutes.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
