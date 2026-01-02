"use client";

import Link from "next/link";
import { Github, Menu, ChevronRight, FileText, Folder, FolderOpen } from "lucide-react";
import type { ContentNode } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/theme-toggle";
import { CommandPalette } from "@/components/docs/command-palette";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface TopNavbarProps {
  contentTree: ContentNode[];
}

export function TopNavbar({ contentTree }: TopNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Left: Mobile menu + Logo */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0">
              <div className="p-6 border-b border-border">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">T</span>
                  </div>
                  <div>
                    <h2 className="font-semibold text-foreground">Tantra Docs</h2>
                    <p className="text-xs text-muted-foreground">Game Development</p>
                  </div>
                </Link>
              </div>
              <ScrollArea className="h-[calc(100vh-5rem)]">
                <nav className="p-4" aria-label="Mobile documentation navigation">
                  <MobileSidebarTree
                    nodes={contentTree}
                    level={0}
                    onNavigate={() => setMobileMenuOpen(false)}
                  />
                </nav>
              </ScrollArea>
            </SheetContent>
          </Sheet>

          {/* Logo - visible on mobile */}
          <Link href="/" className="flex lg:hidden items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">T</span>
            </div>
          </Link>

          {/* Section tabs - visible on desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {contentTree.map((node) => (
              <Link key={node.slug} href={`/${node.slug}`}>
                <Button variant="ghost" size="sm" className="text-sm">
                  {node.title}
                </Button>
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Search + Theme + GitHub */}
        <div className="flex items-center gap-2">
          {/* Command Palette Search */}
          <CommandPalette contentTree={contentTree} />

          {/* Theme toggle */}
          <ThemeToggle />

          {/* GitHub link */}
          <Link
            href="https://github.com/FernandoCalmet/Tantra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="hover:bg-accent transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

interface MobileSidebarTreeProps {
  nodes: ContentNode[];
  level: number;
  onNavigate: () => void;
}

function MobileSidebarTree({ nodes, level, onNavigate }: MobileSidebarTreeProps) {
  return (
    <ul className={cn("space-y-1", level > 0 && "ml-4 mt-1")}>
      {nodes.map((node) => (
        <MobileSidebarNode
          key={node.slug}
          node={node}
          level={level}
          onNavigate={onNavigate}
        />
      ))}
    </ul>
  );
}

interface MobileSidebarNodeProps {
  node: ContentNode;
  level: number;
  onNavigate: () => void;
}

function MobileSidebarNode({ node, level, onNavigate }: MobileSidebarNodeProps) {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(true);

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
            "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors",
            "hover:bg-accent hover:text-accent-foreground",
            isActive && "bg-accent text-accent-foreground font-medium"
          )}
        >
          {isExpanded ? (
            <FolderOpen className="w-4 h-4 shrink-0 text-primary" aria-hidden="true" />
          ) : (
            <Folder className="w-4 h-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          )}
          <span className="flex-1 text-left truncate">{node.title}</span>
          <ChevronRight
            className={cn(
              "w-4 h-4 shrink-0 transition-transform text-muted-foreground",
              isExpanded && "rotate-90"
            )}
            aria-hidden="true"
          />
        </button>

        {isExpanded && node.children && (
          <MobileSidebarTree
            nodes={node.children}
            level={level + 1}
            onNavigate={onNavigate}
          />
        )}
      </li>
    );
  }

  return (
    <li>
      <Link
        href={`/${node.slug}`}
        onClick={onNavigate}
        aria-current={isActive ? "page" : undefined}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all group/item",
          "hover:bg-accent hover:text-accent-foreground",
          isActive
            ? "bg-primary/10 text-primary font-medium border-l-2 border-primary shadow-sm"
            : "text-foreground border-l-2 border-transparent"
        )}
      >
        <FileText
          className={cn(
            "w-4 h-4 shrink-0 transition-colors",
            isActive ? "text-primary" : "text-muted-foreground group-hover/item:text-primary"
          )}
          aria-hidden="true"
        />
        <span className="flex-1 truncate">{node.title}</span>
      </Link>
    </li>
  );
}
