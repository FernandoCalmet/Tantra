# Tantra Online Documentation Site

A modern, minimalist documentation site built with Next.js, Tailwind CSS, and shadcn-ui. Features automated content discovery from markdown files and GitHub Pages deployment.

## Features

- **File-system based content**: Add markdown files to `/content` and they automatically appear in the navigation
- **Modern UI**: Minimalist Tesla/Apple-inspired design with warm copper/orange accents
- **Responsive**: Works beautifully on desktop, tablet, and mobile
- **Static Export**: Generates static HTML for fast, reliable hosting on GitHub Pages
- **Auto-deployment**: GitHub Actions automatically builds and deploys on every push
- **Dark Mode Ready**: Near-black dark mode with maintained copper accents
- **MDX Support**: Enhanced markdown with React components
- **Syntax Highlighting**: Code blocks with Shiki
- **Search**: Command palette (Cmd+K) for quick navigation

## Getting Started

### Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Adding Content

Simply add markdown files to the `/content` directory:

```markdown
---
title: "Your Page Title"
description: "Page description for SEO"
order: 1
---

# Your Page Title

Your content here...
```

#### Folder Structure

- Each folder can have a `README.md` (becomes the index page for that section)
- Files are sorted by `order` field, then alphabetically
- Folder names are auto-converted to titles (e.g., `items-management` → "Items Management")

Example structure:
```
content/
├── README.md                    # Homepage
├── installation/
│   ├── README.md               # Installation section index
│   ├── client/
│   │   └── setup.md
│   └── database/
│       └── install.md
└── development/
    └── gmtool/
        └── commands.md
```

### Building for Production

Build the static site:
```bash
npm run build
```

The output will be in the `/out` directory, ready to deploy to GitHub Pages.

## Deployment

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to Pages section
3. Set Source to "GitHub Actions"
4. Push to main/master branch

The GitHub Actions workflow will automatically:
- Install dependencies
- Build the static site
- Deploy to GitHub Pages

Your site will be available at: `https://fernandocalmet.github.io/Tantra`

## Technology Stack

- **Framework**: Next.js 16 (App Router) with static export
- **Styling**: Tailwind CSS v4
- **Components**: shadcn-ui
- **Markdown**: next-mdx-remote, gray-matter
- **Syntax Highlighting**: Shiki
- **Icons**: lucide-react

## Project Structure

```
tantra-docs/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with sidebar
│   ├── page.tsx           # Homepage
│   └── [...slug]/         # Dynamic catch-all route
├── components/
│   ├── ui/                # shadcn-ui components
│   └── docs/              # Documentation components
│       ├── sidebar.tsx
│       ├── top-navbar.tsx
│       └── ...
├── content/               # All markdown content
├── lib/
│   ├── content-tree.ts   # Content scanner
│   └── markdown.ts       # Markdown processor
├── public/
│   └── extras/           # Images and assets
└── .github/
    └── workflows/
        └── deploy.yml    # GitHub Actions workflow
```

## Color Palette

The site uses a warm copper/orange accent color for a unique, energetic feel:

- **Primary**: `#f97316` (Copper Orange)
- **Background**: White (light mode) / `#0a0a0a` (dark mode)
- **Text**: Sophisticated grays

## Customization

### Colors

Edit `app/globals.css` to customize the color palette:

```css
:root {
  --primary: oklch(0.71 0.16 50); /* Copper orange */
  /* ... other colors */
}
```

### Logo

Update the logo in `components/docs/sidebar.tsx` and `components/docs/top-navbar.tsx`.

### Metadata

Update site metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Site Title",
  description: "Your description",
};
```

## Contributing

Content contributions are welcome! Simply:
1. Add/edit markdown files in `/content`
2. Commit and push to trigger automatic deployment
3. Your changes will be live in ~2-3 minutes

---

Built with [Next.js](https://nextjs.org/) | Styled with [Tailwind CSS](https://tailwindcss.com/) | Components by [shadcn/ui](https://ui.shadcn.com/)
