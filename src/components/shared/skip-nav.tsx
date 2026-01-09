"use client";

import { Button } from "@/components/ui/button";

export function SkipNav() {
  const handleSkip = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Stop Next.js from trying to "route"
    
    const target = document.getElementById("main-content");
    if (target) {
      // 1. Scroll to the element
      target.scrollIntoView({ behavior: "smooth" });
      
      // 2. Move Focus to the element (Crucial for A11y)
      target.focus();
    }
  };

  return (
    <Button
      asChild
      className="fixed left-4 top-4 z-[100] -translate-y-[150%] transition-transform focus:translate-y-0"
    >
      <a href="#main-content" onClick={handleSkip}>
        Skip to content
      </a>
    </Button>
  );
}