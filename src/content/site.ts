/** Brand, NAP, and shared commercial claims used across content modules. */

export const brand = {
 name: "Relicomp Elevators",
 legalName: "Relicomp Elevators Pvt. Ltd.",
 phoneDisplay: "8037404826",
 phoneTel: "+918037404826",
 whatsappDisplay: "+91 87924 96622",
 whatsappE164: "918792496622",
 yearsOfExcellence: "16+",
 installations: "600+",
 regions: "Karnataka & Tamil Nadu",
 /** Public path for the square-ish brand logo used in Organization JSON-LD. */
 logoPath: "/logo.png",
 logoWidth: 424,
 logoHeight: 600,
} as const;

/**
 * Trading hours used for LocalBusiness `openingHoursSpecification`.
 * Confirmed by the business 2026-09-21: Mon-Sat 09:30-18:30, Sunday closed.
 * Breakdown support is handled separately and is not an office-hours claim.
 */
export const openingHours = {
 days: [
 "Monday",
 "Tuesday",
 "Wednesday",
 "Thursday",
 "Friday",
 "Saturday",
 ] as const,
 opens: "09:30",
 closes: "18:30",
 closedDays: ["Sunday"] as const,
} as const;

/** Verified branch NAP: aligned with Contact.tsx (do not invent streets). */
export const branches = {
 bangalore: {
 name: "Head Office: Bengaluru",
 streetAddress:
 "#7, 2nd Floor, S.V. Arcade, Income Tax Layout, Chandra Layout, Vijayanagar",
 addressLocality: "Bengaluru",
 addressRegion: "Karnataka",
 postalCode: "560040",
 addressCountry: "IN",
 telephone: "+918037404826",
 mapUrl: "https://maps.app.goo.gl/2WGTCshaYV1Wh2c29",
 /** Resolved from the Google Business Profile place link above (do not guess). */
 geo: { latitude: 12.9599728, longitude: 77.5310498 },
 },
 jigani: {
 name: "Branch Office: Jigani",
 streetAddress:
 "#7, 1st Floor, Otis Circle, Jigani Industrial Area, Jigani, Anekal Taluk",
 addressLocality: "Bengaluru",
 addressRegion: "Karnataka",
 postalCode: "560105",
 addressCountry: "IN",
 telephone: "+918037404826",
 },
 mysuru: {
 name: "Branch Office: Mysuru",
 streetAddress:
 "#9, 1st Floor, 28th Block, Srirampura 2nd Stage, Madhuvana Layout",
 addressLocality: "Mysuru",
 addressRegion: "Karnataka",
 postalCode: "560034",
 addressCountry: "IN",
 telephone: "+918037404826",
 },
 magadiFactory: {
 name: "Factory: Magadi Road, Bengaluru",
 streetAddress:
 "#145, Dorai Shama Ventures, Vani School Road, Chikkagollarahatti, Magadi Main Road",
 addressLocality: "Bengaluru",
 addressRegion: "Karnataka",
 postalCode: "560091",
 addressCountry: "IN",
 telephone: "+918037404826",
 },
} as const;

export const priceDisclaimer =
 "Indicative ranges only for planning. Final quote after site survey, shaft/civil readiness, cabin finishes, and safety configuration. Prices may change without notice.";

export const socialLinks = {
 facebook: "https://www.facebook.com/relicompelevators",
 instagram: "https://www.instagram.com/relicompelevatorspvtltd/",
 linkedin: "https://in.linkedin.com/company/relicomp-elevators-pvt-ltd",
 twitter: "https://x.com/RelicompElevat1",
 youtube: "https://www.youtube.com/@relicompelevatorpvtltd",
} as const;

/** One-line head-office NAP used in the footer and contact pages. */
export const headOfficeAddress = `${branches.bangalore.streetAddress}, ${branches.bangalore.addressLocality}, ${branches.bangalore.addressRegion} ${branches.bangalore.postalCode}, India`;
