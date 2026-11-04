"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import { QuoteModalProvider } from "@/components/quote/QuoteModalContext";

export default function MainProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <QuoteModalProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <FloatingButtons />
        {children}
      </QuoteModalProvider>
    </TooltipProvider>
  );
}
