"use client";

import { useEffect } from "react";

/**
 * Loads GTM, gtag, and Clarity only in production (not localhost) to avoid
 * CORS and 404 errors when developing locally.
 */
function loadAnalytics() {
  const gtmId = "GTM-WXR3NKJ";
  const w = window as unknown as Record<string, unknown> & {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    gtag_report_conversion?: (url: string) => boolean;
  };

  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  const gtm = document.createElement("script");
  gtm.async = true;
  gtm.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(gtm);

  const gtagScript = document.createElement("script");
  gtagScript.async = true;
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-10818998252";
  document.head.appendChild(gtagScript);

  // gtag.js expects an Arguments object, not a rest array.
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", "AW-10818998252");
  w.gtag_report_conversion = function (url: string) {
    const callback = function () {
      if (typeof url !== "undefined") window.location.href = url;
    };
    w.gtag("event", "conversion", {
      send_to: "AW-10818998252/V06OCLa66-IbEOyf86Yo",
      event_callback: callback,
    });
    return false;
  };

  const clarity = document.createElement("script");
  clarity.async = true;
  clarity.src = "https://www.clarity.ms/tag/welhvj8chn";
  document.head.appendChild(clarity);
}

export default function AnalyticsScripts() {
  useEffect(() => {
    if (typeof window === "undefined" || window.location.origin.includes("localhost")) {
      return;
    }

    let loaded = false;
    const start = () => {
      if (loaded) return;
      loaded = true;
      cleanup();
      loadAnalytics();
    };

    const onInteract = () => start();
    window.addEventListener("pointerdown", onInteract, { once: true, passive: true });
    window.addEventListener("keydown", onInteract, { once: true });
    const timer = window.setTimeout(start, 8000);

    function cleanup() {
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.clearTimeout(timer);
    }

    return cleanup;
  }, []);

  return null;
}
