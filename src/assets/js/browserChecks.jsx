/*
  Path: src/assets/js/browserChecks.jsx
  Description: Combines and renders browser check components for the app (console only).
  Author: Richard Anderson.
  Last Updated: 19-July-2025.
  Version: 1.0.3
*/

// Imports
import { useEffect, useState } from 'react';
import BCFingerprint from './browserChecks/bcFingerprint.jsx'; // Browser fingerprinting component.
import BCCloudflare from './browserChecks/bcCloudflare.jsx'; // Cloudflare detection component.

// Array of check configs: add more here as needed
const checks = [
  { key: 'fingerprint', Component: BCFingerprint },
  { key: 'cloudflare', Component: BCCloudflare }
  // Add more checks here, e.g. { key: 'anotherCheck', Component: AnotherCheck }
];

// Component that renders all browser check and tracks their results (console only).
const BrowserChecks = () => {
  const [results, setResults] = useState({});

  useEffect(() => {
    Object.entries(results).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}:`, value);
      }
    });
  }, [results]);

  return (
    <>
      {checks.map(({ key, Component }) => (
        <Component
          key={key}
          onResult={val => setResults(r => ({ ...r, [key]: val }))}
        />
      ))}
    </>
  );
};

export default BrowserChecks; // Export for use in the main.