"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Hero from "@/components/Hero";
import Message from "@/components/Message";
import CardsGrid from "@/components/CardsGrid";
import Gallery from "@/components/Gallery";
import Spotlight from "@/components/Spotlight";
import Ticker from "@/components/Ticker";
import Counters from "@/components/Counters";
import FinalWish from "@/components/FinalWish";

import Countdown from "@/components/Countdown"; // Initial Countdown Splash
import PageLoader from "@/components/PageLoader"; // Letter Reveal Loader
import CustomCursor from "@/components/CustomCursor";
import FloatingDecorations from "@/components/FloatingDecorations";

// Master switch: Set to true to activate the Tomorrow 8:00 AM lock/countdown screen.
// Set to false to preview the website and intro letter loader immediately.
const ENABLE_COUNTDOWN = false;

export default function Home() {
  const [stage, setStage] = useState<"countdown" | "loader" | "content">(
    ENABLE_COUNTDOWN ? "countdown" : "loader"
  );

  useEffect(() => {
    if (ENABLE_COUNTDOWN) {
      const TARGET_TIME = new Date("2026-05-25T08:00:00+03:00").getTime();
      if (Date.now() >= TARGET_TIME) {
        setStage("loader");
        setTimeout(() => {
          setStage("content");
        }, 3200);
      }
    } else {
      setTimeout(() => {
        setStage("content");
      }, 3200);
    }
  }, []);

  const handleCountdownComplete = () => {
    setStage("loader");
    // Transition from loader to main content after 3.2 seconds
    setTimeout(() => {
      setStage("content");
    }, 3200);
  };

  return (
    <>
      {/* Premium custom mouse cursor */}
      <CustomCursor />

      {/* Atmospheric slow-drifting shapes in the background */}
      <FloatingDecorations />

      <AnimatePresence mode="wait">
        {stage === "countdown" && (
          <motion.div
            key="countdown-wrapper"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full"
          >
            <Countdown onComplete={handleCountdownComplete} />
          </motion.div>
        )}

        {stage === "loader" && (
          <motion.div
            key="loader-wrapper"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <PageLoader />
          </motion.div>
        )}

        {stage === "content" && (
          <motion.main
            key="content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-screen w-full flex flex-col bg-midnight-dark overflow-hidden"
          >
            <Hero />
            <Message />
            <CardsGrid />
            <Gallery />
            <Spotlight />
            <Ticker />
            <Counters />
            <FinalWish />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
