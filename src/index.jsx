/*
  Path: src/index.jsx
  Description: Entry point for the React application. Renders the main App component and applies global styles.
    - Handles routing, including a dev-only "/testing" route.
  Author: Richard Anderson.
  Last Updated: 18-July-2025.
  Version: 1.2.0
*/

// Imports
import React from "react"; // React library for building user interfaces.
import ReactDOM from "react-dom/client"; // ReactDOM for rendering React components to the DOM.
import { BrowserRouter, Routes, Route } from "react-router-dom"; // React Router components for routing.
import App from "./app.jsx"; // Main application component.
import TestingApp from "./testing/TestingApp.jsx"; // Testing application component for development.
import "./assets/css/userInterface.css"; // Universal CSS for the app.

// Create a root element for React to render the application.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component within React's strict mode for better error handling and warnings.
root.render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true, // Opt-in to the new relative splat path behavior
      }}
    >
      <Routes>
        <Route path="/" element={<App />} />
        {import.meta.env.DEV && (
          <Route path="/testing" element={<TestingApp />} />
        )}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
