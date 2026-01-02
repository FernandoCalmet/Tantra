import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { ContentNode } from './types';

export type { ContentNode } from './types';

const CONTENT_DIR = path.join(process.cwd(), 'content');

/**
 * Converts a file/folder name to a title
 * Example: "items_management" => "Items Management"
 */
function nameToTitle(name: string): string {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\.(md|mdx)$/i, '');
}

/**
 * Recursively builds a content tree from the content directory
 */
export function buildContentTree(dir: string = CONTENT_DIR, basePath: string = ''): ContentNode[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const nodes: ContentNode[] = [];

  for (const entry of entries) {
    // Skip hidden files and directories
    if (entry.name.startsWith('.') || entry.name.startsWith('_')) {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name);

    if (entry.isDirectory()) {
      // Handle directories
      const children = buildContentTree(fullPath, relativePath);

      // Check if directory has a README.md
      const readmePath = path.join(fullPath, 'README.md');
      let title = nameToTitle(entry.name);
      let order = 999;
      let description: string | undefined;

      if (fs.existsSync(readmePath)) {
        const readmeContent = fs.readFileSync(readmePath, 'utf-8');
        const { data } = matter(readmeContent);
        title = data.title || title;
        order = data.order ?? 0;
        description = data.description;
      }

      nodes.push({
        title,
        slug: relativePath.replace(/\\/g, '/'),
        path: relativePath.replace(/\\/g, '/'),
        order,
        description,
        children,
        isDirectory: true,
      });
    } else if (entry.name.match(/\.(md|mdx)$/i) && entry.name !== 'README.md') {
      // Handle markdown files (excluding README.md)
      const fileContent = fs.readFileSync(fullPath, 'utf-8');
      const { data } = matter(fileContent);

      const slug = relativePath
        .replace(/\\/g, '/')
        .replace(/\.(md|mdx)$/i, '');

      nodes.push({
        title: data.title || nameToTitle(entry.name),
        slug,
        path: relativePath.replace(/\\/g, '/'),
        order: data.order ?? 999,
        description: data.description,
        isDirectory: false,
      });
    }
  }

  // Sort nodes by order, then by title
  return nodes.sort((a, b) => {
    if (a.order !== b.order) {
      return a.order - b.order;
    }
    return a.title.localeCompare(b.title);
  });
}

/**
 * Flattens the content tree into an array of all pages
 */
export function flattenContentTree(tree: ContentNode[]): ContentNode[] {
  const flattened: ContentNode[] = [];

  function traverse(nodes: ContentNode[]) {
    for (const node of nodes) {
      flattened.push(node);
      if (node.children) {
        traverse(node.children);
      }
    }
  }

  traverse(tree);
  return flattened;
}

/**
 * Gets all possible paths for static generation
 */
export function getAllContentPaths(): string[][] {
  const tree = buildContentTree();
  const flattened = flattenContentTree(tree);

  return flattened
    .filter(node => !node.isDirectory || node.path.endsWith('README.md'))
    .map(node => {
      // Convert path to slug array
      const slug = node.slug.replace(/\/README$/i, '');
      return slug ? slug.split('/') : [];
    });
}

/**
 * Finds a node in the tree by its slug
 */
export function findNodeBySlug(tree: ContentNode[], slug: string): ContentNode | null {
  for (const node of tree) {
    if (node.slug === slug) {
      return node;
    }
    if (node.children) {
      const found = findNodeBySlug(node.children, slug);
      if (found) return found;
    }
  }
  return null;
}
