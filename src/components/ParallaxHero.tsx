"use client";

import { useEffect, useRef } from "react";
import hero from "@/assets/hero.webp";

interface ParallaxHeroProps {
  children: React.ReactNode;
  className?: string;
}

const ParallaxHero = ({ children, className = "" }: ParallaxHeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    let frame = 0;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const host = heroRef.current;
        if (!host) return;
        const rect = host.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0 && window.scrollY > 0) {
          image.style.transform = `translateY(${window.scrollY * 0.5}px)`;
        } else {
          image.style.removeProperty("transform");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={heroRef} className={`relative overflow-hidden ${className}`}>
      <div ref={imageRef} className="absolute inset-0">
        <img
          src={hero.src}
          alt="Relicomp elevator installation"
          width={hero.width}
          height={hero.height}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxHero;
