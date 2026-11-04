import { priceDisclaimer } from "@/content/site";

type PriceDisclaimerProps = {
  className?: string;
};

/** Always render when price ranges are shown (legal / brand rule). */
export function PriceDisclaimer({ className }: PriceDisclaimerProps) {
  return (
    <p
      className={
        className ??
        "mt-3 text-sm text-muted-foreground border-l-2 border-primary/40 pl-3"
      }
    >
      {priceDisclaimer}
    </p>
  );
}
