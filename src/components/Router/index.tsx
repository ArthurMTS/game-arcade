import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageRoutes, Home, Snake, SnakeHome } from "@/views";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageRoutes.home} element={<Home />} />
        <Route path={PageRoutes.snakeHome} element={<SnakeHome />} />
        <Route path={PageRoutes.snakeGame} element={<Snake />} />
      </Routes>
    </BrowserRouter>
  );
}
