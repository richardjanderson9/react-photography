/*
  Path: vite.config.js
  Description: Vite configuration file for a React application.
  Author: Richard Anderson.
  Last Updated: 18-July-2025.
  Version: 1.0.1
  Note: Streamlined for simplicity.
*/

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true
  },
  build: {
    target: 'esnext',
    outDir: 'build',
    sourcemap: true, // Enable source maps for production
    assetsDir: 'assets' // Custom assets directory (optional)
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Shortcut to src directory
    },
  },
  define: {
    'process.env.VERSION': JSON.stringify('0.0.1'),
  },
  optimizeDeps: {
    include: [],
    exclude: []
  }
});