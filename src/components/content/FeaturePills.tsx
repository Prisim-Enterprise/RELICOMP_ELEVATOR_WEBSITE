"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { SpecRow } from "@/content/types";

type FeaturePillsProps = {
  specs: SpecRow[];
  max?: number;
};

export function FeaturePills({ specs, max = 6 }: FeaturePillsProps) {
  const [open, setOpen] = useState<number | null>(0);
  const items = specs.slice(0, max);
  if (!items.length) return null;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {items.map((spec, i) => (
          <button
            key={spec.label}
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-semibold transition-all sm:text-sm",
              open === i
                ? "border-primary bg-primary text-primary-foreground shadow-sm"
                : "border-border bg-background/80 text-foreground hover:border-primary/50"
            )}
          >
            {spec.label}
          </button>
        ))}
      </div>
      {open !== null && items[open] ? (
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed animate-in fade-in-0">
          <p className="font-semibold text-primary">{items[open].label}</p>
          <p className="mt-1 text-foreground/90">{items[open].value}</p>
        </div>
      ) : null}
    </div>
  );
}
