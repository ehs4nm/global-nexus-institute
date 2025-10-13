import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useContent } from '../../hooks/useContent';

const letterVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  }),
};

const wordVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  }),
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      delay: 0.8,
      duration: 1.2,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

export const HeroSection = () => {
  const { content, isLoading } = useContent();

  if (isLoading || !content || !content.hero) {
    return (
      <section className="relative w-full h-screen flex items-center justify-center bg-black dark:bg-white overflow-hidden">
        <div className="brutalist-label text-white dark:text-black">Loading...</div>
      </section>
    );
  }
  
  const hero = content.hero;

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black dark:bg-white">
      {/* Background Video with Strong Overlay */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover mt-[110px]"
          autoPlay
          muted
          loop
          playsInline
          poster={hero.posterSrc}
          preload="metadata"
        >
          <source src={hero.videoSrc} type="video/mp4" />
        </video>
        {/* Heavy dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/80 dark:bg-white/80" />
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
        
        {/* Massive Tagline */}
        <div className="w-full max-w-[95vw] lg:max-w-7xl">
          <motion.h1 
            className="font-title-alt font-bold leading-[1.2] text-white dark:text-black text-[3rem] md:text-[6rem] lg:text-[7rem] break-words"
            initial="hidden"
            animate="visible"
          >
            {hero.tagline.split(' ').map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                custom={wordIndex}
                variants={wordVariants}
                className="inline-block mr-2 sm:mr-4"
              >
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    custom={wordIndex * 10 + charIndex}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </motion.h1>

          {/* Thick Divider Line */}
          <motion.div
            className="w-full h-1 sm:h-2 bg-white dark:bg-black mt-8 sm:mt-12 origin-left"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Subtitle/Title in Border Box */}
          <motion.div
            className="mt-8 sm:mt-12 inline-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="border-4 border-white dark:border-black px-6 py-4 sm:px-8 sm:py-6">
              <p className="font-title-alt text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white dark:text-black leading-tight">
                {hero.subtitle}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Label */}
        <motion.div
          className="hidden md:block absolute bottom-8 sm:bottom-12 left-0 right-0 flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="w-12 sm:w-20 h-0.5 bg-white dark:bg-black" />
          <span className="font-body-alt uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold text-white/60 dark:text-black/60">
            Global Nexus Institute
          </span>
          <div className="w-12 sm:w-20 h-0.5 bg-white dark:bg-black" />
        </motion.div>
      </div>

      {/* Decorative Corner Brackets */}
      <motion.div
        className="absolute top-6 left-6 sm:top-12 sm:left-12 w-12 h-12 sm:w-16 sm:h-16 border-t-4 border-l-4 border-white dark:border-black"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      />
      <motion.div
        className="absolute top-6 right-6 sm:top-12 sm:right-12 w-12 h-12 sm:w-16 sm:h-16 border-t-4 border-r-4 border-white dark:border-black"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      />
      <motion.div
        className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12 w-12 h-12 sm:w-16 sm:h-16 border-b-4 border-l-4 border-white dark:border-black"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      />
      <motion.div
        className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12 w-12 h-12 sm:w-16 sm:h-16 border-b-4 border-r-4 border-white dark:border-black"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      />
    </section>
  );
};
