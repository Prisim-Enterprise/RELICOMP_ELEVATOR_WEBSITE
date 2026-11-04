"use client";

import Timeline from "@/components/Timeline";
import {
  installationSteps,
  type InstallationStep,
} from "@/content/installationSteps";

type ProcessTimelineProps = {
  stepIds?: string[];
  title?: string;
  steps?: InstallationStep[];
};

/**
 * Client island wrapping existing Timeline animation.
 * Defaults to the shared staged work process (material, execution, QC, handover).
 */
export function ProcessTimeline({
  stepIds,
  title = "Our work process",
  steps,
}: ProcessTimelineProps) {
  const source = steps ?? installationSteps;
  const filtered =
    stepIds?.length > 0
      ? source.filter((s) => stepIds.includes(s.id))
      : source;

  const items = filtered.map(({ title: t, description, duration }) => ({
    title: t,
    description,
    duration,
  }));

  if (!items.length) return null;

  return (
    <section className="my-10" aria-labelledby="process-timeline-heading">
      <h2
        id="process-timeline-heading"
        className="text-2xl font-semibold mb-8 text-center"
      >
        {title}
      </h2>
      <div className="max-w-5xl mx-auto">
        <Timeline items={items} />
      </div>
    </section>
  );
}
