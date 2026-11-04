"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft, Home, Mail, Phone, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";

const ThankYou = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") ?? undefined;

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-charcoal via-secondary to-black text-white pt-32 pb-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <TextReveal>
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="relative bg-primary/10 rounded-full p-8 border-4 border-primary/30">
                    <CheckCircle2 className="h-24 w-24 text-primary" />
                  </div>
                </div>
              </div>
            </TextReveal>

            <TextReveal delay={200}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gradient">Thank You!</span>
              </h1>
            </TextReveal>

            <TextReveal delay={400}>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                {name ? (
                  <>
                    Thank you, <span className="text-primary font-semibold">{name}</span>!
                  </>
                ) : (
                  "Thank you for contacting us!"
                )}
              </p>
            </TextReveal>

            <TextReveal delay={600}>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                We've received your inquiry and our team will get back to you within 24 hours.
                We appreciate your interest in Relicomp Elevators!
              </p>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <TextReveal>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="glass-card border border-border/40 shadow-lg rounded-2xl p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-primary/10 rounded-full p-4">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 24 hours
                  </p>
                </div>

                <div className="glass-card border border-border/40 shadow-lg rounded-2xl p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-primary/10 rounded-full p-4">
                      <Phone className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Expert Consultation</h3>
                  <p className="text-sm text-muted-foreground">
                    Free site visits and expert guidance
                  </p>
                </div>

                <div className="glass-card border border-border/40 shadow-lg rounded-2xl p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-primary/10 rounded-full p-4">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Stay Connected</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll keep you updated on your inquiry
                  </p>
                </div>
              </div>
            </TextReveal>

            <TextReveal delay={200}>
              <div className="glass-card border border-border/40 shadow-lg rounded-2xl p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  What Happens Next?
                </h2>
                <div className="space-y-4 text-left max-w-2xl mx-auto">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">We Review Your Inquiry</h3>
                      <p className="text-sm text-muted-foreground">
                        Our team will carefully review your requirements and prepare a customized solution.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">We Contact You</h3>
                      <p className="text-sm text-muted-foreground">
                        Within 24 hours, one of our experts will reach out to discuss your needs in detail.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Free Site Visit</h3>
                      <p className="text-sm text-muted-foreground">
                        We'll schedule a free site visit to assess your location and provide expert recommendations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TextReveal>

            <TextReveal delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Link href="/">
                  <Button size="lg" className="rounded-full px-8">
                    <Home className="mr-2 h-5 w-5" />
                    Back to Home
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="heroOutline" size="lg" className="rounded-full px-8">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Submit Another Inquiry
                  </Button>
                </Link>
              </div>
            </TextReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYou;











