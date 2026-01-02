"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronRight, FileText, Folder, FolderOpen } from "lucide-react";
import type { ContentNode } from "@/lib/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface SidebarProps {
  contentTree: ContentNode[];
}

export function Sidebar({ contentTree }: SidebarProps) {
  return (
    <aside className="hidden lg:flex w-72 border-r border-border bg-background flex-col sticky top-0 h-screen">
      <div className="p-6 border-b border-border">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-md">
            <span className="text-xl font-bold text-primary transition-all duration-300 group-hover:scale-110">T</span>
          </div>
          <div>
            <h2 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">Tantra Docs</h2>
            <p className="text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">Game Development</p>
          </div>
        </Link>
      </div>

      <ScrollArea className="flex-1">
        <nav className="p-4" aria-label="Documentation navigation">
          <SidebarTree nodes={contentTree} level={0} />
        </nav>
      </ScrollArea>
    </aside>
  );
}

interface SidebarTreeProps {
  nodes: ContentNode[];
  level: number;
}

function SidebarTree({ nodes, level }: SidebarTreeProps) {
  return (
    <ul className={cn("space-y-1", level > 0 && "ml-4 mt-1")}>
      {nodes.map((node) => (
        <SidebarNode key={node.slug} node={node} level={level} />
      ))}
    </ul>
  );
}

interface SidebarNodeProps {
  node: ContentNode;
  level: number;
}

function SidebarNode({ node, level }: SidebarNodeProps) {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  const isActive = pathname === `/${node.slug}` || pathname.startsWith(`/${node.slug}/`);

  const hasChildren = node.children && node.children.length > 0;

  if (node.isDirectory && hasChildren) {
    return (
      <li>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-label={`${isExpanded ? "Collapse" : "Expand"} ${node.title} section`}
          className={cn(
            "w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group",
            "hover:bg-accent hover:text-accent-foreground hover:shadow-sm hover:translate-x-0.5",
            isActive && "bg-accent text-accent-foreground font-medium"
          )}
        >
          {isExpanded ? (
            <FolderOpen className="w-4 h-4 shrink-0 text-primary transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
          ) : (
            <Folder className="w-4 h-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover:text-primary group-hover:scale-110" aria-hidden="true" />
          )}
          <span className="flex-1 text-left truncate">{node.title}</span>
          <ChevronRight
            className={cn(
              "w-4 h-4 shrink-0 transition-all duration-200 text-muted-foreground group-hover:text-primary",
              isExpanded && "rotate-90"
            )}
            aria-hidden="true"
          />
        </button>

        {isExpanded && node.children && <SidebarTree nodes={node.children} level={level + 1} />}
      </li>
    );
  }

  return (
    <li>
      <Link
        href={`/${node.slug}`}
        aria-current={isActive ? "page" : undefined}
        className={cn(
          "flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group/item",
          "hover:bg-accent hover:text-accent-foreground hover:translate-x-1 hover:shadow-sm",
          isActive
            ? "bg-primary/10 text-primary font-medium border-l-2 border-primary shadow-sm"
            : "text-foreground border-l-2 border-transparent hover:border-primary/20"
        )}
      >
        <FileText
          className={cn(
            "w-4 h-4 shrink-0 transition-all duration-200 group-hover/item:scale-110",
            isActive ? "text-primary" : "text-muted-foreground group-hover/item:text-primary"
          )}
          aria-hidden="true"
        />
        <span className="flex-1 truncate transition-all duration-200">{node.title}</span>
      </Link>
    </li>
  );
}
