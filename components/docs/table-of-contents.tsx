"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0% -80% 0%" }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length === 0) {
    return null;
  }

  // Only show H2 and H3 headings
  const visibleHeadings = headings.filter((h) => h.level >= 2 && h.level <= 3);

  if (visibleHeadings.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      <p className="font-semibold text-sm text-foreground mb-4">On this page</p>
      <nav>
        <ul className="space-y-2">
          {visibleHeadings.map((heading) => (
            <li
              key={heading.id}
              className={cn(
                heading.level === 3 && "ml-4"
              )}
            >
              <a
                href={`#${heading.id}`}
                className={cn(
                  "text-sm transition-colors hover:text-foreground block py-1 border-l-2 pl-3",
                  activeId === heading.id
                    ? "border-primary text-primary font-medium"
                    : "border-transparent text-muted-foreground hover:border-muted-foreground"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
