"use client";

import { motion, Variants } from "framer-motion";

export default function PageLoader() {
  const word1 = Array.from("Edrine");
  const word2 = Array.from("Desire");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        ease: "easeInOut" as const,
        duration: 0.8,
      },
    },
  };

  const letter: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 bg-midnight-dark z-50 flex flex-col justify-center items-center select-none"
    >
      <div className="flex flex-col items-center">
        {/* Name Letter by Letter */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6 max-w-lg">
          {/* Word 1 */}
          <div className="flex space-x-1 sm:space-x-2">
            {word1.map((char, index) => (
              <motion.span
                key={`w1-${index}`}
                variants={letter}
                className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-transparent bg-clip-text bg-gradient-to-b from-champagne via-rose-gold to-mauve tracking-wide"
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Word 2 */}
          <div className="flex space-x-1 sm:space-x-2">
            {word2.map((char, index) => (
              <motion.span
                key={`w2-${index}`}
                variants={letter}
                className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-transparent bg-clip-text bg-gradient-to-b from-champagne via-rose-gold to-mauve tracking-wide"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Center line drawing outward */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.4, duration: 1.2, ease: "easeInOut" }}
          className="w-40 sm:w-56 h-[1px] bg-gradient-to-r from-transparent via-rose-gold/60 to-transparent origin-center"
        />
      </div>
    </motion.div>
  );
}
