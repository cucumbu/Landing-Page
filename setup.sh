#!/bin/bash

# QUICK START SCRIPT FOR CUCUMBU LANDING PAGE
# This script sets up the development environment

set -e

echo "🚀 cucumbu Landing Page - Quick Start Setup"
echo "==========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "🔧 Setting up environment..."

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local from template..."
    cp .env.local.example .env.local
    echo "⚠️  Please edit .env.local and add your PostgreSQL connection string"
    echo "   Example: DATABASE_URL=\"postgresql://user:password@localhost:5432/cucumbu\""
else
    echo "✅ .env.local already exists"
fi

echo ""
echo "🗄️  Setting up database..."
echo "   Running: npx prisma migrate dev --name init"
npx prisma migrate dev --name init || {
    echo ""
    echo "⚠️  Database setup failed. Make sure:"
    echo "   1. PostgreSQL is running"
    echo "   2. DATABASE_URL in .env.local is correct"
    echo "   3. You have permission to create databases"
    echo ""
    echo "Retry with: npx prisma migrate dev --name init"
}

echo ""
echo "✅ Setup Complete!"
echo ""
echo "🎉 Next steps:"
echo "   1. npm run dev          - Start development server"
echo "   2. Open http://localhost:3000 in your browser"
echo ""
echo "📚 Documentation:"
echo "   - README.md (getting started and overview)"
echo "   - MIGRATION.md (what changed from PHP)"
echo "   - ARCHITECTURE.md (technical details)"
echo ""
