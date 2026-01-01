# Tantra Online Documentation Site - Design Specification

**Date:** 2026-01-01
**Status:** Approved
**Goal:** Build a modern, minimalist static documentation site with automated content discovery and GitHub Pages deployment

---

## Overview

A Next.js-based static documentation site for Tantra Online game development. Features Tesla/Apple-inspired minimalism with warm copper/orange accents and Claude-like UX. Markdown-based content system allows adding documentation without touching code.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router) with static export
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn-ui (Button, Dialog, Sheet, Command, etc.)
- **Markdown:** next-mdx-remote for rendering, gray-matter for frontmatter
- **Deployment:** GitHub Pages via GitHub Actions
- **Icons:** lucide-react

---

## Architecture

### Project Structure

```
tantra-docs/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with sidebar
│   ├── page.tsx                 # Homepage
│   └── [...slug]/page.tsx       # Dynamic catch-all route
├── components/
│   ├── ui/                      # shadcn-ui components
│   ├── sidebar.tsx              # Main navigation sidebar
│   ├── top-navbar.tsx           # Header with search trigger
│   ├── table-of-contents.tsx    # Right-side TOC
│   ├── command-palette.tsx      # Cmd+K search overlay
│   └── mdx-components.tsx       # Custom markdown components
├── content/                      # All markdown documentation
│   ├── installation/
│   │   ├── README.md
│   │   ├── client/
│   │   ├── database/
│   │   ├── server/
│   │   └── web/
│   ├── development/
│   │   ├── README.md
│   │   ├── account-data/
│   │   ├── gmtool/
│   │   ├── items-management/
│   │   ├── npc/
│   │   └── server-info/
│   └── game-guide/
│       └── README.md
├── lib/
│   ├── markdown.ts              # MD processing utilities
│   └── content-tree.ts          # Filesystem scanner
├── public/
│   └── extras/                   # Images and static assets
├── styles/
│   └── globals.css              # Tailwind imports + custom styles
├── next.config.js               # Static export config
├── tailwind.config.ts           # Theme customization
└── tsconfig.json
```

### Data Flow

1. **Build Time:**
   - Scan `/content` directory recursively
   - Parse frontmatter from each `.md` file
   - Generate navigation tree with paths and metadata
   - Create static routes for all markdown files
   - Export as static HTML/CSS/JS

2. **Runtime:**
   - Navigate between pre-rendered pages
   - Client-side search through content index
   - Theme switching (localStorage)
   - Smooth transitions and interactions

---

## Content System

### Automatic Content Discovery

The system recursively scans `/content` at build time to generate navigation. Zero configuration needed when adding new content.

### Frontmatter Schema

Every markdown file includes YAML frontmatter:

```yaml
---
title: "Install SQL Server"
order: 1
description: "Step-by-step SQL Server installation guide"
---
```

**Fields:**
- `title` (required): Page title shown in sidebar and heading
- `order` (optional): Sort order within folder (defaults to alphabetical)
- `description` (optional): Meta description for SEO

### Folder Structure Rules

- Each folder can have `README.md` (becomes index page for that section)
- Files sorted by `order` field, then alphabetically
- Folder names auto-converted to titles (`items_management` → "Items Management")
- Optional `_meta.json` for custom section configuration

### Example Content Organization

```
content/
├── installation/
│   ├── README.md (order: 0)
│   ├── client/
│   │   ├── README.md
│   │   └── sttantra.md (order: 1)
│   ├── database/
│   │   ├── README.md
│   │   ├── install-sqlserver.md (order: 1)
│   │   └── setup-database.md (order: 2)
│   └── server/
│       └── requirements.md
├── development/
│   └── ...
└── game-guide/
    └── ...
```

### Content Tree Generation

```typescript
// lib/content-tree.ts
interface ContentNode {
  title: string;
  slug: string;
  path: string;
  order: number;
  description?: string;
  children?: ContentNode[];
}

function buildContentTree(dir: string): ContentNode[];
```

---

## UI/UX Design

### Layout Structure

```
┌─────────────────────────────────────────────────┐
│  Top Navbar (sticky, 60px)              [⌘K] │
├──────────┬──────────────────────────┬───────────┤
│          │                          │           │
│ Sidebar  │   Main Content Area      │  TOC      │
│ (280px)  │   (max-w-800px)          │ (240px)   │
│ (fixed)  │                          │ (sticky)  │
│          │                          │           │
│ - Tree   │   # Page Title           │ On this   │
│   Nav    │   Description            │ page:     │
│          │                          │ - Link 1  │
│ [Active] │   Content...             │ - Link 2  │
│          │                          │ - Link 3  │
│          │   [Code Block]           │           │
│          │                          │           │
│          │   Images, tables...      │           │
│          │                          │           │
└──────────┴──────────────────────────┴───────────┘
```

### Component Specifications

#### 1. Top Navbar
- Fixed positioning, 60px height
- Logo + "Tantra Online Docs" (left)
- Main section tabs: Installation | Development | Game Guide
- Search button (triggers Cmd+K palette)
- Theme toggle (light/dark mode)
- GitHub repository link
- Responsive: collapses to hamburger on mobile

#### 2. Sidebar Navigation
- 280px width (collapsible on mobile)
- Collapsible tree structure
- Current page highlighted with copper/orange accent + subtle background
- Smooth expand/collapse animations (framer-motion)
- Scrollable, auto-scrolls to keep active item visible
- Keyboard accessible (Tab, Enter, Arrow keys)

#### 3. Main Content Area
- Max-width: 800px, centered with padding
- Clean typography with generous line-height (1.7)
- Proper heading hierarchy (H1 → H6)
- Custom styled markdown elements
- Responsive images
- Code blocks with syntax highlighting

#### 4. Table of Contents (Right Sidebar)
- 240px width, sticky positioning
- Auto-generated from H2/H3 headings
- Highlights current section on scroll
- Smooth scroll on click
- Hidden on tablet/mobile (< 1280px)

#### 5. Command Palette
- Triggered by Cmd+K or search button
- Fuzzy search across all page titles and content
- Keyboard navigation (↑↓, Enter, Esc)
- Recent pages history
- Grouped results by section
- Built with shadcn-ui Command component

---

## Visual Design System

### Color Palette

```typescript
// tailwind.config.ts theme extension
colors: {
  primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',  // Main copper/orange
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  }
}
```

### Typography

**Font Families:**
- **Headings:** Inter, SF Pro Display, system-ui, sans-serif
- **Body:** -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif
- **Code:** 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace

**Type Scale:**
- H1: `text-4xl font-bold` (36px)
- H2: `text-3xl font-semibold` (30px)
- H3: `text-2xl font-semibold` (24px)
- H4: `text-xl font-semibold` (20px)
- Body: `text-base` (16px)
- Small: `text-sm` (14px)
- Caption: `text-xs` (12px)

**Line Heights:**
- Headings: 1.2-1.3
- Body text: 1.7
- Code: 1.5

### Spacing System

- Base unit: 4px (Tailwind default)
- Component padding: 16px, 24px, 32px, 48px
- Content max-width: 800px
- Section spacing: 64px between major sections
- Generous whitespace for Apple-like breathing room

### Dark Mode

- Seamless toggle with preference saved to localStorage
- System preference detection on first visit
- Near-black backgrounds (#0a0a0a), not pure black
- Reduced contrast for eye comfort (white → #e5e5e5)
- Copper accent maintains vibrancy in both modes
- Smooth transition animation (150ms)

---

## Markdown Rendering

### Enhanced Features

#### 1. Code Blocks
- Syntax highlighting via `shiki` or `rehype-highlight`
- Copy button in top-right corner
- Language badge
- Optional line numbers for long snippets
- Muted color scheme (minimalist, not vibrant)

```typescript
// Example rendered code block
function buildContentTree(dir: string): ContentNode[] {
  // Implementation
}
```

#### 2. Callouts/Admonitions

```markdown
> **Note:** This is important information
> **Warning:** Be careful here
> **Tip:** Pro tip for developers
```

Rendered as colored boxes with lucide-react icons:
- Note: Blue background, info icon
- Warning: Yellow background, alert icon
- Tip: Green background, lightbulb icon

#### 3. Images
- Auto-wrapped in Next.js `<Image>` component
- Lazy loading
- Responsive sizing
- Click to open lightbox for zoomed view
- Alt text required for accessibility

#### 4. Tables
- Clean borders with subtle hover effects
- Responsive (horizontal scroll on mobile)
- Optional zebra striping
- Header row styling

#### 5. Links
- Internal links: copper/orange color, no underline
- External links: subtle external icon (lucide-react)
- Hover: underline animation
- Smooth scroll for anchor links

#### 6. Custom MDX Components (Optional)

```mdx
<Tabs>
  <Tab title="Windows">Windows instructions...</Tab>
  <Tab title="Linux">Linux instructions...</Tab>
</Tabs>

<Steps>
  <Step>First do this</Step>
  <Step>Then do this</Step>
</Steps>
```

### MDX Processing Pipeline

```
1. Read markdown file from /content
2. Parse frontmatter with gray-matter
3. Compile MDX with next-mdx-remote
4. Inject custom components
5. Render as React components
6. Output static HTML at build time
```

---

## GitHub Pages Deployment

### Next.js Configuration

```javascript
// next.config.js
module.exports = {
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages doesn't support image optimization
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Tantra' : '',
  trailingSlash: true,
}
```

### GitHub Actions Workflow

**File:** `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main, master]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build static site
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Deployment Workflow

1. Developer adds new markdown file to `/content`
2. Commit and push to main/master branch
3. GitHub Actions automatically triggers
4. Installs dependencies (`npm ci`)
5. Builds static site (`npm run build`)
6. Uploads build artifacts
7. Deploys to GitHub Pages
8. Site live in 2-3 minutes at `https://fernandocalmet.github.io/Tantra`

### Build Output

- Static HTML files in `/out` directory
- All assets optimized and bundled
- Client-side JavaScript for interactivity
- SEO-friendly pre-rendered pages
- Service worker for offline support (optional)

---

## Search & Navigation

### Command Palette Features

- **Trigger:** Cmd+K (Mac) / Ctrl+K (Windows)
- **Fuzzy search** across all page titles, descriptions, and content
- **Keyboard navigation:** ↑↓ to navigate, Enter to select, Esc to close
- **Recent pages** shown when search is empty
- **Grouped results** by section (Installation, Development, Guide)
- **Performance:** Search index built at compile time
- **Component:** shadcn-ui Command component

### Sidebar Features

- **Collapsible sections** with smooth animations
- **Active page** highlighted with copper accent + subtle background
- **Breadcrumb trail** showing current location in hierarchy
- **Collapse/expand all** button for power users
- **Keyboard accessible:** Tab navigation, Enter to expand/collapse
- **Auto-scroll** to keep active item visible

### Mobile Experience

- Sidebar becomes **slide-out drawer** (shadcn Sheet component)
- **Hamburger menu** in top navbar
- **Swipe gestures** for navigation (optional)
- **TOC integrated** into bottom sheet
- **Touch targets:** Minimum 44px for accessibility
- **Performance:** Optimized for slower connections

### SEO & Performance

- **Pre-rendered meta tags** from frontmatter
- **Open Graph images** for social sharing
- **Sitemap.xml** auto-generated from content tree
- **robots.txt** for search engine guidance
- **Lighthouse score target:** 95+ across all metrics
- **Fast page transitions** with Next.js prefetching
- **Minimal JavaScript:** Progressive enhancement approach

---

## Technical Specifications

### Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.3.0",
    "tailwindcss": "^3.4.0",
    "next-mdx-remote": "^4.4.1",
    "gray-matter": "^4.0.3",
    "shiki": "^0.14.5",
    "lucide-react": "^0.300.0",
    "framer-motion": "^10.16.0"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/react": "^18.2.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32"
  }
}
```

### Browser Support

- **Modern browsers:** Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile:** iOS Safari 12+, Chrome Android
- **Progressive enhancement:** Core content accessible without JavaScript

### Performance Targets

- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Bundle size:** < 200KB initial (gzipped)

### Accessibility

- **WCAG 2.1 Level AA compliance**
- **Semantic HTML** throughout
- **Keyboard navigation** for all interactive elements
- **Screen reader** tested with NVDA/VoiceOver
- **Focus indicators** visible and distinct
- **Color contrast** meets 4.5:1 minimum ratio

---

## Migration Plan

### Content Migration

1. Move existing markdown files from old structure to new `/content` directory
2. Add frontmatter to each file (title, order, description)
3. Update image paths to `/extras` directory
4. Validate all internal links

### Asset Migration

1. Copy `/extras` directory to `/public/extras`
2. Update image references in markdown files
3. Optimize large images (compress, resize)

### URL Structure

Old (Jekyll): `https://fernandocalmet.github.io/Tantra/content_installation/database/install_sqlserver.html`

New (Next.js): `https://fernandocalmet.github.io/Tantra/installation/database/install-sqlserver`

**Redirects:** Add `next.config.js` redirects for old URLs to maintain SEO

---

## Future Enhancements (Optional)

- **Versioning:** Support multiple documentation versions (v1, v2, etc.)
- **i18n:** Multi-language support (English, Spanish, etc.)
- **API reference:** Auto-generated API docs from code comments
- **Interactive examples:** Embedded code playgrounds
- **Analytics:** Privacy-friendly page view tracking
- **Feedback:** "Was this helpful?" widget on each page
- **Dark mode auto-switching:** Based on time of day

---

## Success Metrics

- **Developer experience:** Can add new content in < 5 minutes
- **Build time:** < 30 seconds for full site build
- **Deployment time:** < 3 minutes from push to live
- **Page load:** < 2 seconds on 3G connection
- **Search accuracy:** > 90% relevant results in top 3
- **Mobile usability:** 100% on Google Mobile-Friendly Test

---

## Conclusion

This design provides a modern, maintainable documentation platform that:
- ✅ Requires zero code changes to add content
- ✅ Delivers exceptional UX with minimalist aesthetics
- ✅ Deploys automatically on every push
- ✅ Performs at the highest standards
- ✅ Scales from 10 to 1000+ pages effortlessly

The file-system based content discovery ensures the site grows naturally with your documentation needs, while the static export guarantees fast, reliable hosting on GitHub Pages.
