"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { FileText, Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import type { ContentNode } from "@/lib/types";

interface CommandPaletteProps {
  contentTree: ContentNode[];
}

/**
 * Flattens the content tree into an array of all pages
 */
function flattenContentTree(tree: ContentNode[]): ContentNode[] {
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

export function CommandPalette({ contentTree }: CommandPaletteProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [pages, setPages] = React.useState<ContentNode[]>([]);

  React.useEffect(() => {
    const flattened = flattenContentTree(contentTree);
    setPages(flattened);
  }, [contentTree]);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="hidden sm:flex gap-2 h-9 px-3 min-w-[200px] justify-start text-muted-foreground border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        <Search className="h-4 w-4" />
        <span className="text-sm">Search...</span>
        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {/* Mobile trigger */}
      <button
        onClick={() => setOpen(true)}
        className="sm:hidden p-2 hover:bg-accent rounded-lg transition-colors"
      >
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </button>

      {/* Command Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {pages.map((page) => (
              <CommandItem
                key={page.slug}
                value={`${page.title} ${page.description || ""}`}
                onSelect={() => {
                  runCommand(() => router.push(`/${page.slug}`));
                }}
                className="cursor-pointer"
              >
                <FileText className="mr-2 h-4 w-4" />
                <div className="flex flex-col">
                  <span>{page.title}</span>
                  {page.description && (
                    <span className="text-xs text-muted-foreground">
                      {page.description}
                    </span>
                  )}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
