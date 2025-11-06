#!/bin/sh
set -e # Exit immediately if a command exits with a non-zero status.

# Set the default port if not provided
export PORT=${PORT:-8080}

# Substitute the PORT variable in the Nginx config template
envsubst '$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# Execute the main command (Nginx)
exec nginx -g "daemon off;"