import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ColorSchemeProvider } from "context/colorScheme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorSchemeProvider>
    <App />
    </ColorSchemeProvider>
  </React.StrictMode>
);
