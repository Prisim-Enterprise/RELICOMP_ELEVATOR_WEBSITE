import type { Metadata } from "next";
import TermsOfService from "@/views/TermsOfService";


export const metadata: Metadata = {
  title: "Terms of Service | Relicomp Elevators",
  description:
    "Read the Terms of Service for the Relicomp Elevators Pvt. Ltd. website, covering use of the site, products and services, intellectual property, and governing law.",
  openGraph: {
    title: "Terms of Service | Relicomp Elevators",
    description:
      "Terms governing the use of the Relicomp Elevators website and services.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Relicomp Elevators",
  },
};

export default function TermsOfServicePage() {
  return <TermsOfService />;
}
