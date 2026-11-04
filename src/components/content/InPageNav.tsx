"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type TocItem = { id: string; label: string };

type InPageNavProps = {
  items: TocItem[];
  title?: string;
  className?: string;
};

/**
 * Sticky section navigator. Uses existing heading ids from content modules.
 */
export function InPageNav({
  items,
  title = "On this page",
  className,
}: InPageNavProps) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (!items.length) return;
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <nav
      aria-label="Page sections"
      className={cn(
        "rounded-2xl border border-border bg-card/90 p-4 shadow-sm backdrop-blur-sm",
        className
      )}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block rounded-lg px-2.5 py-1.5 text-sm transition-colors",
                active === item.id
                  ? "bg-primary/10 font-medium text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
