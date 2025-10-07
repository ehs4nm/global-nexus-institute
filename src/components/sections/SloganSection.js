import React from 'react';
import { motion } from 'framer-motion';

// Animation variants remain the same
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const SloganSection = () => {
  return (
    <section id="slogan" className="h-screen relative flex items-center justify-center overflow-hidden border-t border-black/5 dark:border-white/10">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/1.jpg"
      >
        <source src="/assets/video-6.mp4" type="video/mp4" />
      </video>

      {/* Improved Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>

      {/* --- UPDATED ANIMATED CONTENT --- */}
      {/* The animation now triggers as soon as the component loads */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible" // Changed from 'whileInView'
      >
        {/* The rest of the content remains exactly the same */}
        <motion.div className="flex items-center justify-center gap-4 mb-6" variants={itemVariants}>
          {/* ... logo and institute name */}
        </motion.div>

        <motion.h2
          className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white"
          variants={itemVariants}
          style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5)' }}
        >
          Foresight for a Connected World
        </motion.h2>
      </motion.div>
    </section>
  );
};