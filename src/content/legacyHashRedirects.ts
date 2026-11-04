/**
 * Frozen historical hash → path map for /products hub client redirects.
 *
 * IDs are snapshots of old Products.tsx titles via:
 * title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
 *
 * Do NOT re-derive from current titles: bookmarks would desync.
 *
 * Only register entries when the destination route is live (or intentionally
 * accept interim 404). Grow this map in the same PR that ships each destination.
 */
export const LEGACY_HASH_REDIRECTS: Record<string, string> = {
 // Live destinations only (grow with each content PR)
 "#residential-home-elevators": "/products/home-elevators",
 "#goods-dumbwaiter-service-lifts": "/products/goods-lifts-dumbwaiters",
 "#maintenance-amc": "/services/lift-amc-maintenance",
 "#hydraulic-elevators": "/products/hydraulic-elevators",
 "#mrl-machine-room-less-elevators": "/products/mrl-elevators",
 "#traction-mr-elevators": "/products/traction-elevators",
 "#capsule-panoramic-glass-elevators": "/products/capsule-glass-elevators",
 "#installation-process": "/services/elevator-installation",
 "#retrofitting-modernization": "/services/lift-modernization",
 "#custom-manufacturing": "/services/custom-elevator-manufacturing",
 "#services": "/services",
};

/** Full historical map for reference / tests: not all destinations may be live. */
export const LEGACY_HASH_REDIRECTS_FULL: Record<string, string> = {
 "#residential-home-elevators": "/products/home-elevators",
 "#mrl-machine-room-less-elevators": "/products/mrl-elevators",
 "#traction-mr-elevators": "/products/traction-elevators",
 "#hydraulic-elevators": "/products/hydraulic-elevators",
 "#goods-dumbwaiter-service-lifts": "/products/goods-lifts-dumbwaiters",
 "#capsule-panoramic-glass-elevators": "/products/capsule-glass-elevators",
 "#installation-process": "/services/elevator-installation",
 "#services": "/services",
 "#maintenance-amc": "/services/lift-amc-maintenance",
 "#retrofitting-modernization": "/services/lift-modernization",
 "#custom-manufacturing": "/services/custom-elevator-manufacturing",
 "#products": "/products",
};
