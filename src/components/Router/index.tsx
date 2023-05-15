import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageRoutes, Home, Snake } from "@/views";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageRoutes.home} element={<Home />} />
        <Route path={PageRoutes.snake} element={<Snake />} />
      </Routes>
    </BrowserRouter>
  );
}
