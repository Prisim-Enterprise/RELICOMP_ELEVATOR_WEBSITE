"use client";

import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type LandingPromoModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGetPrice: () => void;
};

export function LandingPromoModal({
  open,
  onOpenChange,
  onGetPrice,
}: LandingPromoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "gap-0 overflow-hidden border-0 border-primary/15 p-0 shadow-2xl",
          "w-[calc(100%-1.25rem)] max-w-md max-h-[min(92dvh,640px)]",
          /* Mobile: bottom sheet so it never overflows or clips */
          "fixed left-1/2 top-auto bottom-0 translate-x-[-50%] translate-y-0",
          "rounded-b-none rounded-t-2xl",
          "data-[state=open]:slide-in-from-bottom-full data-[state=closed]:slide-out-to-bottom-full",
          /* Desktop/tablet: centered card */
          "sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%] sm:rounded-2xl",
          "sm:data-[state=open]:slide-in-from-bottom-0 sm:data-[state=closed]:slide-out-to-bottom-0",
          "sm:data-[state=open]:zoom-in-95 sm:data-[state=closed]:zoom-out-95",
          /* Close control sits on red header  -  force light styling */
          "[&>button:last-child]:right-3 [&>button:last-child]:top-3",
          "[&>button:last-child]:rounded-full [&>button:last-child]:p-1.5",
          "[&>button:last-child]:bg-white/15 [&>button:last-child]:text-white",
          "[&>button:last-child]:opacity-100 [&>button:last-child]:ring-offset-0",
          "[&>button:last-child]:hover:bg-white/25 [&>button:last-child]:hover:opacity-100",
          "[&>button:last-child]:focus:ring-white/40"
        )}
      >
        <div className="flex max-h-[min(92dvh,640px)] flex-col overflow-y-auto overscroll-contain">
          <div className="bg-gradient-to-r from-primary to-red-700 px-4 pb-5 pt-5 text-white sm:px-6 sm:pt-5">
            <p className="pr-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/75">
              Limited slots this week
            </p>
            <DialogHeader className="space-y-2 text-left">
              <DialogTitle className="mt-1 pr-6 text-lg font-bold leading-snug text-white sm:text-xl">
                Free Site Visit + Price in 24 Hours
              </DialogTitle>
              <DialogDescription className="text-sm leading-relaxed text-white/80">
                Our Bangalore engineer will measure your space and share an exact
                quote, with no obligation.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div
            className="space-y-4 px-4 py-5 sm:px-6"
            style={{
              paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))",
            }}
          >
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Manufactured at Magadi, Bengaluru</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>600+ installations across Karnataka</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Engineer calls within 4 working hours</span>
              </li>
            </ul>

            <Button
              type="button"
              size="lg"
              className="h-12 w-full rounded-xl text-base font-semibold"
              onClick={() => {
                trackEvent("cta_click", {
                  cta_id: "promo_modal_get_price",
                  page_type: "landing",
                  slug: "home-elevators-bangalore",
                  destination: "quote_modal",
                });
                onOpenChange(false);
                onGetPrice();
              }}
            >
              Get My Price
              <ArrowRight className="h-4 w-4" />
            </Button>

            <button
              type="button"
              className="w-full py-1 text-center text-xs text-muted-foreground underline-offset-2 hover:underline"
              onClick={() => {
                trackEvent("promo_modal_dismiss", {
                  page: "home-elevators-bangalore",
                });
                onOpenChange(false);
              }}
            >
              Maybe later
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
