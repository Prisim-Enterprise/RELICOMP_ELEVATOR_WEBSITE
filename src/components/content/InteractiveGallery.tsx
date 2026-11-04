"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type GallerySlide = {
  id: string;
  label: string;
  src?: StaticImageData | string | null;
  alt?: string;
};

type InteractiveGalleryProps = {
  slides: GallerySlide[];
  className?: string;
};

export function InteractiveGallery({ slides, className }: InteractiveGalleryProps) {
  const [active, setActive] = useState(0);
  const current = slides[active] ?? slides[0];

  if (!slides.length) return null;

  return (
    <div className={cn("w-full min-w-0 space-y-4", className)}>
      <div className="relative aspect-video w-full max-w-full overflow-hidden rounded-2xl border border-border/80 bg-card shadow-md">
        {current?.src ? (
          <Image
            src={current.src}
            alt={current.alt ?? current.label}
            fill
            className="object-contain transition-opacity duration-300"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={active === 0}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-muted/90 via-muted/50 to-background px-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border/70 bg-background/80 shadow-sm">
              <ImageIcon className="h-7 w-7 text-muted-foreground/70" />
            </div>
            <p className="text-sm font-semibold text-foreground/80">
              {current?.label ?? "Photo"}
            </p>
            <p className="text-xs text-muted-foreground">Photo coming soon</p>
          </div>
        )}
        <div className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] truncate rounded-full bg-foreground/80 px-3 py-1 text-xs font-medium text-background shadow-sm backdrop-blur-sm">
          {active + 1} / {slides.length} · {current?.label}
        </div>
      </div>

      {/* Segment strip  -  clearer than tiny bordered thumbs on light UIs */}
      <div
        role="tablist"
        aria-label="Gallery views"
        className="flex max-w-full gap-2 overflow-x-auto overscroll-x-contain pb-0.5 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, i) => {
          const isActive = active === i;
          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Show ${slide.label}`}
              onClick={() => setActive(i)}
              className={cn(
                "group flex min-w-[5.25rem] max-w-[7.5rem] shrink-0 flex-col overflow-hidden rounded-xl text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:min-w-[6rem]",
                isActive
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <div
                className={cn(
                  "relative h-12 w-full sm:h-14",
                  isActive ? "bg-primary-foreground/10" : "bg-background/60"
                )}
              >
                {slide.src ? (
                  <Image
                    // Descriptive alt for image search: only the active slide is
                    // rendered at full size, so the other slides appear in the
                    // initial HTML solely as these thumbnails. The parent button
                    // carries aria-label, which overrides descendant text for
                    // screen readers, so this does not double-announce.
                    src={slide.src}
                    alt={slide.alt ?? slide.label}
                    fill
                    className={cn(
                      "object-cover transition-opacity",
                      isActive ? "opacity-100" : "opacity-90 group-hover:opacity-100"
                    )}
                    sizes="96px"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center">
                    <ImageIcon
                      className={cn(
                        "h-4 w-4 sm:h-5 sm:w-5",
                        isActive
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground/60"
                      )}
                    />
                  </span>
                )}
                <span
                  className={cn(
                    "absolute left-1.5 top-1.5 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-[10px] font-bold tabular-nums",
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-background/90 text-muted-foreground shadow-sm"
                  )}
                >
                  {i + 1}
                </span>
              </div>
              <span
                className={cn(
                  "truncate px-2 py-1.5 text-[11px] font-semibold leading-tight sm:text-xs",
                  isActive ? "text-primary-foreground" : "text-foreground/70"
                )}
              >
                {slide.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
