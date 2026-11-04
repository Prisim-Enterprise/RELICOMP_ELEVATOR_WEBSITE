import type { ServicePageContent } from "../types";
import { assertService } from "../validate";
import { isPublished } from "../publish";
import { liftAmcMaintenance } from "./lift-amc-maintenance";
import { elevatorInstallation } from "./elevator-installation";
import { liftModernization } from "./lift-modernization";
import { customElevatorManufacturing } from "./custom-elevator-manufacturing";

export const services: Record<string, ServicePageContent> = {
  "lift-amc-maintenance": assertService(liftAmcMaintenance),
  "elevator-installation": assertService(elevatorInstallation),
  "lift-modernization": assertService(liftModernization),
  "custom-elevator-manufacturing": assertService(customElevatorManufacturing),
};

export type ServiceSlug = keyof typeof services;

export function getService(slug: string): ServicePageContent | null {
  return services[slug] ?? null;
}

export function allServiceSlugs(opts?: {
  indexableOnly?: boolean;
}): string[] {
  const slugs = Object.keys(services);
  if (!opts?.indexableOnly) return slugs;
  return slugs.filter(
    (s) => !services[s].seo.noIndex && isPublished(`/services/${s}`)
  );
}

export function getAllServices(opts?: {
  indexableOnly?: boolean;
}): ServicePageContent[] {
  return allServiceSlugs(opts).map((slug) => services[slug]);
}
