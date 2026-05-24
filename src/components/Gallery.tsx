"use client";

import { motion, Variants } from "framer-motion";

interface GalleryPhoto {
  id: number;
  src: string;
  alt: string;
  heightClass: string; // Tailored height for portrait aspect ratios
}

// 6 portrait items with varied heights for a beautiful staggered editorial flow
const col1Photos: GalleryPhoto[] = [
  {
    id: 1,
    src: "/images/1.JPG",
    alt: "Evelyn Portrait",
    heightClass: "h-[460px] md:h-[540px]",
  },
  {
    id: 4,
    src: "/images/2.JPG",
    alt: "Cinematic Horizon",
    heightClass: "h-[380px] md:h-[440px]",
  },
];

const col2Photos: GalleryPhoto[] = [
  {
    id: 2,
    src: "/images/3.JPG",
    alt: "Moments of Joy",
    heightClass: "h-[380px] md:h-[440px]",
  },
  {
    id: 5,
    src: "/images/4.JPG",
    alt: "Sweet Smile",
    heightClass: "h-[480px] md:h-[580px]",
  },
];

const col3Photos: GalleryPhoto[] = [
  {
    id: 3,
    src: "/images/5.JPG",
    alt: "Celebration",
    heightClass: "h-[480px] md:h-[560px]",
  },
  {
    id: 6,
    src: "/images/6.JPG",
    alt: "Wonderful Memories",
    heightClass: "h-[380px] md:h-[420px]",
  },
];

export default function Gallery() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 22,
        stiffness: 85,
      },
    },
  };

  const renderPhotoCard = (photo: GalleryPhoto) => (
    <motion.div
      key={photo.id}
      variants={imageVariants}
      className={`gallery-item relative overflow-hidden rounded-2xl bg-gradient-to-b from-plum/25 to-plum/10 border border-rose-gold/10 group shadow-md transition-shadow hover:shadow-[0_15px_30px_rgba(26,10,20,0.5)] w-full ${photo.heightClass}`}
    >
      {/* Fallback Placeholder (shown when image is not present) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-rose-gold/25 select-none z-0 p-4 text-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform duration-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <span className="text-[10px] tracking-[0.25em] uppercase font-light">
          photo{photo.id}.jpg
        </span>
        <span className="text-[9px] tracking-[0.1em] text-mauve/40 uppercase mt-1 font-semibold">
          Portrait Logo
        </span>
      </div>

      {/* The Actual Image (hidden if broken) */}
      <img
        src={photo.src}
        alt={photo.alt}
        className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02] z-10"
        onError={(e) => {
          (e.target as HTMLElement).style.display = "none";
        }}
      />

      {/* Soft Warm Overlay */}
      <div className="absolute inset-0 bg-[#C9956C]/0 transition-colors duration-500 group-hover:bg-[#C9956C]/25 z-20 pointer-events-none" />
    </motion.div>
  );

  return (
    <section className="relative w-full py-32 md:py-44 px-6 md:px-12 bg-midnight-dark overflow-hidden z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs md:text-sm font-sans tracking-[0.35em] text-rose-gold uppercase mb-3 font-medium"
          >
            Gallery
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-light text-pearl tracking-tight mb-4"
          >
            A Glimpse of You
          </motion.h2>
          {/* Thin Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-32 h-[1px] bg-gradient-to-r from-transparent via-rose-gold/40 to-transparent"
          />
        </div>

        {/* Masonry Columns Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-start"
        >
          {/* Column 1 */}
          <div className="flex flex-col gap-6 w-full">
            {col1Photos.map(renderPhotoCard)}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 w-full">
            {col2Photos.map(renderPhotoCard)}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 w-full md:col-span-2 lg:col-span-1 md:grid md:grid-cols-2 lg:flex lg:flex-col gap-6">
            {col3Photos.map(renderPhotoCard)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
