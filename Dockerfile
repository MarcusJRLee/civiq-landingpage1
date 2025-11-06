# Build stage.
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files.
COPY package*.json ./

# Install dependencies.
RUN npm ci

# Copy source files.
COPY . .

# Build the application.
RUN npm run build

# Production stage.
FROM nginx:alpine

# Install envsubst (comes with nginx:alpine, but ensure it's available)
RUN apk add --no-cache gettext

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Create nginx configuration template
RUN echo 'server { \
    listen $PORT; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf.template

# Create startup script to substitute PORT env var
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Expose port (Cloud Run will set PORT env var)
EXPOSE 8080

# Start nginx with PORT substitution
CMD ["/docker-entrypoint.sh"]

