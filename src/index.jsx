/*
  Path: src/index.jsx
  Description: Entry point for the React application. Renders the main App component and applies global styles.
  Author: Richard Anderson.
  Last Updated: 12-July-2025.
  Version: 1.1.0
*/

// Imports
import React from 'react'; // React library for building user interfaces.
import ReactDOM from 'react-dom/client'; // ReactDOM for rendering React components to the DOM.
import App from './app.jsx'; // Main application component.
import './assets/css/userInterface.css'; // Universal CSS for the app.

// Create a root element for React to render the application.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within React's strict mode for better error handling and warnings.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
