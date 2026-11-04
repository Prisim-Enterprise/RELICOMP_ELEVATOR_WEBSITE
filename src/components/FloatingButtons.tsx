"use client";

import { Phone } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { trackEvent } from "@/lib/analytics";

const CALL_NUMBERS: { tel: string; display: string }[] = [
  { tel: "+918037404826", display: "8037404826" },
];
const WHATSAPP_NUMBER = "918792496622"; // 91 + 87924 96622
const whatsappMessage =
  "Hello Relicomp Elevators! I visited your website and I'm interested in your elevator solutions (home, MRL, hydraulic, installation & AMC). Could you please share more details and a quote?";

const FloatingButtons = () => {
  const handleCall = (tel: string) => {
    trackEvent("click_call", { source: "floating_button", number: tel });
    const telUrl = `tel:${tel}`;
    if (typeof window !== "undefined" && (window as unknown as { gtag_report_conversion?: (u: string) => void }).gtag_report_conversion) {
      (window as unknown as { gtag_report_conversion: (u: string) => void }).gtag_report_conversion(telUrl);
    } else {
      window.location.href = telUrl;
    }
  };

  return (
    <TooltipProvider>
      {/* Call Button - Left Side (single icon, dropdown with both numbers) */}
      {/* Hidden on mobile  -  SiteMobileStickyBar covers Call / WhatsApp / Quote */}
      <div className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom,0.75rem))] left-[max(0.75rem,env(safe-area-inset-left,0.75rem))] z-50 hidden md:block">
        <DropdownMenu>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="group flex min-w-[44px] min-h-[44px] w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 items-center justify-center bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:animate-none active:scale-95"
                  aria-label="Call us"
                >
                  <Phone className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
                </button>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={8} className="bg-charcoal text-white border-primary max-w-[calc(100vw-2rem)]">
              <p>Call Us</p>
            </TooltipContent>
          </Tooltip>
          <DropdownMenuContent
            side="right"
            align="start"
            sideOffset={8}
            collisionPadding={16}
            className="min-w-[180px] max-w-[calc(100vw-2rem)]"
          >
            {CALL_NUMBERS.map(({ tel, display }) => (
              <DropdownMenuItem
                key={tel}
                className="cursor-pointer gap-2"
                onSelect={() => handleCall(tel)}
              >
                <Phone className="h-4 w-4" />
                {display}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* WhatsApp Button - Right Side (desktop only; mobile uses sticky bar) */}
      <div className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom,0.75rem))] right-[max(0.75rem,env(safe-area-inset-right,0.75rem))] z-50 hidden md:block">
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("click_whatsapp", { source: "floating_button" })
              }
              className="group flex min-w-[44px] min-h-[44px] w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 items-center justify-center bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:animate-none active:scale-95"
              aria-label="WhatsApp us"
            >
              <WhatsAppIcon className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 flex-shrink-0" />
            </a>
          </TooltipTrigger>
          <TooltipContent side="left" sideOffset={8} className="bg-charcoal text-white border-[#25D366] max-w-[calc(100vw-2rem)]">
            <p>WhatsApp Us</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default FloatingButtons;
