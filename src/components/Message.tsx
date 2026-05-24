"use client";

import { motion, Variants } from "framer-motion";

export default function Message() {
  const quoteText = "Some people make the world more beautiful just by being in it. Today is proof of that.";
  const words = quoteText.split(" ");

  // Container variants to stagger the word entrance
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // Single word variants
  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="message-section"
      className="relative w-full py-32 md:py-48 px-6 bg-champagne text-plum overflow-hidden flex flex-col justify-center items-center z-10"
    >
      {/* Side-floating SVG Sparkles & Stars */}
      <motion.div
        className="absolute left-8 md:left-24 top-20 text-mauve/40 w-8 h-8 pointer-events-none hidden sm:block"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 90, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 0c0 6.627-5.373 12-12 12 6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute right-12 md:right-32 bottom-20 text-rose-gold/40 w-12 h-12 pointer-events-none hidden sm:block"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -45, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 0c0 6.627-5.373 12-12 12 6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
        </svg>
      </motion.div>

      {/* Decorative Top Flourish */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="mb-8 md:mb-12 text-rose-gold"
      >
        <svg
          width="160"
          height="32"
          viewBox="0 0 160 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-40 md:w-48"
        >
          {/* Elegant swirl flourish pattern */}
          <path
            d="M10 16 C30 6, 50 26, 70 16 C75 13.5, 78 12, 80 12 C82 12, 85 13.5, 90 16 C110 26, 130 6, 150 16"
            strokeLinecap="round"
          />
          <path
            d="M30 16 C50 10, 60 22, 80 16 C100 22, 110 10, 130 16"
            strokeLinecap="round"
            opacity="0.5"
          />
          <circle cx="80" cy="16" r="3" fill="currentColor" />
          <circle cx="45" cy="16" r="1.5" fill="currentColor" />
          <circle cx="115" cy="16" r="1.5" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Pull Quote */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.h2
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif font-light leading-tight tracking-tight text-plum select-none flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-y-4"
        >
          {words.map((word, index) => (
            <span key={index} className="inline-block overflow-hidden py-1">
              <motion.span
                variants={wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 text-sm md:text-base font-sans tracking-[0.2em] uppercase text-mauve font-medium"
        >
          A day like no other
        </motion.p>
      </div>

      {/* Decorative Bottom Flourish */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-8 md:mt-12 text-rose-gold"
      >
        <svg
          width="160"
          height="32"
          viewBox="0 0 160 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-40 md:w-48 rotate-180"
        >
          <path
            d="M10 16 C30 6, 50 26, 70 16 C75 13.5, 78 12, 80 12 C82 12, 85 13.5, 90 16 C110 26, 130 6, 150 16"
            strokeLinecap="round"
          />
          <path
            d="M30 16 C50 10, 60 22, 80 16 C100 22, 110 10, 130 16"
            strokeLinecap="round"
            opacity="0.5"
          />
          <circle cx="80" cy="16" r="3" fill="currentColor" />
          <circle cx="45" cy="16" r="1.5" fill="currentColor" />
          <circle cx="115" cy="16" r="1.5" fill="currentColor" />
        </svg>
      </motion.div>
    </section>
  );
}
