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
COPY build/ /etc/nginx/html/

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]