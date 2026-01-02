import { notFound } from "next/navigation";
import { getMarkdownContent } from "@/lib/markdown";
import { getAllContentPaths } from "@/lib/content-tree";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import { Breadcrumbs } from "@/components/docs/breadcrumbs";
import { TableOfContents } from "@/components/docs/table-of-contents";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  const paths = getAllContentPaths();
  return paths.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = await getMarkdownContent(slug);

  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: `${page.frontmatter.title} | Tantra Online Documentation`,
    description: page.frontmatter.description,
  };
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getMarkdownContent(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <div className="flex gap-8">
        {/* Main content */}
        <article className="prose prose-gray dark:prose-invert max-w-none flex-1">
          <Breadcrumbs slug={slug} />

          <div className="mb-8 border-b border-border pb-8">
            <h1 className="mb-2">{page.frontmatter.title}</h1>
            {page.frontmatter.description && (
              <p className="text-lg text-muted-foreground">
                {page.frontmatter.description}
              </p>
            )}
          </div>

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

        {/* Table of Contents */}
        <aside className="hidden xl:block w-64 shrink-0">
          <div className="sticky top-24">
            <TableOfContents headings={page.headings} />
          </div>
        </aside>
      </div>
    </>
  );
}
