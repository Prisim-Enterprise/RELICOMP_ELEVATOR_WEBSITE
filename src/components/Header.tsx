"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import relicompLogo from "@/assets/relicomp-logo.png";
import relicompLogoWhite from "@/assets/relicomp-logo-white.webp";
import { trackEvent } from "@/lib/analytics";
import { brand } from "@/content/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { getHeaderNavItems } from "@/content/publish";
import { useQuoteModal } from "@/components/quote/QuoteModalContext";

const WHATSAPP_MESSAGE =
  "Hello Relicomp Elevators! I visited your website and I'm interested in your elevator solutions (home, MRL, hydraulic, installation & AMC). Could you please share more details and a quote?";

const navItems = getHeaderNavItems();

function linkActive(pathname: string | null, path: string) {
  if (!pathname) return false;
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

/** Pages with a dark hero image/gradient behind the transparent header. */
function hasDarkHero(pathname: string | null) {
  if (!pathname) return true;
  // Marketing pages share the dark commercial PageHero.
  // Individual blog posts use a plain light header (not dark).
  if (!pathname) return true;
  if (pathname === "/") return true;
  if (pathname === "/blog") return true;
  if (pathname.startsWith("/blog/")) return false;

  const darkPrefixes = [
    "/products",
    "/services",
    "/locations",
    "/industries",
    "/about",
    "/contact",
    "/projects",
    "/terms-of-service",
    "/privacy-policy",
    "/thank-you",
  ];
  return darkPrefixes.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
}

function navTextClass(solid: boolean, active: boolean) {
  if (active) return "text-primary";
  if (solid) return "text-foreground";
  return "text-white drop-shadow-lg";
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(
    null
  );
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileSection(null);
  }, [pathname]);

  const solid =
    isScrolled || isMobileMenuOpen || !hasDarkHero(pathname);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? isMobileMenuOpen
            ? "bg-background shadow-lg"
            : "bg-background/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="ml-2 flex items-center space-x-2 md:ml-4 md:space-x-4 lg:ml-8 xl:ml-12"
          >
            <img
              src={solid ? relicompLogo.src : relicompLogoWhite.src}
              alt="Relicomp Elevators"
              width={160}
              height={80}
              className={`h-14 w-auto max-h-20 transition-opacity duration-300 md:h-16 lg:h-20 ${
                solid ? "" : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              }`}
            />
          </Link>

          <nav
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const active = linkActive(pathname, item.path);
              if (!item.children) {
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`px-2 xl:px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${navTextClass(solid, active)}`}
                  >
                    {item.name}
                  </Link>
                );
              }

              return (
                <div key={item.path} className="relative group">
                  <Link
                    href={item.path}
                    className={`inline-flex items-center gap-0.5 px-2 xl:px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${navTextClass(solid, active)}`}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <ChevronDown className="h-3.5 w-3.5 opacity-80" />
                  </Link>
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-150 absolute left-0 top-full pt-2 min-w-[220px] z-50">
                    <div className="rounded-xl border border-border bg-background shadow-lg py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          className={`block px-4 py-2 text-sm transition-colors hover:bg-muted hover:text-primary ${
                            linkActive(pathname, child.path)
                              ? "text-primary font-medium"
                              : "text-foreground"
                          }`}
                          onClick={() =>
                            trackEvent("nav_click", {
                              section: item.name.toLowerCase(),
                              destination: child.path,
                            })
                          }
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            <a
              href={`tel:${brand.phoneTel}`}
              onClick={(e) => {
                e.preventDefault();
                trackEvent("phone_click", { location: "header" });
                if (
                  typeof window !== "undefined" &&
                  (
                    window as unknown as {
                      gtag_report_conversion?: (url: string) => void;
                    }
                  ).gtag_report_conversion
                ) {
                  (
                    window as unknown as {
                      gtag_report_conversion: (url: string) => void;
                    }
                  ).gtag_report_conversion(`tel:${brand.phoneTel}`);
                } else {
                  window.location.href = `tel:${brand.phoneTel}`;
                }
              }}
              className="flex items-center space-x-1.5 text-sm shrink-0"
              aria-label={`Call ${brand.phoneDisplay}`}
            >
              <Phone
                className={`h-4 w-4 ${solid ? "text-primary" : "text-white drop-shadow-lg"}`}
              />
              <span
                className={`font-medium hidden xl:inline ${solid ? "text-foreground" : "text-white drop-shadow-lg"}`}
              >
                {brand.phoneDisplay}
              </span>
            </a>
            <a
              href={`https://wa.me/${brand.whatsappE164}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "header" })}
              className="flex items-center space-x-1.5 text-sm shrink-0"
              aria-label={`WhatsApp ${brand.whatsappDisplay}`}
            >
              <WhatsAppIcon
                className={`h-4 w-4 ${solid ? "text-[#25D366]" : "text-white drop-shadow-lg"}`}
              />
              <span
                className={`font-medium hidden xl:inline ${solid ? "text-foreground" : "text-white drop-shadow-lg"}`}
              >
                {brand.whatsappDisplay}
              </span>
            </a>
            <Button
              type="button"
              variant="default"
              size="lg"
              className="rounded-full"
              onClick={() => {
                trackEvent("cta_click", {
                  cta_id: "header_get_quote",
                  page_type: "nav",
                  slug: pathname || "",
                  destination: "quote_modal",
                });
                openQuoteModal("header_get_quote");
              }}
            >
              Get Quote
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu
                className={`h-6 w-6 ${solid ? "text-foreground" : "text-white drop-shadow-lg"}`}
              />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav
              className="flex flex-col space-y-1"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => {
                const active = linkActive(pathname, item.path);
                if (!item.children) {
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-2 py-2.5 text-sm font-medium ${
                        active ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                }

                const sectionOpen = openMobileSection === item.name;
                return (
                  <div key={item.path} className="border-b border-border/40 pb-1">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-2 py-2.5 text-sm font-medium text-foreground"
                      onClick={() =>
                        setOpenMobileSection(sectionOpen ? null : item.name)
                      }
                      aria-expanded={sectionOpen}
                    >
                      <span className={active ? "text-primary" : undefined}>
                        {item.name}
                      </span>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${sectionOpen ? "rotate-90" : ""}`}
                      />
                    </button>
                    {sectionOpen && (
                      <div className="pb-2 pl-3 flex flex-col gap-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            href={child.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`px-2 py-2 text-sm ${
                              linkActive(pathname, child.path)
                                ? "text-primary font-medium"
                                : "text-muted-foreground"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="flex flex-col gap-2 px-2 pt-4 mt-2 border-t border-border/40">
                <a
                  href={`tel:${brand.phoneTel}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    trackEvent("phone_click", { location: "header_mobile" });
                    if (
                      typeof window !== "undefined" &&
                      (
                        window as unknown as {
                          gtag_report_conversion?: (url: string) => void;
                        }
                      ).gtag_report_conversion
                    ) {
                      (
                        window as unknown as {
                          gtag_report_conversion: (url: string) => void;
                        }
                      ).gtag_report_conversion(`tel:${brand.phoneTel}`);
                    } else {
                      window.location.href = `tel:${brand.phoneTel}`;
                    }
                  }}
                  className="flex items-center gap-2 py-2 text-sm font-medium text-foreground"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {brand.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${brand.whatsappE164}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    trackEvent("whatsapp_click", { location: "header_mobile" });
                  }}
                  className="flex items-center gap-2 py-2 text-sm font-medium text-foreground"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  {brand.whatsappDisplay}
                </a>
              </div>
              <div className="pt-3">
                <Button
                  type="button"
                  variant="default"
                  className="w-full rounded-full"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    trackEvent("cta_click", {
                      cta_id: "header_mobile_get_quote",
                      page_type: "nav",
                      slug: pathname || "",
                      destination: "quote_modal",
                    });
                    openQuoteModal("header_mobile_get_quote");
                  }}
                >
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
