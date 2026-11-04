"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/email";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type SiteLeadFormProps = {
  source?: string;
  className?: string;
  id?: string;
  onSuccess?: () => void;
};

export function SiteLeadForm({
  source = "quote_modal",
  className,
  id = "site-lead-form",
  onSuccess,
}: SiteLeadFormProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
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
    if (city.trim().length < 2) {
      toast({
        title: "City required",
        description: "Please enter your city or pincode.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await sendEmail({
        name: name.trim(),
        phone: cleanedPhone,
        city: city.trim(),
        message: message.trim(),
        formType: "Website Quote Request",
        source,
        page: pathname || "/",
      });

      trackEvent("site_quote_lead", {
        page: pathname || "/",
        source,
        form_type: "Website Quote Request",
        has_message: Boolean(message.trim()),
      });

      onSuccess?.();

      const params = new URLSearchParams();
      if (name.trim()) params.set("name", name.trim());
      router.push(`/thank-you?${params.toString()}`);
    } catch (error) {
      console.error("Site lead submission error:", error);
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
    <form
      id={id}
      onSubmit={handleSubmit}
      noValidate
      className={cn("space-y-3 p-5 sm:p-6", className)}
    >
      <div>
        <h2 className="text-xl font-extrabold tracking-tight text-foreground sm:text-[1.35rem]">
          Get a free quote
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Free site survey · We respond within working hours
        </p>
      </div>

      <div className="space-y-1.5">
        <label htmlFor={`${id}-name`} className="text-xs font-semibold">
          Name *
        </label>
        <Input
          id={`${id}-name`}
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="h-10 rounded-lg"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor={`${id}-phone`} className="text-xs font-semibold">
            Mobile *
          </label>
          <Input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="10-digit mobile"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="h-10 rounded-lg"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor={`${id}-city`} className="text-xs font-semibold">
            City / pincode *
          </label>
          <Input
            id={`${id}-city`}
            name="city"
            type="text"
            autoComplete="address-level2"
            placeholder="e.g. Bangalore"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="h-10 rounded-lg"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor={`${id}-message`} className="text-xs font-semibold">
          Message (optional)
        </label>
        <Textarea
          id={`${id}-message`}
          name="message"
          rows={2}
          placeholder="Floors, product type, new build or retrofit…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={1000}
          className="min-h-[64px] resize-y rounded-lg"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full rounded-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Request free quote"
        )}
      </Button>

      <p className="text-center text-[0.72rem] leading-snug text-muted-foreground">
        No obligation · Our team will call you shortly
      </p>
    </form>
  );
}
