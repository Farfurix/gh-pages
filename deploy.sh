#!/bin/bash
# Deploy to GitHub Pages
# Usage: ./deploy.sh

set -e

echo "Building project..."
npm run build

echo "Deploying to GitHub Pages..."
npm run deploy

echo "Done! Site will be available at:"
echo "https://farfurix.github.io/gh-pages/"
