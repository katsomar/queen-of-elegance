"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  to: number;
  duration?: number; // in seconds
}

function Counter({ to, duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing: easeOutQuad (slows down near completion)
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * to));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(to); // Ensure exact final value
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Counters() {
  const items = [
    {
      to: 365,
      label: "Days of new possibilities",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className="w-12 h-12 text-champagne"
        >
          {/* Calendar page with checkmark/star */}
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
          <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M12 14l1.5 1.5L16.5 13" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      to: 12,
      label: "Months of growth ahead",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className="w-12 h-12 text-champagne"
        >
          {/* Growth plant shoot */}
          <path d="M12 22V10M12 10c0-3.5 3-5.5 6-5.5M12 13c0-3-2.5-5-5-5" strokeLinecap="round" />
          <path d="M12 10c0-3.5-3-5.5-6-5.5M12 13c0-3 2.5-5 5-5" strokeLinecap="round" opacity="0.4" />
          <circle cx="12" cy="10" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      to: 1,
      label: "Incredible you",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className="w-12 h-12 text-champagne"
        >
          {/* Elegant 8-pointed star */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2l2.4 5.2 5.6.8-4 4 1 5.6-5-3-5 3 1-5.6-4-4 5.6-.8z"
          />
          <circle cx="12" cy="12" r="2" className="fill-champagne/20" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full py-32 md:py-40 px-6 bg-plum text-pearl overflow-hidden z-10">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs md:text-sm font-sans tracking-[0.3em] text-rose-gold uppercase mb-3 font-semibold"
          >
            Looking Forward
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-light text-pearl tracking-tight"
          >
            A Year Ahead
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center group"
            >
              {/* Icon */}
              <div className="mb-6 p-4 rounded-full bg-midnight-dark/45 border border-rose-gold/15 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Counter Number */}
              <div className="text-6xl sm:text-7xl font-serif font-light text-transparent bg-clip-text bg-gradient-to-b from-pearl to-champagne mb-4 tabular-nums">
                <Counter to={item.to} duration={2.2} />
              </div>

              {/* Label */}
              <p className="text-sm md:text-base font-sans tracking-[0.15em] text-champagne/80 group-hover:text-champagne transition-colors duration-300 font-light max-w-[200px] uppercase">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
