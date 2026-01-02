"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      
      // Check if there's scrollable content
      setHasScroll(scrollHeight > 0);
      
      if (scrollHeight > 0) {
        const progress = (scrolled / scrollHeight) * 100;
        setProgress(Math.min(progress, 100));
      }
    };

    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  // Don't render if there's no scrollable content
  if (!hasScroll) {
    return null;
  }

  return (
    <div className="fixed top-16 left-0 right-0 h-1 bg-border/50 z-50">
      <div
        className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
