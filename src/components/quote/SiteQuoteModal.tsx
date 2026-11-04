"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SiteLeadForm } from "@/components/quote/SiteLeadForm";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type SiteQuoteModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
};

export function SiteQuoteModal({
  open,
  onOpenChange,
  source = "modal",
}: SiteQuoteModalProps) {
  const handleOpenChange = (next: boolean) => {
    if (next) {
      trackEvent("quote_modal_open", {
        page_type: "site",
        source,
      });
    } else {
      trackEvent("quote_modal_close", {
        page_type: "site",
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
          <DialogTitle>Get a free quote</DialogTitle>
          <DialogDescription>
            Request a free site survey and quote from Relicomp Elevators
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[92dvh] overflow-y-auto overscroll-contain border-t-4 border-primary bg-card">
          <SiteLeadForm
            id="site-lead-form-modal"
            source={`quote_modal:${source}`}
            onSuccess={() => onOpenChange(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
