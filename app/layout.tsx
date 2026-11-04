import type { Metadata, Viewport } from "next";
import AnalyticsScripts from "@/components/AnalyticsScripts";
import { FacebookPixel } from "@/components/FacebookPixel";
import { SITE_NAME, SITE_URL } from "@/lib/seo/site";
import { inlinedCss } from "@/generated/inlined-css";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  alternates: {
    canonical: "./",
  },

  title: {
    default: "Relicomp Elevators | Best Elevator Company in Bangalore & Mysore",
    template: "%s | Relicomp Elevators",
  },
  description:
    "Trusted elevator company in Bangalore & Mysore with 16+ years of excellence. 600+ installations across Karnataka & Tamil Nadu. Home elevators, MRL elevators, installation & service.",
  authors: [{ name: "Relicomp Elevators Pvt. Ltd." }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Relicomp Elevators - Best Elevator Company in Bangalore & Mysore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    // Add your verification tokens if needed
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        {process.env.NODE_ENV === "production" ? (
          <style dangerouslySetInnerHTML={{ __html: inlinedCss }} />
        ) : null}
        {process.env.NODE_ENV === "production" ? <FacebookPixel /> : null}
        <AnalyticsScripts />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WXR3NKJ"
            height="0"
            width="0"
            className="hidden h-0 w-0 border-0"
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
