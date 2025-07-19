#
# Path: Dockerfile
# Description: Dockerfile for building and serving a React (Vite) application with Nginx.
# Author: Richard Anderson.
# Last Updated: 18-July-2025.
# Version: 1.0.0
# Notes:
#   - Multi-stage build for optimized image size.
#   - Uses Node.js for build, Nginx for serving.
#   - Copies custom Nginx config for SPA routing and gzip.
#   - Exposes port 80 for HTTP traffic.
#

# Base build image
FROM node:22-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Then copy the rest
COPY . .

# Build the application
RUN npm run build

# Production image
FROM nginx:alpine

# Copy built application to Nginx html directory
COPY dist/ /etc/nginx/html/

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]