"use client";

import {
  installationSteps,
  type InstallationStep,
} from "@/content/installationSteps";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  ClipboardCheck,
  Package,
  Truck,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type WorkProcessGridProps = {
  steps?: InstallationStep[];
  className?: string;
};

type Stage = {
  id: string;
  label: string;
  subtitle: string;
  icon: LucideIcon;
  steps: InstallationStep[];
};

function buildStages(steps: InstallationStep[]): Stage[] {
  const pick = (...ids: string[]) =>
    ids
      .map((id) => steps.find((s) => s.id === id))
      .filter(Boolean) as InstallationStep[];

  return [
    {
      id: "s1",
      label: "Stage 1",
      subtitle: "Kickoff & first fit",
      icon: Package,
      steps: pick("stage-1-material", "stage-1-execution"),
    },
    {
      id: "s2",
      label: "Stage 2",
      subtitle: "Core installation",
      icon: Wrench,
      steps: pick("stage-2-material", "stage-2-execution"),
    },
    {
      id: "s3",
      label: "Stage 3",
      subtitle: "Finish & systems",
      icon: Truck,
      steps: pick("stage-3-material", "stage-3-execution"),
    },
    {
      id: "s4",
      label: "Close-out",
      subtitle: "QC & handover",
      icon: ClipboardCheck,
      steps: pick("qc-trial", "handover"),
    },
  ].filter((s) => s.steps.length > 0);
}

/**
 * Stage-based work process  -  scannable cards, full copy visible, no scroll gimmicks.
 */
export function WorkProcessGrid({
  steps = installationSteps,
  className,
}: WorkProcessGridProps) {
  const stages = buildStages(steps);
  let globalIndex = 0;

  return (
    <div className={cn("mt-10", className)}>
      {/* Desktop flow line under stage headers */}
      <div className="relative">
        <div
          className="pointer-events-none absolute left-[12%] right-[12%] top-[2.75rem] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          aria-hidden
        />

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, stageIdx) => {
            const Icon = stage.icon;
            return (
              <li key={stage.id} className="relative flex flex-col">
                {/* Stage node */}
                <div className="mb-4 flex flex-col items-center text-center lg:mb-5">
                  <div className="relative z-[1] flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card shadow-md ring-4 ring-background transition-transform duration-300 hover:scale-105">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/25">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                    {stage.label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground">
                    {stage.subtitle}
                  </p>
                </div>

                {/* Sub-steps */}
                <div className="flex flex-1 flex-col gap-3 rounded-3xl border border-border bg-card/80 p-3 shadow-sm backdrop-blur-sm">
                  {stage.steps.map((step) => {
                    globalIndex += 1;
                    const n = globalIndex;
                    const shortTitle = step.title
                      .replace(/^Stage \d+: /, "")
                      .replace(/^Final /, "");

                    return (
                      <article
                        key={step.id}
                        className={cn(
                          "group relative flex flex-1 flex-col rounded-2xl border border-transparent bg-background p-4",
                          "transition-all duration-300",
                          "hover:border-primary/25 hover:shadow-md hover:shadow-primary/5"
                        )}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-[11px] font-extrabold text-primary">
                            {String(n).padStart(2, "0")}
                          </span>
                          {step.duration ? (
                            <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold tabular-nums text-muted-foreground">
                              {step.duration}
                            </span>
                          ) : null}
                        </div>
                        <h4 className="mt-2.5 text-sm font-bold leading-snug text-foreground">
                          {shortTitle}
                        </h4>
                        <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </article>
                    );
                  })}
                </div>

                {/* Mobile connector between stages */}
                {stageIdx < stages.length - 1 ? (
                  <div
                    className="mx-auto my-1 flex h-6 w-px bg-border sm:hidden"
                    aria-hidden
                  />
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>

      {/* Footer note */}
      <p className="mt-6 flex items-start gap-2 text-center text-xs text-muted-foreground sm:justify-center sm:text-sm">
        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
        <span>
          Timelines are in working days and depend on stage payments and site
          clearance. Final schedule is confirmed after survey.
        </span>
      </p>
    </div>
  );
}
