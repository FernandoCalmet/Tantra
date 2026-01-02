"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Fragment } from "react";

interface BreadcrumbsProps {
  slug: string[];
}

export function Breadcrumbs({ slug }: BreadcrumbsProps) {
  if (!slug || slug.length === 0) {
    return null;
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...slug.map((segment, index) => ({
      label: segment
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase()),
      href: `/${slug.slice(0, index + 1).join("/")}`,
    })),
  ];

  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
      <Link
        href="/"
        className="hover:text-foreground transition-colors flex items-center gap-1.5 group"
      >
        <Home className="h-4 w-4 group-hover:scale-110 transition-transform" />
        <span className="sr-only">Home</span>
      </Link>

      {slug.map((segment, index) => {
        const href = `/${slug.slice(0, index + 1).join("/")}`;
        const label = segment
          .replace(/[-_]/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());
        const isLast = index === slug.length - 1;

        return (
          <Fragment key={href}>
            <ChevronRight className="h-4 w-4 shrink-0" />
            {isLast ? (
              <span className="font-medium text-foreground">{label}</span>
            ) : (
              <Link
                href={href}
                className="hover:text-foreground transition-colors hover:underline"
              >
                {label}
              </Link>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
