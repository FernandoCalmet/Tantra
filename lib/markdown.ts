import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import { codeToHtml } from 'shiki';
import type { MarkdownPage, Heading } from './types';

export type { MarkdownPage, Heading } from './types';

const CONTENT_DIR = path.join(process.cwd(), 'content');

/**
 * Reads and parses a markdown file
 */
export async function getMarkdownContent(slug: string[]): Promise<MarkdownPage | null> {
  const filePath = getMarkdownFilePath(slug);

  if (!filePath || !fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  // Extract headings from content
  const headings = extractHeadings(content);

  return {
    frontmatter: {
      title: data.title || 'Untitled',
      description: data.description,
      order: data.order,
      ...data,
    },
    content,
    slug: slug.join('/'),
    headings,
  };
}

/**
 * Converts slug array to file path
 */
function getMarkdownFilePath(slug: string[]): string | null {
  if (!slug || slug.length === 0) {
    // Root path - look for README.md in content dir
    const readmePath = path.join(CONTENT_DIR, 'README.md');
    if (fs.existsSync(readmePath)) {
      return readmePath;
    }
    return null;
  }

  const slugPath = slug.join('/');

  // Try direct file path
  const mdPath = path.join(CONTENT_DIR, `${slugPath}.md`);
  if (fs.existsSync(mdPath)) {
    return mdPath;
  }

  const mdxPath = path.join(CONTENT_DIR, `${slugPath}.mdx`);
  if (fs.existsSync(mdxPath)) {
    return mdxPath;
  }

  // Try README.md in directory
  const readmePath = path.join(CONTENT_DIR, slugPath, 'README.md');
  if (fs.existsSync(readmePath)) {
    return readmePath;
  }

  return null;
}

/**
 * Extracts headings from markdown content
 */
function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    headings.push({ level, text, id });
  }

  return headings;
}

/**
 * Renders MDX content with custom components
 */
export async function renderMDX(content: string, components: any = {}) {
  return MDXRemote({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
              properties: {
                className: ['heading-anchor'],
              },
            },
          ],
        ],
      },
    },
    components,
  });
}

/**
 * Syntax highlighting with Shiki
 */
export async function highlightCode(code: string, lang: string): Promise<string> {
  try {
    return await codeToHtml(code, {
      lang,
      theme: 'github-dark',
    });
  } catch (error) {
    console.error('Error highlighting code:', error);
    return `<pre><code>${code}</code></pre>`;
  }
}
