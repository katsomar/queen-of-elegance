"use client";

import { motion } from "framer-motion";

export default function Spotlight() {
  return (
    <section className="relative w-full py-32 md:py-48 px-6 bg-midnight-dark overflow-hidden flex flex-col justify-center items-center z-10">
      {/* Background Radial Ray Burst */}
      <div className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] flex items-center justify-center opacity-20 pointer-events-none z-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-rose-gold">
            <g stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3">
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 360) / 24;
                return (
                  <line
                    key={i}
                    x1="100"
                    y1="100"
                    x2={100 + 90 * Math.cos((angle * Math.PI) / 180)}
                    y2={100 + 90 * Math.sin((angle * Math.PI) / 180)}
                  />
                );
              })}
            </g>
            <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </motion.div>
      </div>

      {/* Spotlight Central Container */}
      <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex items-center justify-center z-10 select-none">
        
        {/* Orbit 1: Sparkle Icon (Radius 120px on mobile, 160px on desktop) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          className="absolute w-full h-full flex items-center justify-center"
        >
          <motion.div
            className="absolute top-1/2 left-1/2 -mt-4 -ml-4"
            style={{
              y: typeof window !== "undefined" && window.innerWidth < 768 ? -110 : -160,
            }}
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          >
            <div className="p-2.5 rounded-full bg-plum border border-rose-gold/20 text-champagne shadow-md">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 0c0 6.627-5.373 12-12 12 6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Orbit 2: Ribbon Icon (Radius 140px on mobile, 190px on desktop, counter-clockwise, delayed) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute w-full h-full flex items-center justify-center"
        >
          <motion.div
            className="absolute top-1/2 left-1/2 -mt-4 -ml-4"
            style={{
              y: typeof window !== "undefined" && window.innerWidth < 768 ? -135 : -195,
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            <div className="p-2.5 rounded-full bg-plum border border-rose-gold/20 text-rose-gold shadow-md">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                {/* Elegant Ribbon SVG */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-2.5-4-5-8-5-10.5a5 5 0 1110 0c0 2.5-2.5 6.5-5 10.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 13.5l-3 6.5M14.5 13.5l3 6.5" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Orbit 3: Balloon Icon (Radius 95px on mobile, 130px on desktop) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          style={{ rotate: 120 }} // Start offset angle
          className="absolute w-full h-full flex items-center justify-center"
        >
          <motion.div
            className="absolute top-1/2 left-1/2 -mt-4 -ml-4"
            style={{
              y: typeof window !== "undefined" && window.innerWidth < 768 ? -85 : -125,
            }}
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          >
            <div className="p-2.5 rounded-full bg-plum border border-rose-gold/20 text-mauve shadow-md">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                {/* Balloon SVG */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19a6 6 0 100-12 6 6 0 000 12z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19v3M10 22h4" />
                <path strokeLinecap="round" d="M15 10a3 3 0 00-3-3" opacity="0.5" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Center Element: Illustrated Cake */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 15, delay: 0.2 }}
          className="relative z-20 w-44 h-44 md:w-56 md:h-56 p-6 rounded-full bg-gradient-to-b from-plum/20 to-plum/40 border border-rose-gold/15 backdrop-blur-md flex items-center justify-center"
        >
          <svg
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-full h-full text-champagne"
          >
            {/* Candles on top */}
            <path d="M42 22v8M50 18v12M58 22v8" stroke="currentColor" strokeLinecap="round" />
            <path
              d="M42 17c.5-1.5-.5-3 .5-4 .5 1 .5 2.5-.5 4z M50 13c.5-1.5-.5-3 .5-4 .5 1 .5 2.5-.5 4z M58 17c.5-1.5-.5-3 .5-4 .5 1 .5 2.5-.5 4z"
              fill="#C9956C"
              stroke="none"
            />
            {/* Top Tier */}
            <path d="M36 30h28v14H36z" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M36 37c2 2 5 2 7 0s5-2 7 0 5 2 7 0 5-2 7 0" strokeLinecap="round" />
            
            {/* Bottom Tier */}
            <path d="M26 44h48v22H26z" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M26 55c4 3 8 3 12 0s8-3 12 0 8 3 12 0 8-3 12 0" strokeLinecap="round" />

            {/* Cake Stand */}
            <path d="M22 66h56v4H22z M42 70l-4 12h24l-4-12" strokeLinejoin="round" strokeLinecap="round" />
            
            {/* Decorative Sparkles */}
            <path d="M15 25l2 2m-2 0l2-2M85 30l2 2m-2 0l2-2" strokeLinecap="round" opacity="0.6" />
          </svg>
        </motion.div>
      </div>

      {/* Headline Text */}
      <div className="text-center mt-12 max-w-xl px-4 relative z-20">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs md:text-sm font-sans tracking-[0.3em] text-mauve uppercase mb-4 font-semibold"
        >
          Star of the Day
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-3xl md:text-5xl font-serif font-light text-pearl tracking-tight leading-tight"
        >
          This is your moment. <br className="hidden sm:inline" />
          <span className="text-rose-gold font-normal">Shine without limit.</span>
        </motion.h3>
      </div>
    </section>
  );
}
