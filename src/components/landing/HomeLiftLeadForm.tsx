"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/email";
import { trackEvent } from "@/lib/analytics";
import { brand } from "@/content/site";
import { homeElevatorsBangalorePath } from "@/content/landing/home-elevators-bangalore";
import { cn } from "@/lib/utils";

const FLOOR_OPTIONS = ["G+1", "G+2", "G+3", "G+4", "G+5", "G+6"] as const;

const PHONE_DISPLAY = "80374 04826";
const WHATSAPP_URL = `https://wa.me/${brand.whatsappE164}?text=${encodeURIComponent(
  "Hello Relicomp! I'm interested in a home elevator for my house in Bangalore."
)}`;

type HomeLiftLeadFormProps = {
  className?: string;
  id?: string;
  /** CTA / placement that owns this form, e.g. hero_form, quote_modal:promo_modal */
  source?: string;
};

export function HomeLiftLeadForm({
  className,
  id = "lead-form",
  source = "hero_form",
}: HomeLiftLeadFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [floors, setFloors] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const cleanedPhone = phone.replace(/\D/g, "");
    if (name.trim().length < 2) {
      toast({
        title: "Name required",
        description: "Please enter your full name.",
        variant: "destructive",
      });
      return;
    }
    if (cleanedPhone.length < 10) {
      toast({
        title: "Valid mobile required",
        description: "Please enter a 10-digit mobile number.",
        variant: "destructive",
      });
      return;
    }
    if (!floors) {
      toast({
        title: "Select floors",
        description: "Please choose number of floors.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const page = homeElevatorsBangalorePath;

    try {
      await sendEmail({
        name: name.trim(),
        phone: cleanedPhone,
        city: "Bangalore",
        pincode: pincode.trim(),
        floors,
        message: message.trim(),
        formType: "Home Lift Lead - Bangalore",
        source,
        page,
      });

      trackEvent("home_lift_lead", {
        floors,
        pincode: pincode.trim() || undefined,
        page: "home-elevators-bangalore",
        source,
        form_type: "Home Lift Lead - Bangalore",
        has_message: Boolean(message.trim()),
      });

      const params = new URLSearchParams();
      if (name.trim()) params.set("name", name.trim());
      router.push(`/thank-you?${params.toString()}`);
    } catch (error) {
      console.error("Home lift lead submission error:", error);
      toast({
        title: "Could not send",
        description:
          error instanceof Error
            ? error.message
            : "Failed to send your enquiry. Please try again or call us.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div id={id} className={cn("form-card", className)}>
      <form onSubmit={handleSubmit} noValidate>
        <h2>Get Your Home Lift Price</h2>
        <p className="form-sub">Free site visit · reply within 24 hours</p>

        <div className="field">
          <label htmlFor={`${id}-name`}>Name</label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="field-row">
          <div className="field">
            <label htmlFor={`${id}-mobile`}>Mobile Number</label>
            <input
              id={`${id}-mobile`}
              name="mobile"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="10-digit mobile"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor={`${id}-pin`}>Pincode</label>
            <input
              id={`${id}-pin`}
              name="pincode"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder="e.g. 560040"
              maxLength={6}
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor={`${id}-floors`}>Number of Floors</label>
          <select
            id={`${id}-floors`}
            name="floors"
            value={floors}
            onChange={(e) => setFloors(e.target.value)}
            required
          >
            <option value="" disabled>
              Select floors
            </option>
            {FLOOR_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="field field-message">
          <label htmlFor={`${id}-message`}>Message (optional)</label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={2}
            placeholder="Shaft, retrofit, timeline…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={1000}
          />
        </div>

        <button
          type="submit"
          className="btn btn-brass disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>Get My Price →</>
          )}
        </button>

        <p className="microcopy">
          No obligation · Engineer calls within 4 working hours
        </p>
      </form>

      <div className="form-alt">
        <a
          href={`tel:${brand.phoneTel}`}
          onClick={() =>
            trackEvent("click_call", {
              page: "home-elevators-bangalore",
              source: `${source}_alt_call`,
            })
          }
        >
          <Phone className="h-[15px] w-[15px]" style={{ color: "#A31226" }} />
          Call {PHONE_DISPLAY}
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("click_whatsapp", {
              page: "home-elevators-bangalore",
              source: `${source}_alt_whatsapp`,
            })
          }
        >
          <WhatsAppIcon className="h-[15px] w-[15px] text-[#25D366]" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
