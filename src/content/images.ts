import type { StaticImageData } from "next/image";

/** Theme folder: src/assets/product-home-elevator/ */
import homeElevatorHero from "@/assets/product-home-elevator/home-elevator-hero-view.webp";
import homeElevatorCabin from "@/assets/product-home-elevator/home-elevator-cabin-interior.webp";
import homeElevatorInstall from "@/assets/product-home-elevator/home-elevator-on-site-installation.webp";
import homeElevatorDetail from "@/assets/product-home-elevator/home-elevator-finish-detail.webp";

/** Theme folder: src/assets/product-mrl-elevator/ */
import mrlElevatorHero from "@/assets/product-mrl-elevator/mrl-elevator-hero-view.webp";
import mrlElevatorCabin from "@/assets/product-mrl-elevator/mrl-elevator-cabin-interior.webp";
import mrlElevatorInstall from "@/assets/product-mrl-elevator/mrl-elevator-on-site-installation.webp";
import mrlElevatorDetail from "@/assets/product-mrl-elevator/mrl-elevator-finish-detail.webp";

/** Theme folder: src/assets/product-traction-elevator/ */
import tractionElevatorHero from "@/assets/product-traction-elevator/traction-elevator-hero-view.webp";
import tractionElevatorCabin from "@/assets/product-traction-elevator/traction-elevator-cabin-interior.webp";
import tractionElevatorInstall from "@/assets/product-traction-elevator/traction-elevator-on-site-installation.webp";
import tractionElevatorDetail from "@/assets/product-traction-elevator/traction-elevator-finish-detail.webp";

/** Theme folder: src/assets/product-hydraulic-elevator/ */
import hydraulicElevatorHero from "@/assets/product-hydraulic-elevator/hydraulic-elevator-hero-view.webp";
import hydraulicElevatorCabin from "@/assets/product-hydraulic-elevator/hydraulic-elevator-cabin-interior.webp";
import hydraulicElevatorInstall from "@/assets/product-hydraulic-elevator/hydraulic-elevator-on-site-installation.webp";
import hydraulicElevatorDetail from "@/assets/product-hydraulic-elevator/hydraulic-elevator-finish-detail.webp";

/** Theme folder: src/assets/product-goods-lifts-elevator/ */
import goodsElevatorHero from "@/assets/product-goods-lifts-elevator/goods-lifts-hero-view.webp";
import goodsElevatorCabin from "@/assets/product-goods-lifts-elevator/goods-lifts-cabin-interior.webp";
import goodsElevatorInstall from "@/assets/product-goods-lifts-elevator/goods-lifts-on-site-installation.webp";
import goodsElevatorDetail from "@/assets/product-goods-lifts-elevator/goods-lifts-finish-detail.webp";

/** Theme folder: src/assets/product-capsule-glass-elevator/ */
import capsuleGlassElevatorHero from "@/assets/product-capsule-glass-elevator/capsule-glass-elevator-hero-view.webp";
import capsuleGlassElevatorCabin from "@/assets/product-capsule-glass-elevator/capsule-glass-elevator-cabin-interior.webp";
import capsuleGlassElevatorInstall from "@/assets/product-capsule-glass-elevator/capsule-glass-elevator-on-site-installation.webp";
import capsuleGlassElevatorDetail from "@/assets/product-capsule-glass-elevator/capsule-glass-elevator-finish-detail.webp";

/** Theme folder: src/assets/service-elevator-installation/ */
import installServiceHero from "@/assets/service-elevator-installation/elevator-installation-hero-view.webp";
import installServiceTeam from "@/assets/service-elevator-installation/elevator-installation-field-team.webp";
import installServiceProcess from "@/assets/service-elevator-installation/elevator-installation-on-site.webp";
import installServiceHandover from "@/assets/service-elevator-installation/elevator-installation-handover.webp";

/** Theme folder: src/assets/service-lift-amc-maintenance/ */
import amcServiceHero from "@/assets/service-lift-amc-maintenance/lift-amc-maintenance-hero-view.webp";
import amcServiceTeam from "@/assets/service-lift-amc-maintenance/lift-amc-maintenance-field-team.webp";
import amcServiceProcess from "@/assets/service-lift-amc-maintenance/lift-amc-maintenance-on-site.webp";
import amcServiceHandover from "@/assets/service-lift-amc-maintenance/lift-amc-maintenance-handover.webp";

/** Theme folder: src/assets/service-lift-modernization/ */
import modernizationServiceHero from "@/assets/service-lift-modernization/lift-modernization-hero-view.webp";
import modernizationServiceTeam from "@/assets/service-lift-modernization/lift-modernization-field-team.webp";
import modernizationServiceProcess from "@/assets/service-lift-modernization/lift-modernization-on-site.webp";
import modernizationServiceHandover from "@/assets/service-lift-modernization/lift-modernization-handover.webp";

/** Theme folder: src/assets/service-custom-elevator-manufacturing/ */
import manufacturingServiceHero from "@/assets/service-custom-elevator-manufacturing/custom-elevator-manufacturing-hero-view.webp";
import manufacturingServiceTeam from "@/assets/service-custom-elevator-manufacturing/custom-elevator-manufacturing-field-team.webp";
import manufacturingServiceProcess from "@/assets/service-custom-elevator-manufacturing/custom-elevator-manufacturing-on-site.webp";
import manufacturingServiceHandover from "@/assets/service-custom-elevator-manufacturing/custom-elevator-manufacturing-handover.webp";

/** Theme folder: src/assets/location-bangalore/ */
import bangaloreHero from "@/assets/location-bangalore/bangalore-hero-view.webp";
import bangaloreBranch from "@/assets/location-bangalore/bangalore-branch-site.webp";
import bangaloreInstall from "@/assets/location-bangalore/bangalore-on-site-installation.webp";

/** Theme folder: src/assets/location-mysore/ */
import mysoreHero from "@/assets/location-mysore/mysore-hero-view.webp";
import mysoreBranch from "@/assets/location-mysore/mysore-branch-site.webp";
import mysoreInstall from "@/assets/location-mysore/mysore-on-site-installation.webp";

/** Theme folder: src/assets/industry-apartments-residential/ */
import apartmentsHero from "@/assets/industry-apartments-residential/apartments-residential-hero-view.webp";
import apartmentsLobby from "@/assets/industry-apartments-residential/apartments-residential-lobby-core.webp";
import apartmentsService from "@/assets/industry-apartments-residential/apartments-residential-service-flow.webp";

/** Theme folder: src/assets/industry-commercial-offices/ */
import officesHero from "@/assets/industry-commercial-offices/commercial-offices-hero-view.webp";
import officesLobby from "@/assets/industry-commercial-offices/commercial-offices-lobby-core.webp";
import officesService from "@/assets/industry-commercial-offices/commercial-offices-service-flow.webp";

/**
 * Standard gallery roles for product hero InteractiveGallery.
 * Add a matching folder under src/assets/product-{name}/ when shipping a product theme set.
 */
export const productGalleryRoles = [
  { id: "hero", role: "hero", label: "Hero view" },
  { id: "cabin", role: "cabin", label: "Cabin interior" },
  { id: "install", role: "install", label: "On-site install" },
  { id: "detail", role: "detail", label: "Finish detail" },
] as const;

export type ProductGalleryRole = (typeof productGalleryRoles)[number]["role"];

/** Named theme images for a product page hero gallery. `hero` is required. */
export type ProductThemeImages = {
  hero: StaticImageData;
  cabin?: StaticImageData;
  install?: StaticImageData;
  detail?: StaticImageData;
};

/**
 * Per-product theme folders. Key MUST match the product page `slug`.
 * Roles: hero-view, cabin-interior, on-site-installation, finish-detail
 */
export const productThemeImages = {
  "home-elevators": {
    hero: homeElevatorHero,
    cabin: homeElevatorCabin,
    install: homeElevatorInstall,
    detail: homeElevatorDetail,
  },
  "mrl-elevators": {
    hero: mrlElevatorHero,
    cabin: mrlElevatorCabin,
    install: mrlElevatorInstall,
    detail: mrlElevatorDetail,
  },
  "traction-elevators": {
    hero: tractionElevatorHero,
    cabin: tractionElevatorCabin,
    install: tractionElevatorInstall,
    detail: tractionElevatorDetail,
  },
  "hydraulic-elevators": {
    hero: hydraulicElevatorHero,
    cabin: hydraulicElevatorCabin,
    install: hydraulicElevatorInstall,
    detail: hydraulicElevatorDetail,
  },
  "goods-lifts-dumbwaiters": {
    hero: goodsElevatorHero,
    cabin: goodsElevatorCabin,
    install: goodsElevatorInstall,
    detail: goodsElevatorDetail,
  },
  "capsule-glass-elevators": {
    hero: capsuleGlassElevatorHero,
    cabin: capsuleGlassElevatorCabin,
    install: capsuleGlassElevatorInstall,
    detail: capsuleGlassElevatorDetail,
  },
} as const satisfies Record<string, ProductThemeImages>;

export type ProductThemeSlug = keyof typeof productThemeImages;

/** Single hero per product (hub cards, blogs, JSON-LD). Prefers theme `hero` when present. */
export const productImages = {
  "home-elevators": productThemeImages["home-elevators"].hero,
  "mrl-elevators": productThemeImages["mrl-elevators"].hero,
  "traction-elevators": productThemeImages["traction-elevators"].hero,
  "hydraulic-elevators": productThemeImages["hydraulic-elevators"].hero,
  "goods-lifts-dumbwaiters": productThemeImages["goods-lifts-dumbwaiters"].hero,
  "capsule-glass-elevators": productThemeImages["capsule-glass-elevators"].hero,
} as const satisfies Record<string, StaticImageData>;

export type ProductImageSlug = keyof typeof productImages;

export type ProductGallerySlide = {
  id: string;
  label: string;
  src: StaticImageData | string | null;
  alt: string;
};

function getThemeForSlug(slug: string): ProductThemeImages | undefined {
  // Explicit cases keep all role imports reachable (avoids dynamic-key DCE) and
  // guarantees slug must match the product page content slug.
  switch (slug) {
    case "home-elevators":
      return productThemeImages["home-elevators"];
    case "mrl-elevators":
      return productThemeImages["mrl-elevators"];
    case "traction-elevators":
      return productThemeImages["traction-elevators"];
    case "hydraulic-elevators":
      return productThemeImages["hydraulic-elevators"];
    case "goods-lifts-dumbwaiters":
      return productThemeImages["goods-lifts-dumbwaiters"];
    case "capsule-glass-elevators":
      return productThemeImages["capsule-glass-elevators"];
    default:
      return undefined;
  }
}

/** Builds hero gallery slides from a theme folder, falling back to a single hero image. */
export function getProductGallerySlides(
  slug: string,
  options: {
    hero: StaticImageData | string;
    heroAlt: string;
  }
): ProductGallerySlide[] {
  const theme = getThemeForSlug(slug);

  return productGalleryRoles.map(({ id, role, label }) => {
    const fromTheme =
      role === "hero"
        ? theme?.hero
        : role === "cabin"
          ? theme?.cabin
          : role === "install"
            ? theme?.install
            : theme?.detail;

    const src = fromTheme ?? (role === "hero" ? options.hero : null) ?? null;

    return {
      id,
      label,
      src,
      alt:
        role === "hero"
          ? options.heroAlt
          : `${options.heroAlt}: ${label}`,
    };
  });
}

/**
 * Standard gallery roles for service hero InteractiveGallery.
 * Add a matching folder under src/assets/service-{slug}/ when shipping a service theme set.
 */
export const serviceGalleryRoles = [
  { id: "hero", role: "hero", label: "Service hero" },
  { id: "team", role: "team", label: "Field team" },
  { id: "process", role: "process", label: "On site" },
  { id: "handover", role: "handover", label: "Handover" },
] as const;

export type ServiceGalleryRole = (typeof serviceGalleryRoles)[number]["role"];

/** Named theme images for a service page hero gallery. `hero` is required. */
export type ServiceThemeImages = {
  hero: StaticImageData;
  team?: StaticImageData;
  process?: StaticImageData;
  handover?: StaticImageData;
};

/**
 * Per-service theme folders. Key MUST match the service page `slug`.
 * Roles: hero-view, field-team, on-site, handover
 */
export const serviceThemeImages = {
  "elevator-installation": {
    hero: installServiceHero,
    team: installServiceTeam,
    process: installServiceProcess,
    handover: installServiceHandover,
  },
  "lift-amc-maintenance": {
    hero: amcServiceHero,
    team: amcServiceTeam,
    process: amcServiceProcess,
    handover: amcServiceHandover,
  },
  "lift-modernization": {
    hero: modernizationServiceHero,
    team: modernizationServiceTeam,
    process: modernizationServiceProcess,
    handover: modernizationServiceHandover,
  },
  "custom-elevator-manufacturing": {
    hero: manufacturingServiceHero,
    team: manufacturingServiceTeam,
    process: manufacturingServiceProcess,
    handover: manufacturingServiceHandover,
  },
} as const satisfies Record<string, ServiceThemeImages>;

export type ServiceThemeSlug = keyof typeof serviceThemeImages;

/** Single hero per service (hub cards, JSON-LD). Prefers theme `hero` when present. */
export const serviceImages = {
  "elevator-installation":
    serviceThemeImages["elevator-installation"].hero,
  "lift-amc-maintenance": serviceThemeImages["lift-amc-maintenance"].hero,
  "lift-modernization": serviceThemeImages["lift-modernization"].hero,
  "custom-elevator-manufacturing":
    serviceThemeImages["custom-elevator-manufacturing"].hero,
} as const satisfies Record<string, StaticImageData>;

export type ServiceImageSlug = keyof typeof serviceImages;

function getServiceThemeForSlug(slug: string): ServiceThemeImages | undefined {
  switch (slug) {
    case "elevator-installation":
      return serviceThemeImages["elevator-installation"];
    case "lift-amc-maintenance":
      return serviceThemeImages["lift-amc-maintenance"];
    case "lift-modernization":
      return serviceThemeImages["lift-modernization"];
    case "custom-elevator-manufacturing":
      return serviceThemeImages["custom-elevator-manufacturing"];
    default:
      return undefined;
  }
}

/** Builds hero gallery slides from a service theme folder, falling back to a single hero image. */
export function getServiceGallerySlides(
  slug: string,
  options: {
    hero?: StaticImageData | string | null;
    heroAlt: string;
  }
): ProductGallerySlide[] {
  const theme = getServiceThemeForSlug(slug);

  return serviceGalleryRoles.map(({ id, role, label }) => {
    const fromTheme =
      role === "hero"
        ? theme?.hero
        : role === "team"
          ? theme?.team
          : role === "process"
            ? theme?.process
            : theme?.handover;

    const src =
      fromTheme ?? (role === "hero" ? options.hero : null) ?? null;

    return {
      id,
      label,
      src,
      alt:
        role === "hero" ? options.heroAlt : `${options.heroAlt}: ${label}`,
    };
  });
}

/**
 * Standard photo roles for location page heroes.
 * Add a matching folder under src/assets/location-{slug}/ when shipping a city set.
 */
export const locationGalleryRoles = [
  { id: "hero", role: "hero", label: "Project" },
  { id: "branch", role: "branch", label: "Branch / site" },
  { id: "install", role: "install", label: "Install photo" },
] as const;

export type LocationGalleryRole = (typeof locationGalleryRoles)[number]["role"];

/** Named theme images for a location page. `hero` is required when a city set exists. */
export type LocationThemeImages = {
  hero: StaticImageData;
  branch?: StaticImageData;
  install?: StaticImageData;
};

/**
 * Per-city theme folders. Key MUST match the location page `slug`.
 * Roles: hero-view, branch-site, on-site-installation
 */
export const locationThemeImages = {
  bangalore: {
    hero: bangaloreHero,
    branch: bangaloreBranch,
    install: bangaloreInstall,
  },
  mysore: {
    hero: mysoreHero,
    branch: mysoreBranch,
    install: mysoreInstall,
  },
} as const satisfies Record<string, LocationThemeImages>;

export type LocationThemeSlug = keyof typeof locationThemeImages;

export function getLocationTheme(slug: string): LocationThemeImages | undefined {
  switch (slug) {
    case "bangalore":
      return locationThemeImages.bangalore;
    case "mysore":
      return locationThemeImages.mysore;
    default:
      return undefined;
  }
}

/**
 * Photo roles for industry page heroes.
 * Add a matching folder under src/assets/industry-{slug}/ when shipping a set.
 */
export const industryGalleryRoles = [
  { id: "hero", role: "hero", label: "Use-case" },
  { id: "lobby", role: "lobby", label: "Lobby / core" },
  { id: "service", role: "service", label: "Service flow" },
] as const;

export type IndustryGalleryRole = (typeof industryGalleryRoles)[number]["role"];

/** Named theme images for an industry page. `hero` is required when a set exists. */
export type IndustryThemeImages = {
  hero: StaticImageData;
  lobby?: StaticImageData;
  service?: StaticImageData;
};

/**
 * Per-industry theme folders. Key MUST match the industry page `slug`.
 * Roles: hero-view, lobby-core, service-flow
 */
export const industryThemeImages = {
  "apartments-residential": {
    hero: apartmentsHero,
    lobby: apartmentsLobby,
    service: apartmentsService,
  },
  "commercial-offices": {
    hero: officesHero,
    lobby: officesLobby,
    service: officesService,
  },
} as const satisfies Record<string, IndustryThemeImages>;

export type IndustryThemeSlug = keyof typeof industryThemeImages;

export function getIndustryTheme(slug: string): IndustryThemeImages | undefined {
  switch (slug) {
    case "apartments-residential":
      return industryThemeImages["apartments-residential"];
    case "commercial-offices":
      return industryThemeImages["commercial-offices"];
    default:
      return undefined;
  }
}
