import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type HighlightCard = {
  title: string;
  body: string;
  icon?: LucideIcon;
};

export function HighlightCards({
  items,
  className,
}: {
  items: HighlightCard[];
  className?: string;
}) {
  if (!items.length) return null;
  return (
    <ul
      className={cn(
        "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li
            key={item.title}
            className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
          >
            {Icon ? (
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
            ) : null}
            <h3 className="font-semibold text-foreground">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {item.body}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
