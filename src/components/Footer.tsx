"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import relicompLogo from "@/assets/relicomp-logo-white.webp";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  getFooterQuickLinks,
  getFooterServiceLinks,
  isPublished,
} from "@/content/publish";
import { headOfficeAddress, socialLinks } from "@/content/site";

const Footer = () => {
  const quickLinks = getFooterQuickLinks();
  const serviceLinks = getFooterServiceLinks();

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img
              src={relicompLogo.src}
              alt="Relicomp Elevators"
              width={relicompLogo.width}
              height={relicompLogo.height}
              className="mb-6 h-16 w-auto brightness-20"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Elevating India for over 16 years. Top 10 Elevators & Moving
              Stairways Manufacturers 2023.
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/relicompelevators"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-white" />
                </a>
                <a
                  href="https://www.instagram.com/relicompelevatorspvtltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-gray-400 hover:text-white" />
                </a>
                <a
                  href="https://in.linkedin.com/company/relicomp-elevators-pvt-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-gray-400 hover:text-white" />
                </a>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Relicomp Elevators on X"
                >
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-white" />
                  <span className="sr-only">Relicomp Elevators on X</span>
                </a>
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:scale-110 hover:bg-primary"
                  aria-label="Relicomp Elevators on YouTube"
                >
                  <Youtube className="h-5 w-5 text-gray-400 hover:text-white" />
                  <span className="sr-only">Relicomp Elevators on YouTube</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+918037404826"
                onClick={(e) => {
                  e.preventDefault();
                  if (
                    typeof window !== "undefined" &&
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
                    ).gtag_report_conversion("tel:+918037404826");
                  } else {
                    window.location.href = "tel:+918037404826";
                  }
                }}
                className="flex items-start space-x-3 text-gray-400 hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">8037404826</span>
              </a>
              <a
                href="https://wa.me/918792496622?text=Hello%20Relicomp%20Elevators!%20I%20visited%20your%20website%20and%20I'm%20interested%20in%20your%20elevator%20solutions%20(home%2C%20MRL%2C%20hydraulic%2C%20installation%20%26%20AMC).%20Could%20you%20please%20share%20more%20details%20and%20a%20quote%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-gray-400 hover:text-[#25D366] transition-colors"
              >
                <WhatsAppIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#25D366]" />
                <span className="text-sm">+91 87924 96622 (WhatsApp)</span>
              </a>
              <Link
                href="/contact#contact-form"
                className="flex items-start space-x-3 text-gray-400 transition-colors hover:text-primary"
              >
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Send a message</span>
              </Link>
              <address className="flex items-start space-x-3 text-gray-400 not-italic">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <span className="text-sm">
                  <span className="mb-0.5 block font-medium text-white/80">
                    Address
                  </span>
                  {headOfficeAddress}
                </span>
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Relicomp Elevators Pvt. Ltd. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            {isPublished("/privacy-policy") ? (
              <Link
                href="/privacy-policy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            ) : null}
            {isPublished("/terms-of-service") ? (
              <Link
                href="/terms-of-service"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            ) : null}
            <p>
              Developed by{" "}
              <a
                href="https://www.softivum.com"
                target="_blank"
                rel="noopener"
                className="font-semibold text-primary underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                Softivum
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
