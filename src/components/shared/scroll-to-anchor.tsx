"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function ScrollToAnchor() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // We wrap this in a timeout to ensure the page is fully rendered 
    // before we try to scroll.
    const timeout = setTimeout(() => {
      if (window.location.hash) {
        const id = window.location.hash.replace("#", "");
        const element = document.getElementById(id);
        
        if (element) {
          element.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
          });
        }
      }
    }, 100); // 100ms delay is usually enough

    return () => clearTimeout(timeout);
  }, [pathname, searchParams]); // Re-run if path changes

  return null;
}