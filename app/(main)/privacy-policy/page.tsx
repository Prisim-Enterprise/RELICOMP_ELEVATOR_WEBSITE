import type { Metadata } from "next";
import PrivacyPolicy from "@/views/PrivacyPolicy";


export const metadata: Metadata = {
  title: "Privacy Policy | Relicomp Elevators",
  description:
    "Read the Privacy Policy of Relicomp Elevators Pvt. Ltd. Learn how we collect, use, and protect your personal information when you use our website or submit an inquiry.",
  openGraph: {
    title: "Privacy Policy | Relicomp Elevators",
    description:
      "How Relicomp Elevators collects, uses, and protects your personal information.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Relicomp Elevators",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
