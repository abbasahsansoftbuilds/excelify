# ------------------------
# 1. Build stage
# ------------------------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Build Vite app
RUN npm run build

# ------------------------
# 2. Production stage
# ------------------------
FROM nginx:alpine

# Copy the built app from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration (optional - nginx default works for most SPAs)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
