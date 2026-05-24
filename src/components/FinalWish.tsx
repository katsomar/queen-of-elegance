"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  angle: number;
  velocity: number;
  rotate: number;
  rotateSpeed: number;
}

const particleColors = ["#C9956C", "#F5E6D3", "#C67B9A", "#F2B5C5", "#FDF8F5"];

export default function FinalWish() {
  const [wishState, setWishState] = useState<"idle" | "blowing" | "blown">("idle");
  const [confetti, setConfetti] = useState<ConfettiParticle[]>([]);

  // Trigger candle blow out & massive confetti explosion
  const handleBlowCandle = () => {
    if (wishState !== "idle") return;
    setWishState("blowing");

    // Generate 90 particles radiating outwards from the candle flame origin
    const burst: ConfettiParticle[] = Array.from({ length: 90 }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2; // Random angle in radians
      const velocity = Math.random() * 14 + 6; // Random force
      return {
        id: i,
        x: 0,
        y: -50, // Origin coordinates relative to wick
        size: Math.random() * 12 + 6,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        angle,
        velocity,
        rotate: Math.random() * 360,
        rotateSpeed: (Math.random() - 0.5) * 720,
      };
    });

    setConfetti(burst);

    // Keep state in "blowing" for a second before showing final wish confirmation
    setTimeout(() => {
      setWishState("blown");
    }, 1000);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-cycling py-24 px-6 z-10">
      {/* Absolute Confetti Burst Container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        <AnimatePresence>
          {wishState !== "idle" &&
            confetti.map((p) => {
              // Calculate target coordinates based on velocity and angle
              const targetX = Math.cos(p.angle) * p.velocity * 45;
              const targetY = Math.sin(p.angle) * p.velocity * 45 + 150; // offset down over time due to gravity

              return (
                <motion.div
                  key={p.id}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    x: p.x,
                    y: p.y,
                    width: p.size,
                    height: p.size,
                    backgroundColor: p.color,
                    borderRadius: Math.random() > 0.5 ? "50%" : "4px",
                    rotate: p.rotate,
                  }}
                  animate={{
                    x: targetX,
                    y: targetY,
                    rotate: p.rotate + p.rotateSpeed,
                    opacity: [0, 1, 1, 0],
                    scale: [1, 1.2, 0.8, 0.4],
                  }}
                  transition={{
                    duration: Math.random() * 1.5 + 1.2,
                    ease: "easeOut",
                  }}
                />
              );
            })}
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center px-4">
        {/* Playfair Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-pearl tracking-tight leading-tight mb-4 select-none"
        >
          Happy Birthday.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-champagne/90 tracking-wide mb-8 select-none"
        >
          May this be the best one yet.
        </motion.p>

        {/* Edrine Desire Cursive Signature */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-4xl sm:text-5xl font-signature text-rose-gold mb-16 select-none"
        >
          Edrine Desire
        </motion.p>

        {/* Interactive Candle Container */}
        <div className="relative flex flex-col items-center h-48 justify-end">
          {/* Interactive instruction text */}
          <AnimatePresence mode="wait">
            {wishState === "idle" && (
              <motion.span
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-[10px] sm:text-xs font-sans tracking-[0.25em] text-champagne/50 uppercase mb-8 animate-pulse select-none pointer-events-none"
              >
                Click the candle to make your wish
              </motion.span>
            )}
          </AnimatePresence>

          <div
            onClick={handleBlowCandle}
            className={`relative flex flex-col items-center ${
              wishState === "idle" ? "cursor-pointer interactive-candle group" : "pointer-events-none"
            }`}
          >
            {/* Flickering Flame */}
            <AnimatePresence>
              {wishState === "idle" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: [1, 1.05, 0.95, 1.02, 1],
                    y: [0, -1, 1, -0.5, 0],
                  }}
                  exit={{ opacity: 0, scale: 0, y: -10 }}
                  transition={{
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="absolute -top-7 w-4 h-7 bg-gradient-to-t from-orange-500 via-rose-gold to-champagne rounded-full blur-[1px] shadow-[0_0_15px_rgba(201,149,108,0.7)]"
                />
              )}
            </AnimatePresence>

            {/* Smoke Puff Animation */}
            {wishState === "blowing" && (
              <motion.div
                initial={{ opacity: 0, y: -15, scale: 0.6 }}
                animate={{
                  opacity: [0, 0.8, 0.8, 0],
                  y: [-15, -45, -70],
                  scale: [0.6, 1.4, 1.8],
                }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute text-champagne/40"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M12 2a4 4 0 00-4 4c0 1.25.57 2.37 1.47 3.12A5 5 0 005 14c0 2.76 2.24 5 5 5h4c2.76 0 5-2.24 5-5a5 5 0 00-4.47-4.88c.9-.75 1.47-1.87 1.47-3.12a4 4 0 00-4-4zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                </svg>
              </motion.div>
            )}

            {/* Candle Body SVG */}
            <svg
              width="24"
              height="80"
              viewBox="0 0 24 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              className="text-rose-gold group-hover:text-champagne transition-colors duration-300"
            >
              {/* Wick */}
              <path d="M12 18v8" strokeWidth="1.5" strokeLinecap="round" />
              {/* Candle Body */}
              <rect
                x="9"
                y="26"
                width="6"
                height="48"
                rx="1"
                fill="currentColor"
                fillOpacity="0.15"
              />
              {/* Base Holder */}
              <path d="M5 74h14M3 77h18" strokeLinecap="round" />
            </svg>
          </div>

          {/* Success Message Reveal */}
          <div className="h-10 mt-8 flex items-center justify-center">
            <AnimatePresence>
              {wishState === "blown" && (
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-sm sm:text-base font-sans tracking-[0.25em] text-rose-gold font-light uppercase select-none"
                >
                  Your wish has been sent to the universe. ✦
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
