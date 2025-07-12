/*
  Path: src/app.jsx
  Description: Main App component for the React application. Renders only the UserInterface component.
  Author: Richard Anderson.
  Last Updated: 12-July-2025.
  Version: 1.1.0
*/

// Imports
import UserInterface from './assets/js/userInterface.jsx'; // User Interface component that combines all UI components.

// Main App component that renders the UserInterface.
function App() {
  return (
    <>
      <UserInterface />
      {/* Add more components here in the future */}
    </>
  );
}

// Export the App component for use in the main entry point.
export default App;