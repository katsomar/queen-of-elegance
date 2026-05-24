"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  onComplete: () => void;
}

export default function Countdown({ onComplete }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Calculate tomorrow 8:00 AM dynamically
    const now = new Date();
    const target = new Date();
    target.setDate(now.getDate() + 1);
    target.setHours(8, 0, 0, 0);
    const targetTime = target.getTime();

    const updateTimer = () => {
      const currentTime = new Date().getTime();
      const difference = targetTime - currentTime;

      if (difference <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        onComplete();
        return true;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
      return false;
    };

    updateTimer();
    setHasLoaded(true);

    const interval = setInterval(() => {
      const finished = updateTimer();
      if (finished) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!hasLoaded) return null;

  const pad = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="fixed inset-0 bg-midnight-dark z-50 flex flex-col justify-center items-center px-6 select-none overflow-hidden">
      {/* Soft floating accent background blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <motion.div
          className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-plum/10 blur-[100px]"
          animate={{ x: [0, 20, -10, 0], y: [0, 30, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-rose-gold/5 blur-[90px]"
          animate={{ x: [0, -30, 20, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center">
        {/* Mysterious Luxury Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xs md:text-sm font-sans tracking-[0.35em] text-rose-gold uppercase mb-6 font-medium"
        >
          Something Beautiful Awaits
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-pearl leading-tight tracking-tight mb-12 max-w-lg"
        >
          A grand moment is about to unfold.
        </motion.h1>

        {/* Staggered Countdown numbers */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex space-x-4 sm:space-x-8 mb-16 items-center justify-center w-full"
        >
          {/* Hours Card */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl glass-panel flex items-center justify-center">
              <span className="text-3xl sm:text-5xl font-serif font-light text-transparent bg-clip-text bg-gradient-to-b from-champagne via-rose-gold to-mauve font-semibold">
                {pad(timeLeft.hours)}
              </span>
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-mauve/60 mt-3 font-medium">
              Hours
            </span>
          </div>

          <span className="text-xl sm:text-3xl font-serif text-rose-gold/40 self-start mt-6 sm:mt-10">:</span>

          {/* Minutes Card */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl glass-panel flex items-center justify-center">
              <span className="text-3xl sm:text-5xl font-serif font-light text-transparent bg-clip-text bg-gradient-to-b from-champagne via-rose-gold to-mauve font-semibold">
                {pad(timeLeft.minutes)}
              </span>
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-mauve/60 mt-3 font-medium">
              Minutes
            </span>
          </div>

          <span className="text-xl sm:text-3xl font-serif text-rose-gold/40 self-start mt-6 sm:mt-10">:</span>

          {/* Seconds Card */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl glass-panel flex items-center justify-center">
              <span className="text-3xl sm:text-5xl font-serif font-light text-transparent bg-clip-text bg-gradient-to-b from-champagne via-rose-gold to-mauve font-semibold">
                {pad(timeLeft.seconds)}
              </span>
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-mauve/60 mt-3 font-medium">
              Seconds
            </span>
          </div>
        </motion.div>

        {/* Elegant thin divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent mb-10"
        />

        {/* Mysterious descriptive message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.8 }}
          className="text-xs sm:text-sm font-sans tracking-[0.18em] text-champagne/60 font-light leading-relaxed max-w-sm"
        >
          Prepare your heart for a celebration of grace and elegance. The wait is almost over.
        </motion.p>

        {/* Bypass trigger button for immediate access/preview */}
        <motion.button
          onClick={onComplete}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          whileHover={{ opacity: 0.9, scale: 1.02 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="mt-16 text-[10px] uppercase tracking-[0.3em] text-rose-gold font-light border-b border-rose-gold/20 pb-1 cursor-pointer transition-colors hover:border-rose-gold/60"
        >
          Enter Celebration
        </motion.button>
      </div>
    </div>
  );
}
