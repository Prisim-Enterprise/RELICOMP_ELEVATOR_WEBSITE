/**
 * SINGLE SOURCE OF TRUTH for page / module publish status.
 *
 * Flip flags here only  -  Header, Footer, sitemap, hubs, slug routes, and
 * interlinking (RelatedPages / RichText) all read from these helpers.
 *
 * Hierarchy:
 * 1. Hub (top level)
 *    - Hub must be `published: true` to appear in nav/footer at all
 *    - `inNav` / `inFooter` decide which surfaces the hub (and its pages) use
 *    - If hub is unpublished (and off for nav/footer), the whole module is hidden
 * 2. Pages (under a live hub)
 *    - Show in nav when `inNav: true`; show in footer when `inFooter: true`
 *    - Page `published: false` → listed but resolves to Coming Soon
 *    - Page `published: true` → live page
 *
 * Module `published: false` unpublished every page + hub under that module.
 *
 * Batch-demo tip: set `modules.blog.published = false` (or any module) for a whole section.
 */

export type ContentModule =
  | "products"
  | "services"
  | "industries"
  | "locations"
  | "blog";

export type PublishPageEntry = {
  /** Pathname without trailing slash, e.g. "/products/home-elevators" */
  path: string;
  /** Short label for Header / Footer */
  label: string;
  /** Live page when true; Coming Soon when false (also gated by module.published) */
  published: boolean;
  /** Include in header dropdown (featured-only for locations) */
  inNav?: boolean;
  /** Include in footer “Our Services” (or quick links) column */
  inFooter?: boolean;
};

type ModuleConfig = {
  /** Gate the entire module (hub + every child page) */
  published: boolean;
  hub: {
    path: string;
    label: string;
    /** Hub live status (also gated by module.published) */
    published: boolean;
    inNav?: boolean;
    inFooter?: boolean;
  };
  pages: readonly PublishPageEntry[];
};

/** Module-level switches  -  primary control for batch demos */
export const modules: Record<ContentModule, ModuleConfig> = {
  products: {
    published: true,
    hub: {
      path: "/products",
      label: "Products",
      published: true,
      inNav: true,
      inFooter: true,
    },
    pages: [
      {
        path: "/products/home-elevators",
        label: "Home Elevators",
        published: true,
        inNav: true,
        inFooter: true,
      },
      {
        path: "/products/mrl-elevators",
        label: "MRL Elevators",
        published: true,
        inNav: true,
        inFooter: true,
      },
      {
        path: "/products/traction-elevators",
        label: "Traction / Passenger",
        published: true,
        inNav: true,
        inFooter: true,
      },
      {
        path: "/products/hydraulic-elevators",
        label: "Hydraulic Elevators",
        published: true,
        inNav: true,
        inFooter: true,
      },
      {
        path: "/products/goods-lifts-dumbwaiters",
        label: "Goods & Dumbwaiters",
        published: true,
        inNav: true,
        inFooter: true,
      },
      {
        path: "/products/capsule-glass-elevators",
        label: "Capsule / Glass",
        published: true,
        inNav: true,
        inFooter: true,
      },
    ],
  },
  services: {
    published: true,
    hub: {
      path: "/services",
      label: "Services",
      published: true,
      inNav: true,
      inFooter: true,
    },
    pages: [
      {
        path: "/services/elevator-installation",
        label: "Installation",
        published: true,
        inNav: true,
        inFooter: true,
      },
      {
        path: "/services/custom-elevator-manufacturing",
        label: "Custom Manufacturing",
        published: true,
        inNav: true,
        inFooter: true,
      },
      {
        path: "/services/lift-amc-maintenance",
        label: "Lift AMC & Maintenance",
        published: true,
        inNav: true,
        inFooter: true,
      },
      {
        path: "/services/lift-modernization",
        label: "Modernization",
        published: true,
        inNav: true,
        inFooter: true,
      },
    ],
  },
  industries: {
    published: true,
    hub: {
      path: "/industries",
      label: "Industries",
      published: true,
      inNav: true,
      inFooter: true,
    },
    pages: [
      {
        path: "/industries/apartments-residential",
        label: "Apartments & Residential",
        published: true,
        inNav: true,
        inFooter: true,
      },
      {
        path: "/industries/commercial-offices",
        label: "Commercial & Offices",
        published: true,
        inNav: true,
        inFooter: true,
      },
    ],
  },
  locations: {
    published: true,
    hub: {
      path: "/locations",
      label: "Locations",
      published: true,
      inNav: true,
      inFooter: true,
    },
    pages: [
      {
        path: "/locations/bangalore",
        label: "Bangalore",
        published: true,
        inNav: true,
        inFooter: true,
      },
      {
        path: "/locations/mysore",
        label: "Mysore",
        published: true,
        inNav: true,
        inFooter: true,
      },
      {
        path: "/locations/hassan",
        label: "Hassan",
        published: false,
        inNav: true,
        inFooter: true,
      },
    ],
  },
  blog: {
    published: true,
    hub: {
      path: "/blog",
      label: "Blog",
      published: true,
      inNav: true,
      inFooter: true,
    },
    pages: [
      {
        path: "/blog/home-lift-price-in-india-2026",
        label: "Home Lift Price Guide",
        published: true,
        inNav: false,
        inFooter: true,
      },
    ],
  },
};

/** Static marketing / legal pages (not under a content module) */
export const staticPages: PublishPageEntry[] = [
  { path: "/", label: "Home", published: true, inNav: true, inFooter: true },
  {
    path: "/about",
    label: "About",
    published: true,
    inNav: true,
    inFooter: true,
  },
  {
    path: "/projects",
    label: "Projects",
    published: true,
    inNav: true,
    inFooter: true,
  },
  {
    path: "/contact",
    label: "Contact",
    published: true,
    inNav: true,
    inFooter: true,
  },
  {
    path: "/privacy-policy",
    label: "Privacy Policy",
    published: true,
    inNav: false,
    inFooter: true,
  },
  {
    path: "/terms-of-service",
    label: "Terms of Service",
    published: true,
    inNav: false,
    inFooter: true,
  },
  {
    path: "/thank-you",
    label: "Thank You",
    published: true,
    inNav: false,
    inFooter: false,
  },
];

const MODULE_PREFIXES: { prefix: string; module: ContentModule }[] = [
  { prefix: "/products/", module: "products" },
  { prefix: "/services/", module: "services" },
  { prefix: "/industries/", module: "industries" },
  { prefix: "/locations/", module: "locations" },
  { prefix: "/blog/", module: "blog" },
];

const HUB_BY_PATH = new Map<string, ContentModule>(
  (Object.keys(modules) as ContentModule[]).map((key) => [
    modules[key].hub.path,
    key,
  ])
);

export function normalizePath(href: string): string {
  if (!href) return "/";
  try {
    // Allow absolute same-origin or path-only; strip query/hash
    const path = href.startsWith("http")
      ? new URL(href).pathname
      : href.split("?")[0].split("#")[0];
    if (!path || path === "/") return "/";
    return path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
  } catch {
    return href;
  }
}

function entryPublished(
  modulePublished: boolean,
  entryPublished: boolean
): boolean {
  return modulePublished && entryPublished;
}

/**
 * Whether a path is live for routing, sitemap, and active links.
 * Unknown internal paths (e.g. future pages not yet registered) default to
 * unpublished so stale links stay disabled until added here.
 */
export function isPublished(href: string): boolean {
  const path = normalizePath(href);

  // Landing pages / API are outside this registry
  if (path.startsWith("/lp") || path.startsWith("/api")) return true;

  const staticHit = staticPages.find((p) => p.path === path);
  if (staticHit) return staticHit.published;

  const hubModule = HUB_BY_PATH.get(path);
  if (hubModule) {
    const mod = modules[hubModule];
    return entryPublished(mod.published, mod.hub.published);
  }

  for (const { prefix, module } of MODULE_PREFIXES) {
    if (!path.startsWith(prefix)) continue;
    const mod = modules[module];
    const page = mod.pages.find((p) => p.path === path);
    if (!page) return false;
    return entryPublished(mod.published, page.published);
  }

  // Untracked site path  -  allow (avoids breaking odd utility routes)
  return true;
}

export function isModulePublished(module: ContentModule): boolean {
  return modules[module].published;
}

export function getPublishLabel(href: string): string | null {
  const path = normalizePath(href);
  const staticHit = staticPages.find((p) => p.path === path);
  if (staticHit) return staticHit.label;

  const hubModule = HUB_BY_PATH.get(path);
  if (hubModule) return modules[hubModule].hub.label;

  for (const { prefix, module } of MODULE_PREFIXES) {
    if (!path.startsWith(prefix)) continue;
    const page = modules[module].pages.find((p) => p.path === path);
    return page?.label ?? null;
  }
  return null;
}

export type NavLink = { name: string; path: string };

export type NavItem =
  | { name: string; path: string; children?: undefined }
  | { name: string; path: string; children: NavLink[] };

/** Hub is live and flagged for the header. */
function hubInNav(module: ContentModule): boolean {
  const mod = modules[module];
  return (
    entryPublished(mod.published, mod.hub.published) && mod.hub.inNav === true
  );
}

/** Hub is live and flagged for the footer. */
function hubInFooter(module: ContentModule): boolean {
  const mod = modules[module];
  return (
    entryPublished(mod.published, mod.hub.published) &&
    mod.hub.inFooter === true
  );
}

/**
 * Child pages for the header  -  only when the hub itself is in nav.
 * Page `published` does not gate listing (Coming Soon vs live is handled at visit).
 */
function navPages(module: ContentModule): NavLink[] {
  if (!hubInNav(module)) return [];
  return modules[module].pages
    .filter((p) => p.inNav === true)
    .map((p) => ({ name: p.label, path: p.path }));
}

/**
 * Header nav derived from the publish registry.
 * Hub must be published + inNav; pages then filter by their own inNav.
 */
export function getHeaderNavItems(): NavItem[] {
  const items: NavItem[] = [];

  for (const p of staticPages) {
    if (p.path === "/" && p.inNav === true && p.published) {
      items.push({ name: p.label, path: p.path });
    }
  }
  for (const p of staticPages) {
    if (p.path === "/about" && p.inNav === true && p.published) {
      items.push({ name: p.label, path: p.path });
    }
  }

  if (hubInNav("products")) {
    items.push({
      name: modules.products.hub.label,
      path: "/products",
      children: [
        ...navPages("products"),
        // { name: "All Products", path: "/products" },
      ],
    });
  }

  if (hubInNav("services")) {
    items.push({
      name: modules.services.hub.label,
      path: "/services",
      children: [
        ...navPages("services"),
        // { name: "All Services", path: "/services" },
      ],
    });
  }

  if (hubInNav("industries")) {
    items.push({
      name: modules.industries.hub.label,
      path: "/industries",
      children: [...navPages("industries")],
    });
  }

  if (hubInNav("locations")) {
    items.push({
      name: modules.locations.hub.label,
      path: "/locations",
      children: [
        ...navPages("locations"),
        // { name: "All Locations", path: "/locations" },
      ],
    });
  }
  

  for (const p of staticPages) {
    if (p.path === "/projects" && p.inNav === true && p.published) {
      items.push({ name: p.label, path: p.path });
    }
  }

  if (hubInNav("blog")) {
    items.push({ name: modules.blog.hub.label, path: "/blog" });
  }

  for (const p of staticPages) {
    if (p.path === "/contact" && p.inNav === true && p.published) {
      items.push({ name: p.label, path: p.path });
    }
  }

  return items;
}

export type FooterLink = { name: string; path: string };

export function getFooterQuickLinks(): FooterLink[] {
  const links: FooterLink[] = [];

  for (const path of ["/", "/about", "/products", "/projects", "/contact"]) {
    const staticHit = staticPages.find((p) => p.path === path);
    const hubModule = HUB_BY_PATH.get(path);

    if (hubModule) {
      if (!hubInFooter(hubModule)) continue;
    } else if (!(staticHit?.inFooter === true && staticHit.published)) {
      continue;
    }

    if (path === "/products") {
      links.push({ name: "Products & Services", path });
      continue;
    }
    const label = getPublishLabel(path) ?? path;
    links.push({
      name: path === "/about" ? "About Us" : label,
      path,
    });
  }

  return links;
}

/**
 * Footer “Our Services” mix.
 * Hub must be published + inFooter; pages then filter by their own inFooter.
 * Page `published` does not gate listing (Coming Soon vs live is handled at visit).
 */
export function getFooterServiceLinks(): FooterLink[] {
  const links: FooterLink[] = [];

  const push = (path: string, label?: string) => {
    links.push({ path, name: label ?? getPublishLabel(path) ?? path });
  };

  if (hubInFooter("products")) {
    for (const page of modules.products.pages) {
      if (page.inFooter === true) push(page.path, page.label);
    }
  }

  if (hubInFooter("blog")) {
    const priceGuide = modules.blog.pages.find(
      (p) => p.path === "/blog/home-lift-price-in-india-2026"
    );
    if (priceGuide?.inFooter === true) {
      push(priceGuide.path, "Home Lift Price Guide");
    }
    push("/blog", "Blog & Guides");
  }

  if (hubInFooter("locations")) {
    for (const city of ["/locations/bangalore", "/locations/mysore"] as const) {
      const page = modules.locations.pages.find((p) => p.path === city);
      if (page?.inFooter === true) push(city, page.label);
    }
    push("/locations", "All Locations");
  }

  if (hubInFooter("services")) {
    for (const page of modules.services.pages) {
      if (page.inFooter === true) push(page.path, page.label);
    }
    push("/services", "All Services");
  }

  if (hubInFooter("industries")) {
    push("/industries");
  }

  // Deduplicate by path while preserving order
  const seen = new Set<string>();
  return links.filter((l) => {
    if (seen.has(l.path)) return false;
    seen.add(l.path);
    return true;
  });
}

/** Resolve content module for a slug path (null if not a content URL). */
export function getContentModuleForPath(href: string): ContentModule | null {
  const path = normalizePath(href);
  const hub = HUB_BY_PATH.get(path);
  if (hub) return hub;
  for (const { prefix, module } of MODULE_PREFIXES) {
    if (path.startsWith(prefix) || path === prefix.slice(0, -1)) return module;
  }
  return null;
}
