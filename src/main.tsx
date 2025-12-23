import { StrictMode } from "react";

import "./index.css";
import App from "./components/App.tsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="yellow-border" />
    <App />
  </StrictMode>
);
