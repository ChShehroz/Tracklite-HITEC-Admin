import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/Style/index.css";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import process from "process";

// Polyfill for the process object
window.process = process;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </React.StrictMode>
  </BrowserRouter>
);
