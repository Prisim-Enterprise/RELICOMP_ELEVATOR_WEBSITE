"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import type { InstallationStep } from "@/content/installationSteps";
import { trackEvent } from "@/lib/analytics";

type ServiceProcessStepperProps = {
  steps: InstallationStep[];
  title?: string;
  slug?: string;
};

function scrollTabIntoView(
  scroller: HTMLElement,
  item: HTMLElement
) {
  const scrollerRect = scroller.getBoundingClientRect();
  const itemRect = item.getBoundingClientRect();
  const overflowX = scroller.scrollWidth > scroller.clientWidth + 1;
  const overflowY = scroller.scrollHeight > scroller.clientHeight + 1;

  if (overflowX) {
    const left =
      scroller.scrollLeft +
      (itemRect.left - scrollerRect.left) -
      (scroller.clientWidth - item.offsetWidth) / 2;
    scroller.scrollTo({ left, behavior: "smooth" });
  }

  if (overflowY) {
    const top =
      scroller.scrollTop +
      (itemRect.top - scrollerRect.top) -
      (scroller.clientHeight - item.offsetHeight) / 2;
    scroller.scrollTo({ top, behavior: "smooth" });
  }
}

export function ServiceProcessStepper({
  steps,
  title = "How it works",
  slug = "",
}: ServiceProcessStepperProps) {
  const [active, setActive] = useState(0);
  const scrollerRef = useRef<HTMLOListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const item = itemRefs.current[active];
    if (!scroller || !item) return;
    scrollTabIntoView(scroller, item);
  }, [active]);

  if (!steps.length) return null;
  const current = steps[active];

  return (
    <section className="my-10" aria-labelledby="process-stepper-heading">
      <h2
        id="process-stepper-heading"
        className="mb-6 text-2xl font-bold tracking-tight"
      >
        {title}
      </h2>

      <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
        <ol
          ref={scrollerRef}
          className="flex gap-2 overflow-x-auto scroll-smooth pb-1 [-webkit-overflow-scrolling:touch] lg:flex-col lg:overflow-visible lg:pb-0"
        >
          {steps.map((step, i) => (
            <li
              key={step.id}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="shrink-0 lg:shrink"
            >
              <button
                type="button"
                aria-current={active === i ? "step" : undefined}
                onClick={() => {
                  setActive(i);
                  trackEvent("service_step_select", {
                    slug,
                    step: step.id,
                  });
                }}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left transition-all",
                  active === i
                    ? "border-primary bg-primary text-primary-foreground shadow-md"
                    : "border-border bg-card hover:border-primary/40 hover:bg-muted/50"
                )}
              >
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                    active === i
                      ? "bg-white/20 text-white"
                      : "bg-primary/10 text-primary"
                  )}
                >
                  {i + 1}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold leading-tight">
                    {step.title}
                  </span>
                  {step.duration ? (
                    <span
                      className={cn(
                        "mt-0.5 block text-xs",
                        active === i ? "text-white/80" : "text-muted-foreground"
                      )}
                    >
                      {step.duration}
                    </span>
                  ) : null}
                </span>
              </button>
            </li>
          ))}
        </ol>

        <div className="rounded-2xl border border-border bg-gradient-to-br from-card to-muted/40 p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            Step {active + 1} of {steps.length}
            <ChevronRight className="h-4 w-4" />
          </div>
          <h3 className="mt-2 text-xl font-bold sm:text-2xl">{current.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {current.description}
          </p>
          {current.duration ? (
            <p className="mt-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Typical duration: {current.duration}
            </p>
          ) : null}
          <div className="mt-6 flex gap-2">
            <button
              type="button"
              disabled={active === 0}
              onClick={() => setActive((a) => Math.max(0, a - 1))}
              className="rounded-full border border-border px-4 py-2 text-sm font-medium disabled:opacity-40"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={active === steps.length - 1}
              onClick={() =>
                setActive((a) => Math.min(steps.length - 1, a + 1))
              }
              className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-40"
            >
              Next step
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
