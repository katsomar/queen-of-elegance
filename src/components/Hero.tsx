"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

interface Particle {
  id: number;
  x: number; // percentage
  size: number;
  color: string;
  type: "petal" | "star" | "heart";
  duration: number;
  delay: number;
  spin: number;
}

const particleColors = [
  "#C9956C", // Rose Gold
  "#F5E6D3", // Champagne
  "#C67B9A", // Mauve
  "#F2B5C5", // Blush Pink
  "#FDF8F5", // Pearl White
];

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tagline, setTagline] = useState("");
  const [startTypewriter, setStartTypewriter] = useState(false);
  const nameWord1 = Array.from("Edrine");
  const nameWord2 = Array.from("Desire");
  const fullTagline = "Today, the world celebrates you.";

  // Parallax Scroll Tracking
  const { scrollY } = useScroll();
  const yParallax1 = useTransform(scrollY, [0, 800], [0, -220]);
  const yParallax2 = useTransform(scrollY, [0, 800], [0, 180]);

  useEffect(() => {
    // Generate rain particles
    const generated: Particle[] = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 12 + 6,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
      type: ["petal", "star", "heart"][Math.floor(Math.random() * 3)] as any,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * -20,
      spin: Math.random() * 360,
    }));
    setParticles(generated);

    // Mouse Tracking Event Listener
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Typewriter delay timer (fires after name enters, name takes ~1.5s to finish entrance stagger)
    const typewriterTimer = setTimeout(() => {
      setStartTypewriter(true);
    }, 1700);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(typewriterTimer);
    };
  }, []);

  // Tagline Typewriter Animation
  useEffect(() => {
    if (!startTypewriter) return;

    let index = 0;
    const interval = setInterval(() => {
      setTagline(fullTagline.slice(0, index + 1));
      index++;
      if (index >= fullTagline.length) {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [startTypewriter]);

  // Framer-motion text reveal configs
  const titleContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.5 },
    },
  };

  const letterAnimation: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 80,
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-midnight-dark">
      {/* Background soft shifting gradient blobs with Scroll Parallax & Mouse Tracking */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Blob 1: Plum */}
        <motion.div
          style={{ y: yParallax1 }}
          className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw]"
        >
          <motion.div
            animate={{
              x: mousePos.x * 65,
              y: mousePos.y * 65,
            }}
            transition={{ type: "spring", stiffness: 45, damping: 20 }}
            className="w-full h-full rounded-full bg-plum/20 blur-[120px]"
          />
        </motion.div>

        {/* Blob 2: Rose Gold */}
        <motion.div
          style={{ y: yParallax2 }}
          className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw]"
        >
          <motion.div
            animate={{
              x: mousePos.x * -55,
              y: mousePos.y * -55,
            }}
            transition={{ type: "spring", stiffness: 40, damping: 22 }}
            className="w-full h-full rounded-full bg-rose-gold/15 blur-[100px]"
          />
        </motion.div>
      </div>

      {/* Raining Confetti Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute top-0"
            style={{
              left: `${p.x}%`,
              color: p.color,
            }}
            initial={{ y: "-10vh", rotate: p.spin, opacity: 0 }}
            animate={{
              y: "110vh",
              rotate: p.spin + 720,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {p.type === "star" && (
              <svg
                width={p.size}
                height={p.size}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0l3.09 9.51h10.01l-8.09 5.88 3.09 9.51-8.1-5.88-8.1 5.88 3.09-9.51-8.09-5.88h10.01z" />
              </svg>
            )}
            {p.type === "heart" && (
              <svg
                width={p.size}
                height={p.size}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            )}
            {p.type === "petal" && (
              <svg
                width={p.size}
                height={p.size * 1.5}
                viewBox="0 0 20 30"
                fill="currentColor"
              >
                <path d="M10 0 C17 10, 20 20, 10 30 C0 20, 3 10, 10 0" />
              </svg>
            )}
          </motion.div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        <motion.div
          variants={titleContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center items-center gap-y-3 mb-6 select-none"
        >
          {/* Word 1: Edrine */}
          <div className="flex space-x-1 sm:space-x-2 md:space-x-3">
            {nameWord1.map((letter, idx) => (
              <motion.span
                key={idx}
                variants={letterAnimation}
                className="inline-block text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-serif font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-champagne via-rose-gold to-mauve drop-shadow-[0_4px_12px_rgba(74,25,66,0.15)]"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Golden Elegant Divider Space for Mobile wrapping */}
          <div className="w-2 sm:w-4 md:w-6" />

          {/* Word 2: Desire */}
          <div className="flex space-x-1 sm:space-x-2 md:space-x-3">
            {nameWord2.map((letter, idx) => (
              <motion.span
                key={idx}
                variants={letterAnimation}
                className="inline-block text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-serif font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-champagne via-rose-gold to-mauve drop-shadow-[0_4px_12px_rgba(74,25,66,0.15)]"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Typewriter Tagline with a blinking elegant typing caret */}
        <div className="h-8 flex items-center justify-center">
          <p className="text-base sm:text-lg md:text-xl font-sans tracking-[0.25em] text-champagne/80 uppercase font-light max-w-md mx-auto leading-relaxed">
            {tagline}
            {startTypewriter && tagline.length < fullTagline.length && (
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[2px] h-4 bg-rose-gold ml-1 align-middle"
              />
            )}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 z-20 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        onClick={() => {
          document.getElementById("message-section")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-rose-gold/60 font-light mb-2">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-rose-gold/60 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 right-0 h-4 bg-champagne"
            animate={{
              y: [0, 48, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
