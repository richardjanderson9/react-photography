/*
  Path: vite.config.js
  Description: Vite configuration file for a React application.
  Author: Richard Anderson.
  Last Updated: 18-July-2025.
  Version: 1.0.2
  Note: Streamlined for simplicity.
*/

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});