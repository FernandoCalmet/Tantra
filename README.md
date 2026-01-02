<div align="center">

# 🎮 Tantra Online Documentation

[![GitHub Pages](https://github.com/FernandoCalmet/Tantra/actions/workflows/deploy.yml/badge.svg)](https://github.com/FernandoCalmet/Tantra/actions/workflows/deploy.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**A modern, minimalist documentation site for Tantra Online game development**

Built with Next.js • Tailwind CSS • shadcn/ui • MDX

[🌐 Live Demo](https://fernandocalmet.github.io/Tantra/) • [📖 Documentation](#getting-started) • [🐛 Report Bug](https://github.com/FernandoCalmet/Tantra/issues) • [✨ Request Feature](https://github.com/FernandoCalmet/Tantra/issues)

</div>

---

## ✨ Features

- 🗂️ **File-system based content**: Add markdown files to `/content` and they automatically appear in the navigation
- 🎨 **Modern UI**: Minimalist Tesla/Apple-inspired design with warm copper/orange accents
- 📱 **Responsive**: Works beautifully on desktop, tablet, and mobile
- ⚡ **Static Export**: Generates static HTML for fast, reliable hosting on GitHub Pages
- 🚀 **Auto-deployment**: GitHub Actions automatically builds and deploys on every push
- 🌙 **Dark Mode Ready**: Near-black dark mode with maintained copper accents
- 📝 **MDX Support**: Enhanced markdown with React components
- 🎯 **Syntax Highlighting**: Code blocks with Shiki
- 🔍 **Search**: Command palette (Cmd+K) for quick navigation
- ♿ **Accessible**: WCAG 2.1 AA compliant

## 🚀 Getting Started

### 💻 Development

**Prerequisites:**
- Node.js 20.x or higher
- npm or yarn package manager

**Steps:**

1. **Clone the repository**
```bash
git clone https://github.com/FernandoCalmet/Tantra.git
cd Tantra
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### 📄 Adding Content

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

#### 📁 Folder Structure

- Each folder can have a `README.md` (becomes the index page for that section)
- Files are sorted by `order` field, then alphabetically
- Folder names are auto-converted to titles (e.g., `items-management` → "Items Management")

**Example structure:**
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

### 🏗️ Building for Production

Build the static site:
```bash
npm run build
```

The output will be in the `/out` directory, ready to deploy to GitHub Pages.

## 🌐 Deployment

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

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 (App Router) with static export |
| **Styling** | Tailwind CSS v4 |
| **Components** | shadcn/ui |
| **Markdown** | next-mdx-remote, gray-matter |
| **Syntax Highlighting** | Shiki |
| **Icons** | lucide-react |
| **Deployment** | GitHub Pages + Actions |

## 📂 Project Structure

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

## 🎨 Color Palette

The site uses a warm copper/orange accent color for a unique, energetic feel:

| Color | Value | Usage |
|-------|-------|-------|
| **Primary** | `#f97316` | Copper Orange - Links, accents, highlights |
| **Background (Light)** | `#ffffff` | White - Main background |
| **Background (Dark)** | `#0a0a0a` | Near-black - Dark mode background |
| **Text** | Various grays | Sophisticated text hierarchy |

## ⚙️ Customization

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

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'feat: add some amazing feature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Content Contributions

For documentation updates:
1. Add/edit markdown files in `/content`
2. Commit and push to trigger automatic deployment
3. Your changes will be live in ~2-3 minutes

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Fernando Calmet**

- 🌐 Website: [fernandocalmet.github.io](https://fernandocalmet.github.io)
- 💼 LinkedIn: [@fernandocalmet](https://www.linkedin.com/in/fernandocalmet)
- 📧 Email: [fernandocalmet@gmail.com](mailto:fernandocalmet@gmail.com)
- 🐙 GitHub: [@FernandoCalmet](https://github.com/FernandoCalmet)

## ⭐ Show your support

Give a ⭐️ if this project helped you!

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [Vercel](https://vercel.com/) - For the amazing deployment platform
- The Tantra Online community

---

<div align="center">

**Built with ❤️ by [Fernando Calmet](https://github.com/FernandoCalmet)**

[⬆ Back to Top](#-tantra-online-documentation)

</div>
