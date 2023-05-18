import React from "react";
import ReactDOM from "react-dom/client";

import { Router } from "@/components";
import { ThemeProvider } from "@/contexts/theme";
import "@/assets/css/globals.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
);
