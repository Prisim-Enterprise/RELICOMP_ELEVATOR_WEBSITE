import type { Metadata } from "next";
import HomeElevatorsBangalore from "@/views/HomeElevatorsBangalore";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  homeElevatorBangaloreFaqsSchema,
  homeElevatorsBangalorePath,
  homeElevatorsBangaloreSeo,
} from "@/content/landing/home-elevators-bangalore";
import { brand, branches, socialLinks } from "@/content/site";
import {
  buildFaqJsonLd,
  buildOrganizationJsonLd,
} from "@/lib/seo/jsonld";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: {
    absolute: homeElevatorsBangaloreSeo.title,
  },
  description: homeElevatorsBangaloreSeo.description,
  keywords: [...homeElevatorsBangaloreSeo.keywords],
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: homeElevatorsBangalorePath,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: absoluteUrl(homeElevatorsBangalorePath),
    siteName: SITE_NAME,
    title: homeElevatorsBangaloreSeo.title,
    description: homeElevatorsBangaloreSeo.description,
    images: [
      {
        url: absoluteUrl(homeElevatorsBangaloreSeo.ogImage),
        width: 1200,
        height: 630,
        alt: "Relicomp home elevators manufactured in Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeElevatorsBangaloreSeo.title,
    description: homeElevatorsBangaloreSeo.description,
    images: [absoluteUrl(homeElevatorsBangaloreSeo.ogImage)],
  },
};

function buildLocalBusinessLd() {
  const url = absoluteUrl(homeElevatorsBangalorePath);
  const nap = branches.bangalore;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}#localbusiness`,
    name: `${SITE_NAME}: Home Elevators Bangalore`,
    description: homeElevatorsBangaloreSeo.description,
    url,
    telephone: brand.phoneTel,
    image: absoluteUrl(homeElevatorsBangaloreSeo.ogImage),
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: nap.streetAddress,
      addressLocality: nap.addressLocality,
      addressRegion: nap.addressRegion,
      postalCode: nap.postalCode,
      addressCountry: nap.addressCountry,
    },
    areaServed: [
      { "@type": "City", name: "Bengaluru" },
      { "@type": "City", name: "Bangalore" },
    ],
    sameAs: Object.values(socialLinks).filter(Boolean),
    parentOrganization: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

function buildProductLd() {
  const url = absoluteUrl(homeElevatorsBangalorePath);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Home Elevators in Bangalore",
    description: homeElevatorsBangaloreSeo.description,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    url,
    image: absoluteUrl(homeElevatorsBangaloreSeo.ogImage),
    category: "Home Elevator",
    manufacturer: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: branches.magadiFactory.streetAddress,
        addressLocality: branches.magadiFactory.addressLocality,
        addressRegion: branches.magadiFactory.addressRegion,
        postalCode: branches.magadiFactory.postalCode,
        addressCountry: branches.magadiFactory.addressCountry,
      },
    },
  };
}

export default function HomeElevatorsBangalorePage() {
  const faqLd = buildFaqJsonLd(homeElevatorBangaloreFaqsSchema);

  return (
    <>
      <JsonLd data={buildOrganizationJsonLd()} />
      <JsonLd data={buildLocalBusinessLd()} />
      <JsonLd data={buildProductLd()} />
      {faqLd && <JsonLd data={faqLd} />}
      <HomeElevatorsBangalore />
    </>
  );
}
