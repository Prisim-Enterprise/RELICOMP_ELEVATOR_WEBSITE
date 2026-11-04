"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Factory, RefreshCw, Settings, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { isPublished } from "@/content/publish";
import { PublishAwareLink } from "@/components/content/PublishAwareLink";

export type ServiceHubItem = {
  slug: string;
  href: string;
  title: string;
  keyword: string;
  intro: string;
};

const icons = {
  "elevator-installation": Settings,
  "lift-amc-maintenance": Wrench,
  "lift-modernization": RefreshCw,
  "custom-elevator-manufacturing": Factory,
} as const;

type ServiceHubCardsProps = {
  services: ServiceHubItem[];
};

export function ServiceHubCards({ services }: ServiceHubCardsProps) {
  const [active, setActive] = useState(services[0]?.slug ?? "");

  const current =
    services.find((s) => s.slug === active) ?? services[0] ?? null;

  if (!services.length) return null;

  const currentLive = current ? isPublished(current.href) : false;

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
        {services.map((service) => {
          const Icon =
            icons[service.slug as keyof typeof icons] ?? Wrench;
          const isActive = service.slug === active;
          const live = isPublished(service.href);
          return (
            <button
              key={service.slug}
              type="button"
              onClick={() => {
                setActive(service.slug);
                trackEvent("service_hub_select", { slug: service.slug });
              }}
              className={cn(
                "flex min-w-[200px] items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all lg:min-w-0",
                isActive
                  ? "border-primary bg-primary text-primary-foreground shadow-lg"
                  : "border-border bg-card hover:border-primary/40",
                !live && "opacity-80"
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className="text-sm font-bold leading-snug">
                {service.title}
                {!live ? (
                  <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-wide opacity-80">
                    Coming soon
                  </span>
                ) : null}
              </span>
            </button>
          );
        })}
      </div>

      {current ? (
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-charcoal via-secondary to-black p-6 text-white shadow-xl sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.4),transparent_50%)]" />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {currentLive ? current.keyword : "Coming soon"}
            </p>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-4xl">
              {current.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
              {current.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PublishAwareLink
                href={current.href}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-lg transition hover:bg-primary/90"
              >
                {currentLive ? "Open service page" : "Coming soon"}
                {currentLive ? <ArrowRight className="h-4 w-4" /> : null}
              </PublishAwareLink>
              <Link
                href={`/contact?topic=${encodeURIComponent(current.slug)}`}
                className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Request quote
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
