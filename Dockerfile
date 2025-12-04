#
# Path: Dockerfile
# Description: Dockerfile for building and serving a React (Vite) application with Nginx.
# Author: Richard Anderson.
# Last Updated: 30-October-2025.
# Version: 1.1.2
# Notes:
#   - Multi-stage build for optimized image size.
#   - Uses Node.js (LTS-alpine) for build to automatically track the latest LTS release.
#   - Uses Nginx (Alpine) for serving static content.
#   - Applies package upgrade for pcre2 CVE-2025-58050 patch.
#   - Copies custom Nginx config for SPA routing and gzip.
#   - Exposes port 80 for HTTP traffic.
#

# Base build image
FROM node:lts-alpine AS build

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
FROM nginx:1.29.3-alpine3.22-slim

# Ensure security patches (pcre2 CVE-2025-58050 fix)
RUN apk --no-cache add pcre2=10.46-r0

# Copy built application to Nginx html directory
COPY dist/ /etc/nginx/html/

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
