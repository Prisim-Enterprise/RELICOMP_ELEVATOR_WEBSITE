import type { Metadata } from "next";
import { Suspense } from "react";
import ThankYou from "@/views/ThankYou";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Thank You | Relicomp Elevators",
  description:
    "Thank you for contacting Relicomp Elevators. We will get back to you within 24 hours with expert guidance and free site visit.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-muted"><p className="text-muted-foreground">Loading...</p></div>}>
      <ThankYou />
    </Suspense>
  );
}
