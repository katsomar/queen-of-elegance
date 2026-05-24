"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface FloatItem {
  id: number;
  x: number; // percentage width
  size: number;
  type: "star" | "circle" | "petal";
  duration: number;
  delay: number;
}

export default function FloatingDecorations() {
  const [items, setItems] = useState<FloatItem[]>([]);

  useEffect(() => {
    // Generate decoration items on the client to avoid SSR hydration mismatches
    const generated: FloatItem[] = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 14 + 8,
      type: ["star", "circle", "petal"][Math.floor(Math.random() * 3)] as any,
      duration: Math.random() * 25 + 20, // Slow upward drift
      delay: Math.random() * -30, // Random starting offsets
    }));
    setItems(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-rose-gold/15"
          style={{
            left: `${item.x}%`,
            width: item.size,
            height: item.size,
          }}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.12, 0.12, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {item.type === "star" && (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0c0 6.627-5.373 12-12 12 6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
            </svg>
          )}
          {item.type === "circle" && (
            <div className="w-full h-full rounded-full border border-current opacity-70" />
          )}
          {item.type === "petal" && (
            <svg viewBox="0 0 20 30" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
              <path d="M10 0 C17 10, 20 20, 10 30 C0 20, 3 10, 10 0" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}
