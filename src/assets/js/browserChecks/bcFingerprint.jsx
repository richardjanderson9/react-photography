/*
  Path: src/assets/js/browserChecks/bcFingerprint.jsx
  Description: Component for performing browser fingerprinting checks.
  Author: Richard Anderson.
  Last Updated: 19-July-2025.
  Version: 1.0.1
*/

// Imports
import { useEffect } from 'react'; // React hooks.

// BCFingerprint component that simulates a fingerprint check and returns true for testing.
const BCFingerprint = ({ onResult }) => {
  useEffect(() => {
    // Simulate fingerprint check (always true for testing).
    if (onResult) onResult(true);
    console.log('Fingerprint Here!'); // Log for debugging.
  }, []); // Only run once on mount.

  return null; // Background-only: renders nothing to the UI.
};

export default BCFingerprint; // Export the component for use in BrowserChecks.