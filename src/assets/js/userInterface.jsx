/*
  Path: src/assets/js/userInterface.jsx
  Description: UI components separated from main App logic.
  Author: Richard Anderson.
  Last Updated: 19-July-2025.
  Version: 1.1.1
*/

// Imports
import '../css/userInterface.css'; // User Interface specific styles.
import UiMain from './ui_components/uiMain.jsx'; // Main UI component.
import UiImages from './ui_components/uiImages.jsx'; // Images UI component.
import UiNavigation from './ui_components/uiNavigation.jsx'; // Navigation UI component.
import UiAccessibility from './ui_components/uiAccessibility.jsx'; // Accessibility UI component.

// UserInterface component that combines all UI components.
const UserInterface = () => {
  return (
    <main>
      <UiNavigation />
      <UiMain />
      <UiImages />
      <UiAccessibility />
    </main>
  );
};

export default UserInterface; // Export the UserInterface component for use in the main App.