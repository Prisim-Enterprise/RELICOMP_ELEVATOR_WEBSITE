"use client";

import * as React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  getInitials,
  googleReviewsUrl,
  testimonials as defaultTestimonials,
  testimonialStats,
  type Testimonial,
} from "@/content/testimonials";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BadgeCheck,
  ExternalLink,
  MapPin,
  Quote,
  Star,
} from "lucide-react";
import { useQuoteModalOptional } from "@/components/quote/QuoteModalContext";

type TestimonialsSectionProps = {
  title?: string;
  subtitle?: string;
  items?: Testimonial[];
  /** Limit cards in the carousel */
  limit?: number;
  ctaHref?: string;
  ctaLabel?: string;
  /** Prefer over ctaHref when the parent needs a custom action (e.g. open quote modal). */
  onCtaClick?: () => void;
  className?: string;
  muted?: boolean;
  /** Auto-advance interval in ms (0 = off) */
  autoplayMs?: number;
  /** Google Business / Maps reviews URL */
  googleUrl?: string;
  showGoogleLink?: boolean;
  /** Hide View on Google / secondary CTA / footer note (e.g. landing pages). */
  hideFooterCtas?: boolean;
};

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-3.5 w-3.5 sm:h-4 sm:w-4",
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted"
          )}
        />
      ))}
    </div>
  );
}

/** Official multicolor Google "G" mark for review attribution. */
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

/** Approx. chars that fit ~5 lines at card width; longer quotes get Read more. */
const READ_MORE_CHAR_THRESHOLD = 165;

function ReviewCard({ t }: { t: Testimonial }) {
  const [expanded, setExpanded] = React.useState(false);
  const showRole = t.role && t.role.toLowerCase() !== "google reviewer";
  const needsReadMore = t.quote.length > READ_MORE_CHAR_THRESHOLD;

  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6",
        /* Fixed collapsed height so all cards match in the carousel row */
        !expanded && "min-h-[320px] sm:min-h-[340px]"
      )}
    >
      <Quote
        className="pointer-events-none absolute -right-1 -top-1 h-14 w-14 text-primary/[0.08]"
        aria-hidden
      />

      <div className="relative flex shrink-0 items-center justify-between gap-2">
        <Stars rating={t.rating} />
        <span
          className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-white shadow-sm"
          title="Google review"
          aria-label="Google review"
        >
          <GoogleIcon className="h-3.5 w-3.5" />
        </span>
      </div>

      <div className="relative mt-3.5 flex min-h-0 flex-1 flex-col">
        <blockquote
          className={cn(
            "text-sm leading-relaxed text-foreground/90 sm:text-[0.95rem] sm:leading-relaxed",
            !expanded && "line-clamp-5"
          )}
        >
          &ldquo;{t.quote}&rdquo;
        </blockquote>

        {needsReadMore ? (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-2 self-start text-sm font-semibold text-primary underline-offset-4 transition-colors hover:underline"
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        ) : (
          /* Reserve space so cards stay equal when some have Read more */
          <span className="mt-2 h-5" aria-hidden />
        )}
      </div>

      <div className="relative mt-auto flex shrink-0 items-center gap-3 border-t border-border/70 pt-4">
        <Avatar className="h-10 w-10 shrink-0 border-2 border-primary/15 shadow-sm sm:h-11 sm:w-11">
          {t.image ? <AvatarImage src={t.image} alt={t.name} /> : null}
          <AvatarFallback className="bg-primary/10 text-xs font-bold text-primary sm:text-sm">
            {getInitials(t.name)}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold sm:text-[0.95rem]">{t.name}</p>
          {showRole ? (
            <p className="truncate text-xs text-muted-foreground">{t.role}</p>
          ) : null}
          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted-foreground">
            {t.location ? (
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3 text-primary" aria-hidden />
                {t.location}
              </span>
            ) : null}
            {t.projectType ? (
              <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">
                {t.projectType}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection({
  title = "What our clients say",
  subtitle = "Real Google reviews from homeowners and project owners who chose Relicomp for design, installation, and service.",
  items = defaultTestimonials,
  limit,
  ctaHref = "/projects",
  ctaLabel = "View projects & more feedback",
  onCtaClick,
  className,
  muted = true,
  autoplayMs = 5500,
  googleUrl = googleReviewsUrl,
  showGoogleLink = true,
  hideFooterCtas = false,
}: TestimonialsSectionProps) {
  const list = limit ? items.slice(0, limit) : items;
  const [api, setApi] = React.useState<CarouselApi>();
  const [selected, setSelected] = React.useState(0);
  const [snapCount, setSnapCount] = React.useState(0);
  const quoteModal = useQuoteModalOptional();

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelected(api.selectedScrollSnap());
      setSnapCount(api.scrollSnapList().length);
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  // Lightweight autoplay without extra dependency
  React.useEffect(() => {
    if (!api || !autoplayMs || autoplayMs <= 0) return;

    const id = window.setInterval(() => {
      if (!api) return;
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, autoplayMs);

    return () => window.clearInterval(id);
  }, [api, autoplayMs]);

  return (
    <section
      className={cn(
        "border-b border-border py-14 sm:py-16 lg:py-20",
        muted ? "bg-muted/40" : "bg-background",
        className
      )}
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Google reviews
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-inner ring-1 ring-border"
                aria-hidden
              >
                <GoogleIcon className="h-5 w-5" />
              </span>
              <div className="text-left">
                <p className="text-sm font-bold leading-none">
                  {testimonialStats.rating}
                  <span className="ml-1.5 text-xs font-medium text-muted-foreground">
                    / 5
                  </span>
                </p>
                <div className="mt-1 flex items-center gap-1">
                  <Stars rating={5} />
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm shadow-sm">
              <BadgeCheck className="h-4 w-4 text-primary" aria-hidden />
              <span className="font-semibold">530+</span>
              <span className="text-muted-foreground">Google reviews</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm shadow-sm">
              <span className="font-semibold">{testimonialStats.installs}</span>
              <span className="text-muted-foreground">installations</span>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative mt-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 items-stretch sm:-ml-4">
              {list.map((t) => (
                <CarouselItem
                  key={t.id}
                  className="basis-[88%] pl-3 sm:basis-1/2 sm:pl-4 lg:basis-1/3"
                >
                  <div className="h-full">
                    <ReviewCard t={t} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-6 flex items-center justify-center gap-3">
              <CarouselPrevious className="static h-10 w-10 translate-y-0 rounded-full border-border bg-card shadow-sm hover:bg-primary hover:text-primary-foreground" />
              <div
                className="flex items-center gap-1.5 px-2"
                role="tablist"
                aria-label="Review slides"
              >
                {Array.from({ length: snapCount }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === selected}
                    aria-label={`Go to review ${i + 1}`}
                    onClick={() => api?.scrollTo(i)}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      i === selected
                        ? "w-6 bg-primary"
                        : "w-2 bg-border hover:bg-muted-foreground/40"
                    )}
                  />
                ))}
              </div>
              <CarouselNext className="static h-10 w-10 translate-y-0 rounded-full border-border bg-card shadow-sm hover:bg-primary hover:text-primary-foreground" />
            </div>
          </Carousel>
        </div>

        {!hideFooterCtas ? (
          <div className="mt-10 flex flex-col items-center gap-3 sm:mt-12">
            <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
              {showGoogleLink && googleUrl ? (
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 shadow-md"
                >
                  <a
                    href={googleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Relicomp Elevators reviews on Google"
                  >
                    <GoogleIcon className="mr-2 h-5 w-5" />
                    View on Google
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              ) : null}
              {onCtaClick ? (
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                  onClick={onCtaClick}
                >
                  {ctaLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : ctaHref ? (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                >
                  <Link href={ctaHref}>
                    {ctaLabel}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : null}
            </div>
            <p className="max-w-md text-center text-xs text-muted-foreground">
              Planning a lift?{" "}
              {quoteModal ? (
                <button
                  type="button"
                  className="font-semibold text-primary hover:underline"
                  onClick={() =>
                    quoteModal.openQuoteModal("testimonials_site_survey")
                  }
                >
                  Request a free site survey
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="font-semibold text-primary hover:underline"
                >
                  Request a free site survey
                </Link>
              )}{" "}
              and hear how we support owners after handover.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default TestimonialsSection;
