/*
  Path: src/index.jsx
  Description: Entry point for the React application. Renders the main App component and applies global styles.
    - Handles routing, including a dev-only "/testing" route.
  Author: Richard Anderson.
  Last Updated: 19-July-2025.
  Version: 1.2.1
*/

// Imports
import React, { Suspense, lazy } from "react"; // React library for building user interfaces.
import ReactDOM from "react-dom/client"; // ReactDOM for rendering React components to the DOM.
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // React Router components for routing.
import App from "./app.jsx"; // Main application component.
import "./assets/css/userInterface.css"; // Universal CSS for the app.
// To be enabled later.
//import BrowserChecks from './assets/js/browserChecks.jsx'; // BrowserChecks component that handles background checks like fingerprinting and Cloudflare detection.


const TestingApp = lazy(() => import('./testing/TestingApp.jsx'));

// Create a root element for React to render the application.
ReactDOM.createRoot(document.getElementById("root")).render(
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
          <Route
            path="/testing"
            element={
              <Suspense fallback={<div>Loading testing area…</div>}>
                <TestingApp />
              </Suspense>
            }
          />
        )}
        <Route path="*" element={<Navigate to="/" replace />} /> {/* Catch-all route */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
