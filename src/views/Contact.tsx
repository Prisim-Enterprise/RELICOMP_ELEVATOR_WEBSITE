"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import {
  PageHero,
  pageHeroBreadcrumbClass,
} from "@/components/content/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/email";
import { brand, headOfficeAddress } from "@/content/site";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const branches = [
  {
    title: "Head Office",
    location: "Bangalore",
    address:
      "#7, 2nd Floor, S.V. Arcade, Income Tax Layout, Chandra Layout, Vijayanagar, Bengaluru, Karnataka 560040",
    phone: brand.phoneTel,
    mapUrl: "https://maps.app.goo.gl/2WGTCshaYV1Wh2c29",
  },
  {
    title: "Branch Office",
    location: "Mysuru",
    address:
      "#9, 1st Floor, 28th Block, Srirampura 2nd Stage, Madhuvana Layout, Mysuru, Karnataka 560034",
    phone: brand.phoneTel,
    mapUrl: "https://maps.app.goo.gl/JF7axH6nRB6RNeww9",
  },
  {
    title: "Branch Office",
    location: "Jigani",
    address:
      "#7, 1st Floor, Otis Circle, Jigani Industrial Area, Jigani, Anekal Taluk, Bengaluru, Karnataka 560105",
    phone: brand.phoneTel,
    mapUrl: "https://maps.app.goo.gl/2J6X5YvmHMJH5dBj8",
  },
  {
    title: "Factory",
    location: "Magadi Road, Bengaluru",
    address:
      "#145, Dorai Shama Ventures, Vani School Road, Chikkagollarahatti, Magadi Main Road, Bengaluru, Karnataka 560091",
    phone: brand.phoneTel,
    mapUrl: "https://maps.app.goo.gl/AGH7imxcckxguaceA",
  },
];

const whyChoose = [
  "16+ years of industry experience",
  "600+ successful installations across Karnataka & Tamil Nadu",
  "Free site visits and expert consultations",
  "24/7 breakdown support & emergency services",
];

const getMapEmbedUrl = (address: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed&zoom=15`;

const WHATSAPP_URL = `https://wa.me/${brand.whatsappE164}?text=${encodeURIComponent(
  "Hello Relicomp Elevators! I visited your website and I'm interested in your elevator solutions (home, MRL, hydraulic, installation & AMC). Could you please share more details and a quote?"
)}`;

function handleTelClick(e: React.MouseEvent<HTMLAnchorElement>, tel: string) {
  e.preventDefault();
  const telUrl = `tel:${tel}`;
  if (
    (
      window as unknown as {
        gtag_report_conversion?: (u: string) => void;
      }
    ).gtag_report_conversion
  ) {
    (
      window as unknown as {
        gtag_report_conversion: (u: string) => void;
      }
    ).gtag_report_conversion(telUrl);
  } else {
    window.location.href = telUrl;
  }
}

const Contact = () => {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(0);
  const [prefillApplied, setPrefillApplied] = useState(false);

  useEffect(() => {
    if (prefillApplied) return;
    const topic = searchParams.get("topic");
    const city = searchParams.get("city");
    const product = searchParams.get("product");
    if (!topic && !city && !product) {
      setPrefillApplied(true);
      return;
    }

    const parts: string[] = [];
    if (product) parts.push(`Product interest: ${product.replace(/-/g, " ")}`);
    if (topic) parts.push(`Topic: ${topic.replace(/-/g, " ")}`);
    parts.push(
      "Please share floors, capacity (2/4 person), and shaft/new-build vs retrofit if known."
    );

    setFormData((prev) => ({
      ...prev,
      city: city?.trim() || prev.city,
      message: prev.message.trim() ? prev.message : parts.join("\n"),
    }));
    setPrefillApplied(true);
  }, [searchParams, prefillApplied]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await sendEmail({
        name: formData.name,
        phone: formData.phone,
        city: formData.city,
        message: formData.message,
        formType: "Contact Form",
        source: "contact_page",
        page: "/contact",
      });

      const params = new URLSearchParams();
      if (formData.name) params.set("name", formData.name);
      router.push(`/thank-you?${params.toString()}`);
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const activeBranch = branches[selectedBranch] ?? branches[0];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        <PageHero innerClassName="pb-10 sm:pb-12">
          <PageBreadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Contact", href: "/contact" },
            ]}
            className={pageHeroBreadcrumbClass}
          />

          <div className="grid w-full min-w-0 gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-10">
            <div className="min-w-0">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Contact
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight break-words sm:text-4xl md:text-5xl">
                Get in touch
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
 Inquiries, installations, service, or maintenance. We respond
                quickly and offer free site visits across our service regions.
              </p>
            </div>

            {/* Contact chips  -  full-width stack; readable on dark hero + textures */}
            <ul className="flex w-full min-w-0 flex-col gap-2.5">
              <li className="min-w-0">
                <a
                  href={`tel:${brand.phoneTel}`}
                  onClick={(e) => handleTelClick(e, brand.phoneTel)}
                  className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/20 bg-black/35 px-3.5 py-3 shadow-sm backdrop-blur-md transition-colors hover:border-white/35 hover:bg-black/50 sm:px-4 sm:py-3.5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/60">
                      Call
                    </span>
                    <span className="mt-0.5 block break-all text-sm font-bold leading-snug text-white sm:text-base">
                      {brand.phoneDisplay}
                    </span>
                  </span>
                </a>
              </li>
              <li className="min-w-0">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/20 bg-black/35 px-3.5 py-3 shadow-sm backdrop-blur-md transition-colors hover:border-white/35 hover:bg-black/50 sm:px-4 sm:py-3.5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-md">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/60">
                      WhatsApp
                    </span>
                    <span className="mt-0.5 block break-all text-sm font-bold leading-snug text-white sm:text-base">
                      {brand.whatsappDisplay}
                    </span>
                  </span>
                </a>
              </li>
              <li className="min-w-0">
                <a
                  href="#contact-form"
                  className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/20 bg-black/35 px-3.5 py-3 shadow-sm backdrop-blur-md transition-colors hover:border-white/35 hover:bg-black/50 sm:px-4 sm:py-3.5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/60">
                      Message
                    </span>
                    <span className="mt-0.5 block text-sm font-bold leading-snug text-white sm:text-[0.9375rem]">
                      Use the contact form
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </PageHero>

        {/* Form + details */}
        <section className="border-b border-border py-10 sm:py-12 lg:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              {/* Form */}
              <div className="min-w-0 rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6 lg:p-8">
                <h2 className="text-xl font-bold sm:text-2xl">Request a quote</h2>
                <p className="mt-1 text-sm text-muted-foreground">
 Share a few details. We typically respond within 24 hours.
                </p>

                <form id="contact-form" onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Name *
                    </label>
                    <Input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="h-12 rounded-xl"
                      placeholder="Your full name"
                      autoComplete="name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-sm font-medium"
                    >
                      Phone number *
                    </label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="h-12 rounded-xl"
                      placeholder="Your contact number"
                      autoComplete="tel"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-city"
                      className="mb-2 block text-sm font-medium"
                    >
                      City / pincode *
                    </label>
                    <Input
                      id="contact-city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="h-12 rounded-xl"
                      placeholder="Your location"
                      autoComplete="address-level2"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-sm font-medium"
                    >
                      Message / requirement
                    </label>
                    <Textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="min-h-32 rounded-xl"
                      placeholder="Floors, capacity, new build or retrofit…"
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
                        Sending...
                      </>
                    ) : (
                      "Submit inquiry"
                    )}
                  </Button>
                </form>

                <div className="mt-5 flex gap-3 rounded-2xl border border-border bg-muted/40 p-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold">Quick response</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      Free site visits across our service regions. We typically
                      reply within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-primary/15 bg-primary/5 p-4 sm:p-5">
                  <h3 className="font-bold">Why choose Relicomp?</h3>
                  <ul className="mt-3 space-y-2">
                    {whyChoose.map((item) => (
                      <li key={item} className="flex gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Side info + branches */}
              <div className="min-w-0 space-y-6">
                <div className="speakable-contact rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6">
                  <h2 className="text-xl font-bold sm:text-2xl">
                    Contact details
                  </h2>
                  <ul className="mt-5 space-y-4">
                    <li className="flex gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Phone className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold">Phone</p>
                        <a
                          href={`tel:${brand.phoneTel}`}
                          onClick={(e) => handleTelClick(e, brand.phoneTel)}
                          className="mt-0.5 block text-sm text-muted-foreground hover:text-primary"
                        >
                          {brand.phoneDisplay}
                        </a>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                        <WhatsAppIcon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold">WhatsApp</p>
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-0.5 block text-sm text-muted-foreground hover:text-primary"
                        >
                          {brand.whatsappDisplay}
                        </a>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Mail className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold">Message</p>
                        <a
                          href="#contact-form"
                          className="mt-0.5 block text-sm text-muted-foreground hover:text-primary"
                        >
                          Use the contact form
                        </a>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold">Head office</p>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {headOfficeAddress}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6">
                  <h2 className="text-xl font-bold sm:text-2xl">Our branches</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tap a location to preview the map
                  </p>

                  <div
                    role="tablist"
                    aria-label="Branch locations"
                    className="mt-4 flex max-w-full gap-2 overflow-x-auto overscroll-x-contain pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  >
                    {branches.map((branch, index) => {
                      const active = selectedBranch === index;
                      return (
                        <button
                          key={`${branch.title}-${branch.location}`}
                          type="button"
                          role="tab"
                          aria-selected={active}
                          onClick={() => setSelectedBranch(index)}
                          className={cn(
                            "shrink-0 rounded-full px-3.5 py-2 text-xs font-semibold transition-all sm:text-sm",
                            active
                              ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                              : "border border-border bg-muted/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                          )}
                        >
                          {branch.location}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-4 overflow-hidden rounded-2xl border border-border">
                    <div className="relative h-52 bg-muted sm:h-64">
                      <iframe
                        src={getMapEmbedUrl(activeBranch.address)}
                        width="100%"
                        height="100%"
                        className="h-full w-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map for ${activeBranch.title} - ${activeBranch.location}`}
                      />
                      <a
                        href={activeBranch.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute right-2 top-2 z-10 inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 sm:text-sm"
                      >
                        Open in Maps
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                    <div className="border-t border-border bg-background p-4">
                      <p className="text-sm font-bold">
                        {activeBranch.title}
                        <span className="text-primary">
                          {" "}
                          · {activeBranch.location}
                        </span>
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {activeBranch.address}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-3 text-sm">
                        <a
                          href="#contact-form"
                          className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                        >
                          <Mail className="h-4 w-4" />
                          Send a message
                        </a>
                        <a
                          href={activeBranch.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                        >
                          <MapPin className="h-4 w-4" />
                          Directions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA strip */}
        <section className="bg-muted/40 py-10 sm:py-12">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-xl font-bold sm:text-2xl">
              Prefer to explore first?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Browse elevators or see where we work across South India.
            </p>
            <div className="mt-6 flex w-full flex-col justify-center gap-3 sm:flex-row">
              <Button asChild className="w-full rounded-full sm:w-auto">
                <Link href="/products">View products</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full sm:w-auto"
              >
                <Link href="/locations">Our locations</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
