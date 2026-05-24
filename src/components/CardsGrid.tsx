"use client";

import { motion, Variants } from "framer-motion";

interface WishCard {
  text: string;
  tag: string;
  icon: React.ReactNode;
}

const wishes: WishCard[] = [
  {
    text: "May this year bring you everything you've been dreaming of.",
    tag: "DREAMS",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="w-8 h-8 text-rose-gold"
      >
        {/* Sparkly crescent moon */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 5.5l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5.5-1.5zM17.5 9.5l.25.75.75.25-.75.25-.25.75-.25-.75-.75-.25.75-.25.25-.75z"
        />
      </svg>
    ),
  },
  {
    text: "You deserve every good thing coming your way.",
    tag: "ABUNDANCE",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="w-8 h-8 text-rose-gold"
      >
        {/* Hand-drawn style crown */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 19h18M5 19L3.5 8.5l4.5 4 4-7.5 4 7.5 4.5-4L19 19H5z"
        />
        <circle cx="3.5" cy="7.5" r="0.75" fill="currentColor" />
        <circle cx="8" cy="12.5" r="0.75" fill="currentColor" />
        <circle cx="12" cy="4" r="0.75" fill="currentColor" />
        <circle cx="16" cy="12.5" r="0.75" fill="currentColor" />
        <circle cx="20.5" cy="7.5" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
  {
    text: "Wishing you a year full of laughter, adventure, and pure happiness.",
    tag: "JOURNEY",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="w-8 h-8 text-rose-gold"
      >
        {/* Travel compass icon */}
        <circle cx="12" cy="12" r="9" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.242 7.758a1 1 0 010 1.414l-5.656 5.656a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l5.656-5.656a1 1 0 011.414 0z"
        />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    text: "Today is yours — own every second of it.",
    tag: "PRESENCE",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="w-8 h-8 text-rose-gold"
      >
        {/* Elegant hourglass icon */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4M4 4h16M4 20h16"
        />
      </svg>
    ),
  },
  {
    text: "May joy find you in every corner of this new year of your life.",
    tag: "SERENDIPITY",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="w-8 h-8 text-rose-gold"
      >
        {/* Serendipity blossom icon */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 12c2.5-4 5.5-4 8 0-2.5 4-5.5 4-8 0zm0 0c-2.5-4-5.5-4-8 0 2.5 4 5.5 4 8 0zm0 0c4 2.5 4 5.5 0 8-4-2.5-4-5.5 0-8zm0 0c4-2.5 4-5.5 0-8-4 2.5-4 5.5 0 8z"
        />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    text: "Here's to you — the most wonderful version of yourself, still becoming.",
    tag: "GROWTH",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="w-8 h-8 text-rose-gold"
      >
        {/* Growth butterfly icon */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v16M12 6c-2-2-7-2-7 3s3 6 7 2m0-5c2-2 7-2 7 3s-3 6-7 2M5 9c-1.5-1-3 0-3 2s1.5 3 3 2m14-4c1.5-1 3 0 3 2s-1.5 3-3 2"
        />
      </svg>
    ),
  },
];

export default function CardsGrid() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 90,
      },
    },
  };

  return (
    <section className="relative w-full py-32 md:py-44 px-6 md:px-12 bg-gradient-to-b from-midnight-dark to-midnight-light overflow-hidden z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs md:text-sm font-sans tracking-[0.35em] text-rose-gold uppercase mb-3 font-medium"
          >
            Affirmations & Intentions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-light text-pearl tracking-tight"
          >
            Moments of Joy
          </motion.h2>
        </div>

        {/* Staggered Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="glass-panel group relative rounded-2xl p-8 md:p-10 flex flex-col justify-between items-start transition-shadow hover:shadow-[0_20px_40px_rgba(26,10,20,0.6)] min-h-[280px] overflow-hidden"
            >
              {/* Animated Border Overlay (Elegant rect stroke transition) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl z-20"
                fill="none"
              >
                <rect
                  x="0.75"
                  y="0.75"
                  width="calc(100% - 1.5px)"
                  height="calc(100% - 1.5px)"
                  rx="16"
                  stroke="url(#card-border-grad)"
                  strokeWidth="1.5"
                  pathLength="100"
                  strokeDasharray="100"
                  strokeDashoffset="100"
                  className="transition-all duration-1000 ease-out group-hover:stroke-dashoffset-0"
                />
                <defs>
                  <linearGradient id="card-border-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C9956C" stopOpacity="0" />
                    <stop offset="50%" stopColor="#C9956C" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#C67B9A" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Subtle top decoration glow */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon & Category */}
              <div className="flex justify-between items-center w-full mb-8 z-10">
                <div className="p-3 rounded-xl bg-plum/30 border border-rose-gold/10 group-hover:bg-plum/50 group-hover:border-rose-gold/25 transition-all duration-300">
                  {wish.icon}
                </div>
                <span className="text-[10px] font-sans tracking-[0.25em] text-mauve font-semibold select-none">
                  {wish.tag}
                </span>
              </div>

              {/* Message Text */}
              <p className="text-lg md:text-xl font-serif font-light text-pearl/90 leading-relaxed group-hover:text-pearl transition-colors duration-300 mb-2 z-10">
                "{wish.text}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
