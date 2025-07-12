/*
  Path: src/index.jsx
  Description: Entry point for the React application.
  Author: Richard Anderson.
  Last Updated: 11-July-2025.
  Version: 1.0.2.
  Note: This file contains both AI-generated (Copilot -- Claude 3.7) and manually added comments for code clarity.
*/

// Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import './assets/css/index.css';

// Initialize React Root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render App.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
