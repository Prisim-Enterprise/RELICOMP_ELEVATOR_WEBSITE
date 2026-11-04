/** Shared installation work process: used by ProcessTimeline, products hub, and service pages. */

export type InstallationStep = {
  id: string;
  title: string;
  description: string;
  duration?: string;
};

/**
 * Relicomp commercial work process (material delivery, staged execution, QC, handover).
 * Timelines are working days and are subject to site clearance and stage payments.
 */
export const installationSteps: InstallationStep[] = [
  {
    id: "stage-1-material",
 title: "Stage 1: Material delivery",
    description:
      "Material will be delivered within 15 working days of 1st stage payment received against site clearance.",
    duration: "15 working days",
  },
  {
    id: "stage-1-execution",
 title: "Stage 1: Execution",
    description:
      "Execution will be completed within 20 working days from the 2nd day of material arrival at site.",
    duration: "20 working days",
  },
  {
    id: "stage-2-material",
 title: "Stage 2: Material delivery",
    description:
      "Materials will be delivered within 25 working days from the date of 2nd stage payment received against site clearance.",
    duration: "25 working days",
  },
  {
    id: "stage-2-execution",
 title: "Stage 2: Execution",
    description:
      "Execution will commence from the 2nd day of material received at the site and the time frame will be 20 working days.",
    duration: "20 working days",
  },
  {
    id: "stage-3-material",
 title: "Stage 3: Material delivery",
    description:
      "Materials will be delivered within 5 working days after 2nd stage work completion and against site clearance.",
    duration: "5 working days",
  },
  {
    id: "stage-3-execution",
 title: "Stage 3: Execution",
    description:
      "Execution will commence from the 2nd day of material received at site and the time frame will be 15 working days.",
    duration: "15 working days",
  },
  {
    id: "qc-trial",
    title: "QC & trial run",
    description:
      "2 days will be taken for quality check (QC) and trial run after installation stages are complete.",
    duration: "2 working days",
  },
  {
    id: "handover",
    title: "Final handover",
    description:
      "Final handover will be given within 2 weeks after QC and trial run, with documentation and owner orientation.",
    duration: "2 weeks",
  },
];
