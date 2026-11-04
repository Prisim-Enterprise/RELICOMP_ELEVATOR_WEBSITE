"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { HomeLiftLeadForm } from "@/components/landing/HomeLiftLeadForm";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type LandingQuoteModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
};

export function LandingQuoteModal({
  open,
  onOpenChange,
  source = "modal",
}: LandingQuoteModalProps) {
  const handleOpenChange = (next: boolean) => {
    if (next) {
      trackEvent("quote_modal_open", {
        page: "home-elevators-bangalore",
        source,
      });
    } else {
      trackEvent("quote_modal_close", {
        page: "home-elevators-bangalore",
        source,
      });
    }
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className={cn(
          "gap-0 overflow-hidden border-0 p-0 shadow-2xl",
          "max-h-[92dvh] w-[calc(100%-1rem)] max-w-md",
          "fixed left-1/2 top-auto bottom-0 translate-x-[-50%] translate-y-0 rounded-b-none rounded-t-2xl",
          "data-[state=open]:slide-in-from-bottom-full data-[state=closed]:slide-out-to-bottom-full",
          "sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%] sm:rounded-2xl",
          "sm:data-[state=open]:slide-in-from-bottom-0 sm:data-[state=closed]:slide-out-to-bottom-0",
          "sm:data-[state=open]:zoom-in-95 sm:data-[state=closed]:zoom-out-95"
        )}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Get your home lift price</DialogTitle>
          <DialogDescription>
            Free site visit quote form for Bangalore home elevators
          </DialogDescription>
        </DialogHeader>
        <div className="lp-page max-h-[92dvh] overflow-y-auto overscroll-contain">
          <HomeLiftLeadForm
            id="lead-form-modal"
            className="!rounded-none !shadow-none sm:!rounded-2xl"
            source={`quote_modal:${source}`}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
