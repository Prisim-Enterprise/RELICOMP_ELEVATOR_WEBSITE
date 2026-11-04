import type { Metadata } from "next";
import localFont from "next/font/local";
import { LandingProviders } from "@/components/landing/LandingProviders";

// Self-hosted to keep production builds deterministic and offline-safe
// (avoids fetching from Google Fonts at build time).
const lpDisplay = localFont({
  src: "../fonts/Marcellus-latin.woff2",
  weight: "400",
  variable: "--font-lp-display",
  display: "swap",
});

// Archivo latin is a variable font; the single file covers weights 400-700.
const lpBody = localFont({
  src: "../fonts/Archivo-latin.woff2",
  weight: "400 700",
  variable: "--font-lp-body",
  display: "swap",
});

/**
 * Shared shell for all conversion landing pages under /lp.
 * These pages are intentionally isolated from the main site:
 * no nav, footer, floating buttons, or internal linking, and
 * they are excluded from indexing and the sitemap.
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${lpDisplay.variable} ${lpBody.variable} lp-page`}>
      <LandingProviders>{children}</LandingProviders>
    </div>
  );
}
