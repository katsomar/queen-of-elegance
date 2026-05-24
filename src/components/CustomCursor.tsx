"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics config for organic following lag
  const springConfig = { damping: 30, stiffness: 220, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only display cursor once mouse moves to avoid showing it statically at 0,0
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".glass-panel") ||
        target.closest(".gallery-item") ||
        target.closest(".interactive-candle") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer");

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 border border-rose-gold/60 mix-blend-difference hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isHovered ? 2.2 : 1,
        backgroundColor: isHovered ? "rgba(201, 149, 108, 0.25)" : "rgba(201, 149, 108, 0.45)",
        borderColor: isHovered ? "rgba(201, 149, 108, 0.3)" : "rgba(201, 149, 108, 0.6)",
      }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
    />
  );
}
