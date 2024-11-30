import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./logic/ThemeContext"; // Cambiado de .js a .ts
import "./index.css";
import App from "./App"; // Cambiado de .jsx a .tsx

// Renderizar la aplicación
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);