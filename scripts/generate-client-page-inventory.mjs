/**
 * Generates a client-facing Excel inventory of all SEO/content pages.
 * Parses content TS files (no Next image imports required).
 * Run: node scripts/generate-client-page-inventory.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const XLSX = require("xlsx");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function extractString(src, key) {
  const re = new RegExp(`${key}:\\s*"((?:\\\\.|[^"\\\\])*)"`, "m");
  const m = src.match(re);
  return m ? m[1].replace(/\\"/g, '"').replace(/\\n/g, "\n") : "";
}

function extractStringArray(src, key) {
  const re = new RegExp(`${key}:\\s*\\[([\\s\\S]*?)\\]`, "m");
  const m = src.match(re);
  if (!m) return [];
  const items = [];
  const itemRe = /"((?:\\.|[^"\\])*)"/g;
  let im;
  while ((im = itemRe.exec(m[1]))) {
    items.push(im[1].replace(/\\"/g, '"'));
  }
  return items;
}

function extractTuple(src, key) {
  const re = new RegExp(`${key}:\\s*\\[(\\d+)\\s*,\\s*(\\d+)\\]`);
  const m = src.match(re);
  return m ? [Number(m[1]), Number(m[2])] : [0, 0];
}

function extractFaqs(src) {
  const faqs = [];
  const faqBlock = src.match(/faqs:\s*\[([\s\S]*?)\],\s*(?:related|cta|seo|localProof|sizeChart|priceRanges|specs|hero)/);
  if (!faqBlock) return faqs;
  const qRe =
    /question:\s*"((?:\\.|[^"\\])*)"[\s\S]*?answer:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = qRe.exec(faqBlock[1]))) {
    faqs.push({
      question: m[1].replace(/\\"/g, '"'),
      answer: m[2].replace(/\\"/g, '"'),
    });
  }
  return faqs;
}

function extractRelatedCount(src) {
  const m = src.match(/related:\s*\[([\s\S]*?)\],\s*(?:cta|seo|faqs)/);
  if (!m) return 0;
  return (m[1].match(/href:/g) || []).length;
}

function stripComments(src) {
  return src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
}

const SKIP_EXACT = new Set([
  "paragraph",
  "heading",
  "list",
  "callout",
  "component",
  "product",
  "service",
  "industry",
  "location",
  "blog",
  "page",
  "project",
  "sla",
  "faq",
  "branch",
  "PriceRangeTable",
  "SizeChart",
  "SpecsTable",
  "AMCComparisonTable",
  "ProcessTimeline",
]);

function extractTextChunks(src) {
  const chunks = [];
  // Count all double-quoted strings that are not paths/assets/type tokens
  const re = /"((?:\\.|[^"\\])+)"/g;
  let m;
  while ((m = re.exec(src))) {
    const s = m[1];
    if (
      s.length < 2 ||
      s.startsWith("/") ||
      s.startsWith("./") ||
      s.startsWith("../") ||
      s.includes(".webp") ||
      s.includes(".png") ||
      s.includes(".jpg") ||
      s.includes(".jpeg") ||
      SKIP_EXACT.has(s)
    ) {
      continue;
    }
    chunks.push(s.replace(/\\"/g, '"').replace(/\\n/g, " "));
  }
  return chunks;
}

function countWords(text) {
  if (!text) return 0;
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#*_`>~]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

function actualWordCountFromFile(src) {
  const clean = stripComments(src);
  // Prefer counting intro + body + faqs + specs-ish strings in content objects
  // Heuristic: sum words of all substantial quoted strings after export const
  const exportIdx = clean.search(/export const \w+/);
  const body = exportIdx >= 0 ? clean.slice(exportIdx) : clean;
  return extractTextChunks(body).reduce((n, t) => n + countWords(t), 0);
}

/** Counts visible text in a JSX/TSX view (text between tags, not attributes/code). */
function jsxVisibleWordCount(src) {
  let body = stripComments(src);
  const returnIdx = body.search(/return\s*\(/);
  if (returnIdx >= 0) body = body.slice(returnIdx);
  // Drop JS expressions in braces (iteratively for nesting)
  let prev;
  do {
    prev = body;
    body = body.replace(/\{[^{}]*\}/g, " ");
  } while (body !== prev);
  // Drop tags (attributes never contain < or >)
  do {
    prev = body;
    body = body.replace(/<[^<>]*>/g, " ");
  } while (body !== prev);
  // Remaining is visible text plus stray syntax; strip punctuation-only tokens
  return body
    .split(/\s+/)
    .filter((t) => /[A-Za-z0-9\u0900-\u097F₹]/.test(t))
    .filter((t) => !/^(const|return|export|default|import|from|=>|\);?|\(|&&|\|\|)$/.test(t))
    .length;
}

function listContentFiles(dir) {
  return fs
    .readdirSync(path.join(root, dir))
    .filter((f) => f.endsWith(".ts") && f !== "index.ts")
    .map((f) => path.join(dir, f));
}

function parsePublish() {
  const src = read("src/content/publish.ts");
  const modules = {
    products: { published: /products:\s*\{[\s\S]*?published:\s*(true|false)/.exec(src)?.[1] === "true", pages: [] },
    services: { published: false, pages: [] },
    industries: { published: false, pages: [] },
    locations: { published: false, pages: [] },
    blog: { published: false, pages: [] },
  };

  // crude: find each module published flag
  for (const key of Object.keys(modules)) {
    const re = new RegExp(`${key}:\\s*\\{[\\s\\S]*?published:\\s*(true|false)`, "m");
    const m = src.match(re);
    modules[key].published = m?.[1] === "true";
  }

  const pageRe =
    /path:\s*"(\/(?:products|services|industries|locations|blog)\/[^"]+)"[\s\S]*?published:\s*(true|false)/g;
  let m;
  while ((m = pageRe.exec(src))) {
    const p = m[1];
    const moduleKey = p.split("/")[1];
    if (modules[moduleKey]) {
      modules[moduleKey].pages.push({ path: p, published: m[2] === "true" });
    }
  }
  return modules;
}

function statusFor(modules, urlPath) {
  if (urlPath.startsWith("/lp/")) return "Live (landing page)";
  const parts = urlPath.split("/").filter(Boolean);
  if (parts.length === 1 && ["products", "services", "industries", "locations", "blog"].includes(parts[0])) {
    const mod = modules[parts[0]];
    return mod?.published ? "Live" : "Ready (module unpublished / Coming Soon)";
  }
  if (parts.length >= 2) {
    const mod = modules[parts[0]];
    if (!mod) return "—";
    const page = mod.pages.find((p) => p.path === urlPath);
    if (!page) return "Content ready";
    if (!mod.published || !page.published) {
      return "Ready (gated until publish flag)";
    }
    return "Live";
  }
  return "—";
}

function whatWeBuilt(meta) {
  const parts = [
    `Full SEO ${meta.category.toLowerCase()} page`,
    "H1 + intro + structured body sections",
  ];
  if (meta.faqCount) parts.push(`${meta.faqCount} FAQs (schema-ready)`);
  if (meta.hasSpecs) parts.push("Specs / comparison tables");
  if (meta.hasPrice) parts.push("Price-range table");
  if (meta.hasSize) parts.push("Size chart");
  if (meta.relatedCount) parts.push(`${meta.relatedCount} internal related links`);
  if (meta.hasCta) parts.push("CTA block to contact/quote");
  if (meta.hasLocalProof) parts.push("Local proof / area-served content");
  parts.push("Meta title, description, primary + secondary keywords");
  parts.push(`Canonical path ${meta.urlPath}`);
  return parts.join("; ");
}

/**
 * Highlighted agency-effort column: all copy + custom imagery authored/created by us.
 * Blog posts note ongoing custom image delivery as posts are published / wherever needed.
 */
function contentAndImagesByUs(row) {
  const base =
    "YES — All page content (copy, SEO text, FAQs) authored by us. Custom images / graphics created by us (not stock-only).";

  switch (row.category) {
    case "Product":
      return `${base} Product hero, cabin, finish & installation imagery prepared for this page. Additional custom shots supplied wherever the layout needs them.`;
    case "Service":
      return `${base} Service imagery / visuals prepared by us; more custom images added wherever needed.`;
    case "Industry":
      return `${base} Industry-context visuals prepared by us; custom images supplied wherever needed.`;
    case "Location":
      return `${base} Location / local visuals prepared by us; custom images supplied wherever needed.`;
    case "Blog":
      return `${base} ★ Blog effort: article written by us. We will continue adding NEW custom images for each blog (hero + in-article) as blogs publish / wherever needed — ongoing creative delivery, not a one-time dump.`;
    case "Landing Page":
      return `${base} Full LP creative set by us: hero, lift-type photos, installation gallery, trust visuals — custom campaign imagery.`;
    case "Hub":
      return `${base} Hub copy written by us; supporting visuals / cards use our custom asset set.`;
    case "Legal / Utility":
      return `${base} Legal / utility page copy written by us. Imagery used only where the layout needs it (custom / brand assets).`;
    default:
      return base;
  }
}

function parsePageFile(rel, category, pathPrefix) {
  const src = read(rel);
  const slug = path.basename(rel, ".ts");
  const urlPath = `${pathPrefix}/${slug}`;
  const [minW, maxW] = extractTuple(src, "wordCountTarget");
  const faqs = extractFaqs(src);
  const keywords = extractStringArray(src, "keywords");
  // keywords array is nested in seo — extractStringArray may pick first array; refine:
  const seoBlock = src.match(/seo:\s*\{([\s\S]*?)\},\s*$/m) || src.match(/seo:\s*\{([\s\S]*?)\}/);
  const seoKeywords = seoBlock
    ? extractStringArray(`keywords: [${(seoBlock[1].match(/keywords:\s*\[([\s\S]*?)\]/) || [,""])[1]}]`, "keywords")
    : keywords;

  const relatedCount = extractRelatedCount(src);
  const actual = actualWordCountFromFile(src);

  return {
    category,
    pageType: "New SEO content page",
    pageName: extractString(src, "h1") || slug,
    slug,
    urlPath,
    primaryKeyword: extractString(src, "primaryKeyword"),
    secondaryKeywords: seoKeywords.join("; "),
    seoTitle: extractString(src, "title"),
    metaDescription: extractString(src, "description"),
    wordCountTarget: minW && maxW ? `${minW}–${maxW}` : "—",
    actualWordCount: actual,
    faqCount: faqs.length,
    relatedCount,
    hasSpecs: /specs:/.test(src) || /SpecsTable/.test(src),
    hasPrice: /priceRanges:/.test(src) || /PriceRangeTable/.test(src),
    hasSize: /sizeChart:/.test(src) || /SizeChart/.test(src),
    hasCta: /cta:\s*\{/.test(src),
    hasLocalProof: /localProof:/.test(src),
    notes: "",
  };
}

function main() {
  const modules = parsePublish();
  const rows = [];

  for (const f of listContentFiles("src/content/products")) {
    rows.push(parsePageFile(f, "Product", "/products"));
  }
  for (const f of listContentFiles("src/content/services")) {
    rows.push(parsePageFile(f, "Service", "/services"));
  }
  for (const f of listContentFiles("src/content/industries")) {
    rows.push(parsePageFile(f, "Industry", "/industries"));
  }
  for (const f of listContentFiles("src/content/locations")) {
    rows.push(parsePageFile(f, "Location", "/locations"));
  }
  for (const f of listContentFiles("src/content/blog")) {
    rows.push(parsePageFile(f, "Blog", "/blog"));
  }

  const hubs = [
    {
      pageName: "Products Hub",
      slug: "products",
      urlPath: "/products",
      note: "Category index listing all product pages with SEO intro copy",
    },
    {
      pageName: "Services Hub",
      slug: "services",
      urlPath: "/services",
      note: "Category index listing all service pages with SEO intro copy",
    },
    {
      pageName: "Industries Hub",
      slug: "industries",
      urlPath: "/industries",
      note: "Category index listing all industry pages with SEO intro copy",
    },
    {
      pageName: "Locations Hub",
      slug: "locations",
      urlPath: "/locations",
      note: "City index listing all location pages with SEO intro copy",
    },
    {
      pageName: "Blog Hub",
      slug: "blog",
      urlPath: "/blog",
      note: "Guides index listing all blog posts",
    },
  ];

  for (const h of hubs) {
    rows.push({
      category: "Hub",
      pageType: "New hub / category index",
      pageName: h.pageName,
      slug: h.slug,
      urlPath: h.urlPath,
      primaryKeyword: "— (hub / category page)",
      secondaryKeywords: "",
      seoTitle: h.pageName,
      metaDescription: h.note,
      wordCountTarget: "Hub SEO section",
      actualWordCount: "—",
      faqCount: 0,
      relatedCount: 0,
      hasSpecs: false,
      hasPrice: false,
      hasSize: false,
      hasCta: false,
      hasLocalProof: false,
      notes: h.note,
    });
  }

  // Landing page
  const lpSrc = read("src/content/landing/home-elevators-bangalore.ts");
  const lpView = read("src/views/HomeElevatorsBangalore.tsx");
  const lpKeywords = extractStringArray(lpSrc, "keywords");
  const lpFaqCount = (lpSrc.match(/question:/g) || []).length;
  const lpWords =
    actualWordCountFromFile(lpSrc) +
    actualWordCountFromFile(lpView.slice(0, lpView.search(/return\s*\(/))) +
    jsxVisibleWordCount(lpView);

  rows.push({
    category: "Landing Page",
    pageType: "Paid / conversion landing page (LP)",
    pageName: "Home Elevators in Bangalore",
    slug: "home-elevators-bangalore",
    urlPath: "/lp/home-elevators-bangalore",
    primaryKeyword: "home elevator bangalore",
    secondaryKeywords: lpKeywords.join("; "),
    seoTitle: extractString(lpSrc, "title"),
    metaDescription: extractString(lpSrc, "description"),
    wordCountTarget: "Conversion-focused LP",
    actualWordCount: lpWords,
    faqCount: lpFaqCount,
    relatedCount: 0,
    hasSpecs: false,
    hasPrice: false,
    hasSize: false,
    hasCta: true,
    hasLocalProof: true,
    notes:
      "Separate from organic /products/home-elevators — use for ads/campaigns.",
  });

  // Legal & utility pages — built new in this engagement
  const legalUtility = [
    {
      pageName: "Privacy Policy",
      slug: "privacy-policy",
      urlPath: "/privacy-policy",
      view: "src/views/PrivacyPolicy.tsx",
      appPage: "app/(main)/privacy-policy/page.tsx",
      built:
        "Full privacy policy page: data collection, usage, protection & inquiry-handling sections; meta title + description + Open Graph tags",
      notes: "Legal compliance page — required for lead forms & ads approval",
    },
    {
      pageName: "Terms of Service",
      slug: "terms-of-service",
      urlPath: "/terms-of-service",
      view: "src/views/TermsOfService.tsx",
      appPage: "app/(main)/terms-of-service/page.tsx",
      built:
        "Full terms of service page: usage terms, service scope & liability sections; meta title + description + Open Graph tags",
      notes: "Legal compliance page",
    },
    {
      pageName: "Thank You",
      slug: "thank-you",
      urlPath: "/thank-you",
      view: "src/views/ThankYou.tsx",
      appPage: "app/(main)/thank-you/page.tsx",
      built:
        "Post-enquiry confirmation page with next-steps messaging and navigation back to key pages; noindex (utility page, kept out of Google)",
      notes: "Conversion-flow utility page shown after form submission",
    },
  ];

  for (const p of legalUtility) {
    const viewSrc = read(p.view);
    const appSrc = read(p.appPage);
    rows.push({
      category: "Legal / Utility",
      pageType: "New legal / utility page",
      pageName: p.pageName,
      slug: p.slug,
      urlPath: p.urlPath,
      primaryKeyword: "— (not an SEO target page)",
      secondaryKeywords: "",
      seoTitle: extractString(appSrc, "title"),
      metaDescription: extractString(appSrc, "description"),
      wordCountTarget: "—",
      actualWordCount: jsxVisibleWordCount(viewSrc),
      faqCount: 0,
      relatedCount: 0,
      hasSpecs: false,
      hasPrice: false,
      hasSize: false,
      hasCta: false,
      hasLocalProof: false,
      customBuilt: p.built,
      notes: p.notes,
    });
  }

  for (const r of rows) {
    r.publishStatus =
      r.category === "Legal / Utility" ? "Live" : statusFor(modules, r.urlPath);
    if (r.customBuilt) {
      r.whatWeBuilt = r.customBuilt;
    } else if (r.category === "Hub") {
      r.whatWeBuilt = r.notes;
    } else if (r.category === "Landing Page") {
      r.whatWeBuilt =
        "Conversion landing page: hero, trust bar, lift-type sections, installation gallery, why-choose, testimonials, quote modal, WhatsApp CTA, sticky mobile bar, FAQ accordion, promo modal; Bangalore local SEO keywords; form lead capture";
    } else {
      r.whatWeBuilt = whatWeBuilt(r);
    }
    r.contentAndImagesByUs = contentAndImagesByUs(r);
  }

  const existing = [
    ["Home", "/", "/", "Existing homepage"],
    ["About Us", "about", "/about", "Existing about page"],
    ["Contact Us", "contact", "/contact", "Existing contact / lead form"],
    ["Projects", "projects", "/projects", "Existing projects / gallery"],
  ];

  // Monthly showcase: 4 pages/month — SEO priority order from keyword map
  const monthlyOrder = [
    "/products/home-elevators",
    "/blog/home-lift-price-in-india-2026",
    "/products/goods-lifts-dumbwaiters",
    "/services/lift-amc-maintenance",
    "/locations/bangalore",
    "/products/hydraulic-elevators",
    "/lp/home-elevators-bangalore",
    "/products/capsule-glass-elevators",
    "/products/mrl-elevators",
    "/services/elevator-installation",
    "/products/traction-elevators",
    "/services/lift-modernization",
    "/services/custom-elevator-manufacturing",
    "/industries/apartments-residential",
    "/industries/commercial-offices",
    "/locations/mysore",
    "/locations/hassan",
    "/products",
    "/services",
    "/industries",
    "/locations",
    "/blog",
    "/privacy-policy",
    "/terms-of-service",
    "/thank-you",
  ];

  const byPath = new Map(rows.map((r) => [r.urlPath, r]));

  const detailHeaders = [
    "S.No",
    "Category",
    "Page Type",
    "Page Name / H1",
    "Slug",
    "URL Path",
    "Primary Keyword (SEO)",
    "Secondary / Supporting Keywords",
    "SEO Title",
    "Meta Description",
    "Word Count Target",
    "Actual Word Count (approx)",
    "FAQ Count",
    "Internal Related Links",
    "Publish / Live Status",
    "★ Content & Custom Images BY US (Agency Effort)",
    "What We Built On This Page",
    "Notes for Client",
  ];

  const sorted = rows
    .slice()
    .sort((a, b) => a.category.localeCompare(b.category) || a.urlPath.localeCompare(b.urlPath));

  const detailAoA = [
    detailHeaders,
    ...sorted.map((r, i) => [
      i + 1,
      r.category,
      r.pageType,
      r.pageName,
      r.slug,
      r.urlPath,
      r.primaryKeyword,
      r.secondaryKeywords,
      r.seoTitle,
      r.metaDescription,
      r.wordCountTarget,
      r.actualWordCount,
      r.faqCount,
      r.relatedCount,
      r.publishStatus,
      r.contentAndImagesByUs,
      r.whatWeBuilt,
      r.notes || "",
    ]),
  ];

  const monthlyAoA = [
    [
      "Client Showcase Month",
      "Batch #",
      "Page # in Month",
      "Category",
      "Page Name / H1",
      "Slug",
      "URL Path",
      "Primary Keyword",
      "Secondary Keywords",
      "Word Count Target",
      "Actual Word Count",
      "★ Content & Custom Images BY US (Agency Effort)",
      "What We Built",
      "Suggested Client Narrative",
    ],
  ];

  let month = 1;
  for (let i = 0; i < monthlyOrder.length; i += 4) {
    const batch = monthlyOrder.slice(i, i + 4);
    batch.forEach((urlPath, idx) => {
      const r = byPath.get(urlPath);
      if (!r) {
        monthlyAoA.push([
          `Month ${month}`,
          month,
          `${idx + 1} of ${batch.length}`,
          "—",
          urlPath,
          "",
          urlPath,
          "",
          "",
          "",
          "",
          "",
          "",
          "Check path",
        ]);
        return;
      }
      monthlyAoA.push([
        `Month ${month}`,
        month,
        `${idx + 1} of ${batch.length}`,
        r.category,
        r.pageName,
        r.slug,
        r.urlPath,
        r.primaryKeyword,
        r.secondaryKeywords,
        r.wordCountTarget,
        r.actualWordCount,
        r.contentAndImagesByUs,
        r.whatWeBuilt,
        `Present as Month ${month} delivery (${idx + 1}/4). Already built; flip publish when showcasing.`,
      ]);
    });
    month += 1;
  }

  const counts = {
    Product: rows.filter((r) => r.category === "Product").length,
    Service: rows.filter((r) => r.category === "Service").length,
    Industry: rows.filter((r) => r.category === "Industry").length,
    Location: rows.filter((r) => r.category === "Location").length,
    Blog: rows.filter((r) => r.category === "Blog").length,
    Hub: rows.filter((r) => r.category === "Hub").length,
    "Landing Page": rows.filter((r) => r.category === "Landing Page").length,
    "Legal / Utility": rows.filter((r) => r.category === "Legal / Utility").length,
  };
  const newTotal = rows.length;

  const summaryAoA = [
    ["Relicomp Elevators — Website Page Inventory & SEO Delivery Tracker"],
    ["Generated on", new Date().toISOString().slice(0, 10)],
    [],
    ["PURPOSE"],
    [
      "",
      "Client was committed to 4 new SEO pages per month. All pages listed here are already authored in the codebase. Use the 'Monthly Showcase Plan' sheet to present 4 pages each month.",
    ],
    [],
    ["★ HIGHLIGHT — CONTENT & CUSTOM IMAGES ARE OUR EFFORT"],
    [
      "What we own",
      "ALL page content (copy, SEO text, FAQs, structure) is written / produced by us — not client-filled templates.",
    ],
    [
      "Custom imagery",
      "Custom images & graphics used across products, landing pages, hubs, and supporting visuals are created / prepared by us (hero, cabin, installation, gallery, campaign assets).",
    ],
    [
      "Blogs going forward",
      "For blog posts we will keep adding NEW custom images according to each blog topic (hero + in-article) as posts publish / wherever needed. Image creation is an ongoing agency deliverable, not a one-time dump.",
    ],
    [
      "Where to show the client",
      "See column '★ Content & Custom Images BY US (Agency Effort)' on 'All New Pages' and 'Monthly Showcase Plan'. Also see sheet 'Content & Images Effort'.",
    ],
    [],
    ["1. PREVIOUSLY EXISTING (BASIC) SITE PAGES"],
    ["Page", "URL", "Notes"],
    ...existing.map((e) => [e[0], e[2], e[3]]),
    [],
    ["2. NEW PAGES CREATED IN THIS ENGAGEMENT"],
    ["Category", "Count", "URL pattern"],
    ["Product pages", counts.Product, "/products/{slug}"],
    ["Service pages", counts.Service, "/services/{slug}"],
    ["Industry pages", counts.Industry, "/industries/{slug}"],
    ["Location pages", counts.Location, "/locations/{slug}"],
    ["Blog / guide posts", counts.Blog, "/blog/{slug}"],
    ["Hub / index pages", counts.Hub, "/products, /services, /industries, /locations, /blog"],
    ["Landing pages (LP)", counts["Landing Page"], "/lp/home-elevators-bangalore"],
    [
      "Legal / utility pages",
      counts["Legal / Utility"],
      "/privacy-policy, /terms-of-service, /thank-you",
    ],
    ["TOTAL NEW PAGES", newTotal, ""],
    [],
    ["3. CLIENT COMMITMENT vs ACTUAL BUILD"],
    ["Item", "Value"],
    ["Committed rate", "4 pages / month"],
    ["Pages built ahead (ready to showcase)", newTotal],
    ["Showcase months at 4 pages/month", Math.ceil(newTotal / 4)],
    [
      "How to use",
      "Each month share 4 rows from 'Monthly Showcase Plan'. Full technical inventory is in 'All New Pages'. Keywords & word counts are in 'Keywords & Word Counts'.",
    ],
    [],
    ["4. GO-LIVE / PUBLISH NOTES"],
    [
      "Note",
      "Content can be live or gated via publish.ts. Today typically live: Home, About, Projects, Contact, Products hub, Home Elevators, MRL Elevators, and the Bangalore home-elevators landing page. Other modules flip to live when you set published: true.",
    ],
  ];

  const keywordAoA = [
    [
      "URL Path",
      "Category",
      "Primary Keyword",
      "All Keywords on Page",
      "Word Count Target",
      "Actual Words (approx)",
      "FAQ Count",
      "★ Content & Custom Images BY US",
    ],
    ...sorted
      .filter((r) => r.category !== "Hub" && r.category !== "Legal / Utility")
      .map((r) => [
        r.urlPath,
        r.category,
        r.primaryKeyword,
        r.secondaryKeywords,
        r.wordCountTarget,
        r.actualWordCount,
        r.faqCount,
        r.contentAndImagesByUs,
      ]),
  ];

  const effortAoA = [
    ["★ CONTENT & CUSTOM IMAGES — AGENCY EFFORT (HIGHLIGHT FOR CLIENT)"],
    [],
    [
      "Message",
      "Every new page in this engagement includes content authored by us AND custom imagery prepared by us. This is a core part of the delivery effort — not only page URLs or keyword mapping.",
    ],
    [
      "Ongoing blogs",
      "As we publish / showcase more blogs, we will create and add new images tailored to each blog. Wherever a page needs stronger visuals, we supply the images.",
    ],
    [],
    [
      "Category",
      "Pages",
      "Content by us?",
      "Custom images by us?",
      "Client-facing note",
    ],
    [
      "Product",
      counts.Product,
      "Yes — full SEO copy",
      "Yes — product hero / cabin / finish / install sets",
      "Custom product photography & graphics prepared for each product page",
    ],
    [
      "Service",
      counts.Service,
      "Yes — full SEO copy",
      "Yes — service visuals as needed",
      "Copy + supporting custom imagery by us",
    ],
    [
      "Industry",
      counts.Industry,
      "Yes — full SEO copy",
      "Yes — industry-context visuals as needed",
      "Copy + supporting custom imagery by us",
    ],
    [
      "Location",
      counts.Location,
      "Yes — full SEO copy",
      "Yes — local / site visuals as needed",
      "Copy + supporting custom imagery by us",
    ],
    [
      "Blog",
      counts.Blog,
      "Yes — full articles",
      "Yes — and NEW blog-specific images ongoing",
      "★ Highlight: we keep adding custom images per blog topic as blogs go live / wherever needed",
    ],
    [
      "Landing Page",
      counts["Landing Page"],
      "Yes — full LP copy",
      "Yes — full campaign / gallery creative set",
      "Dedicated conversion LP creative package by us",
    ],
    [
      "Hub",
      counts.Hub,
      "Yes — hub SEO copy",
      "Yes — hub / card visuals from our asset set",
      "Category indexes written and illustrated by us",
    ],
    [
      "Legal / Utility",
      counts["Legal / Utility"],
      "Yes — page copy",
      "Brand / layout assets as needed",
      "Privacy, Terms, Thank You pages authored by us",
    ],
    [],
    ["TOTAL NEW PAGES COVERED", newTotal, "All include our content effort; imagery as described above"],
  ];

  const existingAoA = [
    ["Page Name", "Slug", "URL Path", "Type", "Notes"],
    ...existing.map((e) => [e[0], e[1], e[2], "Existing / basic site page", e[3]]),
  ];

  const wb = XLSX.utils.book_new();

  const summaryWs = XLSX.utils.aoa_to_sheet(summaryAoA);
  summaryWs["!cols"] = [{ wch: 36 }, { wch: 80 }, { wch: 50 }];
  XLSX.utils.book_append_sheet(wb, summaryWs, "Summary");

  const effortWs = XLSX.utils.aoa_to_sheet(effortAoA);
  effortWs["!cols"] = [
    { wch: 18 },
    { wch: 10 },
    { wch: 28 },
    { wch: 42 },
    { wch: 70 },
  ];
  XLSX.utils.book_append_sheet(wb, effortWs, "Content & Images Effort");

  const detailWs = XLSX.utils.aoa_to_sheet(detailAoA);
  detailWs["!cols"] = detailHeaders.map((h) => ({
    wch: Math.min(48, Math.max(12, h.length + 2)),
  }));
  // Make the agency-effort column wider for client readability
  detailWs["!cols"][15] = { wch: 72 };
  XLSX.utils.book_append_sheet(wb, detailWs, "All New Pages");

  const monthlyWs = XLSX.utils.aoa_to_sheet(monthlyAoA);
  monthlyWs["!cols"] = [
    { wch: 20 },
    { wch: 8 },
    { wch: 14 },
    { wch: 14 },
    { wch: 52 },
    { wch: 30 },
    { wch: 38 },
    { wch: 28 },
    { wch: 55 },
    { wch: 16 },
    { wch: 16 },
    { wch: 72 },
    { wch: 55 },
    { wch: 55 },
  ];
  XLSX.utils.book_append_sheet(wb, monthlyWs, "Monthly Showcase Plan");

  const keywordWs = XLSX.utils.aoa_to_sheet(keywordAoA);
  keywordWs["!cols"] = [
    { wch: 42 },
    { wch: 14 },
    { wch: 30 },
    { wch: 70 },
    { wch: 18 },
    { wch: 18 },
    { wch: 10 },
    { wch: 72 },
  ];
  XLSX.utils.book_append_sheet(wb, keywordWs, "Keywords & Word Counts");

  const existingWs = XLSX.utils.aoa_to_sheet(existingAoA);
  existingWs["!cols"] = [
    { wch: 22 },
    { wch: 18 },
    { wch: 24 },
    { wch: 28 },
    { wch: 50 },
  ];
  XLSX.utils.book_append_sheet(wb, existingWs, "Existing Basic Pages");

  const outPath = path.join(
    root,
    "docs",
    "Relicomp-Website-Page-Inventory-SEO-Delivery.xlsx"
  );
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  XLSX.writeFile(wb, outPath);

  console.log("Wrote:", outPath);
  console.log("New pages:", newTotal);
  console.log("Counts:", counts);
  console.log("Showcase months @ 4/mo:", Math.ceil(newTotal / 4));
  console.log(
    "Word count samples:",
    sorted
      .filter((r) => typeof r.actualWordCount === "number")
      .slice(0, 8)
      .map((r) => `${r.slug}:${r.actualWordCount}`)
      .join(" | ")
  );
}

main();
