# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DigitalBerge is a digital agency landing page built with React + Vite. It's a single-page application showcasing services, workflow, and company information for a digital transformation agency.

## Commands

```bash
npm run dev      # Start development server with HMR
npm run build    # Production build to /dist
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Tech Stack

- **React 19** with React Compiler (babel-plugin-react-compiler)
- **Vite 8** with Babel for compilation
- **lucide-react** for icons
- **Tailwind-like custom CSS** via inline styles and CSS custom properties
- **Google Fonts**: Plus Jakarta Sans (body), Syne (headings)

## Architecture

- **Single App component** (`src/App.jsx`) - All sections defined inline: HeroSection, ServicesSection, HowWeWorkSection, WhyChooseUsSection, CTASection, FAQSection
- **Component state**: Uses `useState` for FAQ accordion (activeIndex), scroll detection (isScrolled), mouse tracking (mousePos), and card hover states
- **Styling**: Inline `<style>` blocks for animations, Tailwind-like utility classes via CDN (none installed - uses plain CSS)
- **No routing** - single page only

## Key Implementation Details

- Fonts loaded via Google Fonts in `index.html`
- Custom animations: `float`, `fadeInUp`, `slideUp` defined in component `<style>` blocks
- Service cards and work step cards are sub-components within App.jsx
- FAQ uses `activeIndex` state to toggle accordion items
- Background effects use absolute positioning with blur and gradient overlays

## File Structure

```
src/
├── App.jsx      # Main component with all sections
├── App.css      # App-specific styles (minimal)
├── index.css    # Global styles, Tailwind-like utilities
├── main.jsx     # React entry point
└── assets/      # Static assets
```
