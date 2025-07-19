/*
 * Path: src/index.jsx
 * Description: Entry point for the React application.
 * Author: Richard Anderson.
 * Last Updated: 19-July-2025.
 * Version: 1.2.3
 */

// Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./app.jsx";
import "./assets/css/userInterface.css";

let TestingApp = null;

// Dynamically import TestingApp only in development mode
if (import.meta.env.DEV) {
  TestingApp = React.lazy(() => import("./testing/testingApp.jsx")); // Updated filename.
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {import.meta.env.DEV && TestingApp && (
          <Route path="/testing" element={<TestingApp />} />
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);