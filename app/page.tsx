import { getMarkdownContent } from "@/lib/markdown";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

export default async function Home() {
  const page = await getMarkdownContent([]);

  if (!page) {
    return (
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1>Welcome to Tantra Online Documentation</h1>
        <p>Get started by adding content to the <code>/content</code> directory.</p>
      </div>
    );
  }

  return (
    <article className="prose prose-gray dark:prose-invert max-w-none">
      <MDXRemote
        source={page.content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                {
                  behavior: "wrap",
                  properties: {
                    className: ["heading-anchor"],
                  },
                },
              ],
            ],
          },
        }}
      />
    </article>
  );
}
