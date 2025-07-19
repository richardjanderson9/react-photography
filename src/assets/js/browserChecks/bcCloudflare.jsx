/*
  Path: src/assets/js/browserChecks/bcCloudflare.jsx
  Description: Component for performing Cloudflare-related browser checks.
  Author: Richard Anderson.
  Last Updated: 19-July-2025.
  Version: 1.0.1
*/

// Imports
import { useEffect } from 'react'; // React hooks.

// BCCloudflare component for Cloudflare detection (background-only).
const BCCloudflare = ({ onResult }) => {
  useEffect(() => {
    // Simulate Cloudflare check (always true for testing).
    if (onResult) onResult(true);
    console.log('Cloudflare check here!'); // Log for debugging.
  }, []); // Only run once on mount.

  return null; // Background-only: renders nothing to the UI.
};

export default BCCloudflare; // Export the component for use in BrowserChecks.