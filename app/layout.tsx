import type { Metadata } from "next";
import "./globals.css";
import { TopNavbar } from "@/components/docs/top-navbar";
import { Sidebar } from "@/components/docs/sidebar";
import { ScrollProgress } from "@/components/docs/scroll-progress";
import { buildContentTree } from "@/lib/content-tree";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Tantra Online Documentation",
  description: "Complete guide for Tantra Online game development and server management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contentTree = buildContentTree();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Skip to content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg"
          >
            Skip to main content
          </a>

          <div className="relative flex min-h-screen">
            {/* Sidebar - Hidden on mobile, shown on desktop */}
            <Sidebar contentTree={contentTree} />

            {/* Main content area */}
            <div className="flex-1 flex flex-col">
              {/* Top Navbar */}
              <TopNavbar contentTree={contentTree} />

              {/* Scroll Progress */}
              <ScrollProgress />

              {/* Page content */}
              <main id="main-content" className="flex-1 overflow-y-auto" role="main">
                <div className="container max-w-screen-2xl mx-auto px-4 py-8 lg:px-8">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
