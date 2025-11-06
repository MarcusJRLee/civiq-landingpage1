#!/bin/bash

# Check if Docker is installed and running
if ! command -v docker &> /dev/null; then
    echo "✗ Docker is not installed or not in PATH"
    echo ""
    echo "Options:"
    echo "1. Install Docker Desktop from https://www.docker.com/products/docker-desktop"
    echo "2. Test the build using Google Cloud Build emulator:"
    echo "   gcloud builds submit --config cloudbuild.yaml --dry-run"
    echo "3. Skip local testing and deploy directly to GCP (it will build there)"
    exit 1
fi

if ! docker info &> /dev/null; then
    echo "✗ Docker is not running"
    echo "Please start Docker Desktop and try again"
    exit 1
fi

# Test Docker build locally
echo "Building Docker image..."
docker build -t civiq-landingpage-test .

if [ $? -eq 0 ]; then
    echo "✓ Build successful!"
    echo ""
    echo "Starting container on port 8080..."
    echo "Access at http://localhost:8080"
    echo "Press Ctrl+C to stop"
    echo ""
    docker run -p 8080:8080 -e PORT=8080 civiq-landingpage-test
else
    echo "✗ Build failed!"
    exit 1
fi

