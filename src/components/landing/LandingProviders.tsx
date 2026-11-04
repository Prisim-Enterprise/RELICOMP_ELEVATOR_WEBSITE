"use client";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

export function LandingProviders({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <Toaster />
      {children}
    </TooltipProvider>
  );
}
