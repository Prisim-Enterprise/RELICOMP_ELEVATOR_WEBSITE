"use client";

import { useEffect, useRef, useState } from "react";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Renders children in the DOM for SEO (always visible in initial HTML).
 * After hydration, adds entrance animation when the element enters the viewport.
 */
const TextReveal = ({ children, className = "", delay = 0 }: TextRevealProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          const t = setTimeout(() => {
            setHasAnimated(true);
          }, delay);
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, hasAnimated]);

  return (
    <div
      ref={ref}
      className={`${className} ${
        hasAnimated ? "animate-text-reveal" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default TextReveal;
