import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis";
import App from "./App.jsx";
import "./index.css";

function Layout({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
);