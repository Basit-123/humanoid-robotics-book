# Quickstart Guide: Physical AI, Humanoid Robotics, and Agentic Engineering Book

**Date**: 2025-12-06
**Feature**: [D:/Hackathon GIAIC/humanoid-robotics-book/specs/001-book-content-generation/spec.md](D:/Hackathon GIAIC/humanoid-robotics-book/specs/001-book-content-generation/spec.md)

## 1. Clone the Repository

```bash
git clone [repository_url]
cd humanoid-robotics-book
```

## 2. Install Dependencies

This book is built using Docusaurus. Ensure you have Node.js (version 18 or higher) installed.

```bash
npm install
```

## 3. Start Local Development Server

```bash
npm run start
```

This will open a new browser window to `http://localhost:3000` with the book content. Any changes you make to the Markdown/MDX files will be hot-reloaded.

## 4. Build the Book for Production

```bash
npm run build
```

This command generates static content into the `build` directory, ready to be served by any static hosting provider (e.g., GitHub Pages).

## 5. Deploy to GitHub Pages

Deployment is handled via GitHub Actions. Push your changes to the `main` branch, and the CI/CD workflow will automatically deploy the book to GitHub Pages.
