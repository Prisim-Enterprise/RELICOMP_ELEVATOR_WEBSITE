"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { SiteQuoteModal } from "@/components/quote/SiteQuoteModal";
import { SiteMobileStickyBar } from "@/components/quote/SiteMobileStickyBar";

type QuoteModalContextValue = {
  open: boolean;
  source: string;
  openQuoteModal: (source?: string) => void;
  closeQuoteModal: () => void;
};

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState("site");

  const openQuoteModal = useCallback((nextSource = "site") => {
    setSource(nextSource);
    setOpen(true);
  }, []);

  const closeQuoteModal = useCallback(() => {
    setOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      open,
      source,
      openQuoteModal,
      closeQuoteModal,
    }),
    [open, source, openQuoteModal, closeQuoteModal]
  );

  return (
    <QuoteModalContext.Provider value={value}>
      {/* Mobile sticky bar clearance so page CTAs stay tappable */}
      <div className="pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] md:pb-0">
        {children}
      </div>
      <SiteQuoteModal
        open={open}
        onOpenChange={setOpen}
        source={source}
      />
      <SiteMobileStickyBar onGetQuote={openQuoteModal} />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) {
    throw new Error("useQuoteModal must be used within QuoteModalProvider");
  }
  return ctx;
}

/** Safe for components that may render outside QuoteModalProvider (e.g. /lp). */
export function useQuoteModalOptional() {
  return useContext(QuoteModalContext);
}
