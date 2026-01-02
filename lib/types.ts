/**
 * Shared types for the documentation site
 * This file contains only types and can be safely imported in client components
 */

export interface ContentNode {
  title: string;
  slug: string;
  path: string;
  order: number;
  description?: string;
  children?: ContentNode[];
  isDirectory: boolean;
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export interface MarkdownPage {
  frontmatter: {
    title: string;
    description?: string;
    order?: number;
    [key: string]: any;
  };
  content: string;
  slug: string;
  headings: Heading[];
}
