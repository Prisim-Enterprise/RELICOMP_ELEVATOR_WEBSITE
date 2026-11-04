"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export type PageHeroTexture = "grid" | "dots" | "diagonal" | "noise";

const TEXTURES: PageHeroTexture[] = ["grid", "dots", "diagonal", "noise"];

type PageHeroProps = {
  children: React.ReactNode;
  className?: string;
  /** Extra classes for the inner container (padding, max-width). */
  innerClassName?: string;
  /**
   * Force a texture. When omitted, one of 4 textures is picked from the path
   * so each route stays stable but variety appears across the site.
   */
  texture?: PageHeroTexture;
  /**
   * Fill the first screen (100svh). Content is vertically centered within the
   * hero; if content is taller than the viewport, the hero grows (min-height).
   */
  fillViewport?: boolean;
};

function hashPath(path: string): number {
  let h = 0;
  for (let i = 0; i < path.length; i++) {
    h = (h * 31 + path.charCodeAt(i)) >>> 0;
  }
  return h;
}

function textureFromPath(pathname: string | null): PageHeroTexture {
  const key = pathname || "/";
  // Prefer section root so /products/* shares one texture family, still varied
  const section = key.split("/").filter(Boolean)[0] ?? "home";
  return TEXTURES[hashPath(section) % TEXTURES.length];
}

const textureClass: Record<PageHeroTexture, string> = {
  grid: "page-hero-texture-grid",
  dots: "page-hero-texture-dots",
  diagonal: "page-hero-texture-diagonal",
  noise: "page-hero-texture-noise",
};

const textureOpacity: Record<PageHeroTexture, string> = {
  grid: "opacity-50",
  dots: "opacity-45",
  diagonal: "opacity-55",
  noise: "opacity-40",
};

/** Shared dark commercial hero  -  used sitewide for consistent branding. */
export function PageHero({
  children,
  className,
  innerClassName,
  texture: textureProp,
  fillViewport = false,
}: PageHeroProps) {
  const pathname = usePathname();
  const texture = textureProp ?? textureFromPath(pathname);

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-[hsl(215_28%_12%)] via-[hsl(220_22%_15%)] to-[hsl(0_35%_16%)] pt-24 text-white",
        fillViewport && "flex min-h-[100svh] flex-col",
        className
      )}
      data-hero-texture={texture}
    >
      {/* Brand glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.45),transparent_45%),linear-gradient(180deg,transparent,rgba(0,0,0,0.25))]"
        aria-hidden
      />
      {/* Procedural texture layer (one of 4) */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          textureOpacity[texture],
          textureClass[texture]
        )}
        aria-hidden
      />
      {/* Soft vignette so type stays readable */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.35)_100%)]"
        aria-hidden
      />

      <div
        className={cn(
          "container relative z-10 mx-auto max-w-6xl px-4 pb-12 pt-6",
          fillViewport && "flex flex-1 flex-col justify-center",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

/** Breadcrumb styles for dark heroes (white text). */
export const pageHeroBreadcrumbClass =
  "mb-6 max-w-full overflow-hidden sm:mb-8 [&_a]:text-white/70 [&_span]:text-white/90 [&_svg]:text-white/40 [&_ol]:flex-wrap";

/** Outline button styles for dark heroes  -  use with variant="heroOutline". */
export const pageHeroOutlineButtonClass = "rounded-full";

/** Glass card on dark heroes (stats, contact chips, placeholders). */
export const pageHeroGlassClass =
  "rounded-2xl border border-white/15 bg-white/5 shadow-sm backdrop-blur-sm";
