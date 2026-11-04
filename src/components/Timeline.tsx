"use client";

import { useEffect, useRef, useState } from "react";

interface TimelineItem {
  title: string;
  description: string;
  duration?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [items.length]);

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

      <div className="space-y-12">
        {items.map((item, index) => {
          const isVisible = visibleItems.has(index);
          
          return (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`relative flex items-start gap-8 group transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Circle indicator */}
              <div className={`hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-xl flex-shrink-0 z-10 shadow-premium transition-all duration-700 ${
                isVisible ? "scale-100" : "scale-0"
              }`}>
                {index + 1}
              </div>

              {/* Content */}
              <div className="glass-card border border-border/40 shadow-lg rounded-2xl p-4 md:p-6 flex-1 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                  {item.duration && (
                    <span className="text-xs md:text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full whitespace-nowrap">
                      {item.duration}
                    </span>
                  )}
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
