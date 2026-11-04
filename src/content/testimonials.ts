/**
 * Google customer reviews for Relicomp Elevators (as provided by the business).
 * Avatar images under /public/testimonials when available from Google profiles.
 */

import { branches } from "@/content/site";

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: 5 | 4 | 3 | 2 | 1;
  /** City / locality */
  location?: string;
  /** Install type shown as a chip */
  projectType?: string;
  /** e.g. "Google review" */
  source?: string;
  /** Public path or absolute URL for avatar */
  image?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "siddesh-babu",
    name: "Siddesh Babu",
    role: "Google reviewer",
    location: "Bengaluru",
    projectType: "Elevator installation",
    source: "Google review",
    rating: 5,
    image: "/testimonials/siddesh-babu.jpg",
    quote:
      "Very professional service from Relicomp Elevator Services. The team completed the installation on time and maintained good quality throughout the work. Their response and support were excellent. Fully satisfied with the overall experience.",
  },
  {
    id: "sneha-sarangamath",
    name: "Sneha Sarangamath",
    role: "Google reviewer",
    location: "Bengaluru",
    source: "Google review",
    rating: 5,
    quote:
      "Had a positive experience with Relicomp Elevator Services. The team paid attention to every detail and ensured the work was completed to a high standard. Their professionalism and dedication were impressive. Very pleased with the outcome.",
  },
  {
    id: "pavithra-pavi",
    name: "Pavithra Pavi",
    role: "Google reviewer",
    location: "Bengaluru",
    projectType: "Elevator & AMC",
    source: "Google review",
    rating: 5,
    quote:
      "Really satisfied with the service provided by Relicomp Elevator Services. The staff was friendly, responsive, and handled everything perfectly. The elevator performance is smooth and maintenance support is very good. Great company to work with.",
  },
  {
    id: "laxmi",
    name: "Laxmi",
    role: "Architect",
    location: "Bengaluru",
    projectType: "Project recommendation",
    source: "Google review",
    rating: 5,
    image: "/testimonials/laxmi.jpg",
    quote:
 "Thanks for all the support. Very pleasant experience and fairly pro-active support from your team. Each of you who participated in this resolution were forthcoming and working for the resolution, we are delighted. Wonderful working with Mr. Shreyas, Services Team. As an architect I would recommend Relicomp elevators. Good job, once again thanks Relicomp Elevators.",
  },
  {
    id: "syed",
    name: "Syed",
    role: "Google reviewer",
    location: "Bengaluru",
    projectType: "Custom home lift",
    source: "Google review",
    rating: 5,
    image: "/testimonials/syed.jpg",
    quote:
      "It's a very promising and professional company with good customer relations. I have had no delays in any stage of the lift. They catered a customized lift according to my plot measurement with complete technical guidance and coordinated professionally with our team. Would like to recommend others who are interested. One of the best elevators in the city. Thanks for your coordination Santhosh and whole Relicomp team.",
  },
  {
    id: "shreeram-urs",
    name: "Shreeram Urs",
    role: "Homeowner",
    location: "Bengaluru",
    projectType: "Home elevator renovation",
    source: "Google review",
    rating: 5,
    image: "/testimonials/shreeram-urs.jpg",
    quote:
      "Installing a home elevator with Relicomp team was the best decision we made during our home renovation. My mom and I were nervous about the process, but the team walked us through every step, offering customized solutions that fit our home perfectly. The installation was done on time and the elevator is so quiet and smooth it's like it was always meant to be here. Cousins are much more comfortable now and I feel relieved knowing they can move around the house easily.",
  },
  {
    id: "bharathi-sree",
    name: "Bharathi Sree",
    role: "Google reviewer",
    location: "Bengaluru",
    projectType: "Installation & support",
    source: "Google review",
    rating: 5,
    quote:
      "Had very good customer service experience. Guidance through the installation process was satisfactory. Mr. Manoj and team has been very professional, cordial and supportive throughout and has given good service during installation and support services. Elevator's excellent quality has been experienced while using. I recommend Relicomp Elevators.",
  },
];

/** Aggregate trust strip for the testimonials section. */
export const testimonialStats = {
  rating: "4.5",
  reviewCountLabel: `530+ Google reviews`,
  installs: "600+",
  years: "16+",
} as const;

/** Relicomp head office Google Maps / Business Profile (Vijayanagar, Bengaluru). */
export const googleReviewsUrl = branches.bangalore.mapUrl;

export function getInitials(name: string): string {
  return name
    .replace(/^(Mr\.|Mrs\.|Ms\.|Sri)\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
