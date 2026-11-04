"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { LEGACY_HASH_REDIRECTS } from "@/content/legacyHashRedirects";

/**
 * Client island: legacy /products#... bookmarks → dedicated URLs.
 */
export function LegacyHashRedirect() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/products") return;
    const hash = window.location.hash;
    if (!hash) return;
    const dest = LEGACY_HASH_REDIRECTS[hash];
    if (dest) window.location.replace(dest);
  }, [pathname]);

  return null;
}
