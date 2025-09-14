#!/bin/bash

# Simple deployment script for GitHub Pages
# This script helps prepare the site for deployment

echo "🚀 Preparing Louis Follet's Academic Website for Deployment..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit: Academic website setup"
fi

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  No remote origin found. Please add your GitHub repository:"
    echo "   git remote add origin https://github.com/yourusername/louis-follet-website.git"
    echo ""
fi

# Add all files
echo "📝 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Update website content - $(date)"

# Push to main branch
echo "🌐 Pushing to GitHub..."
git push origin main

echo "✅ Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Go to your GitHub repository settings"
echo "2. Navigate to 'Pages' section"
echo "3. Select 'GitHub Actions' as the source"
echo "4. Your site will be available at: https://yourusername.github.io/louis-follet-website"
echo ""
echo "Don't forget to:"
echo "- Add your professional photo to images/louis-follet.jpg"
echo "- Add your CV to documents/cv.pdf"
echo "- Update content in data/content.json"
