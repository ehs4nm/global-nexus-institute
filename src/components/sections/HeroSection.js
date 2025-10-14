import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../../hooks/useContent';

const glitchVariants = {
  hidden: { 
    opacity: 0,
    x: -100,
    rotateZ: -5,
    scale: 0.8
  },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    rotateZ: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.87, 0, 0.13, 1],
    },
  }),
};

const videoMaskVariants = {
  hidden: { 
    clipPath: 'inset(0 50% 0 50%)',
    opacity: 0
  },
  visible: {
    clipPath: 'inset(0 0% 0 0%)',
    opacity: 1,
    transition: {
      duration: 1.8,
      ease: [0.87, 0, 0.13, 1],
      delay: 0.3
    }
  }
};

const chaosLineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 0.6,
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 1
    }
  }
};

export const HeroSection = () => {
  const { content, isLoading } = useContent();
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading || !content || !content.hero) {
    return (
      <section id="hero" className="mt-[200px] relative w-full h-[80vh] flex items-center justify-center bg-black dark:bg-white overflow-hidden">
        <div className="brutalist-label text-white dark:text-black">Loading...</div>
      </section>
    );
  }
  
  const hero = content.hero;

  return (
    <section className="relative w-full h-[88vh] md:h-[86vh] mt-[100px] md:mt-[130px] overflow-hidden bg-black dark:bg-white">
      {/* Subtle Dot Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" 
           style={{
             backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
             backgroundSize: '30px 30px'
           }} 
      />

      <div className="relative z-10 h-full flex flex-col lg:flex-row">
        {/* LEFT SIDE - TEXT CONTENT */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-6 sm:px-8 lg:px-16 relative">
          
          {/* Decorative Corner Frame - Top Left */}
          <motion.div
            className="absolute top-6 left-6 sm:top-8 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 border-t-[3px] border-l-[3px] border-white dark:border-black"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          />

          {/* Main Tagline with Bizarre Styling */}
          <div className="relative ml-4">
            <motion.div
              className={`font-title-alt font-black leading-[0.85] text-white dark:text-black mt-10 md:mt-16 mb-4 ${
                glitchActive ? 'animate-pulse' : ''
              }`}
              initial="hidden"
              animate="visible"
            >

              
              {hero.tagline.split(' ').map((word, wordIndex) => (
                <motion.div
                  key={wordIndex}
                  variants={glitchVariants}
                  custom={wordIndex + 1}
                  className="inline-block"
                  style={{
                    marginRight: '0.3rem'
                  }}
                >
                  <span 
                    className="inline-block text-4xl sm:text-5xl lg:text-[6rem] tracking-tighter"
                    style={{
                      textShadow: glitchActive ? '3px 3px 0 rgba(255,255,255,0.3)' : 'none',
                      transform: glitchActive ? 'skew(-2deg)' : 'none'
                    }}
                  >
                    {word}
                  </span>
                </motion.div>
              ))}
            </motion.div>


          </div>

          {/* Subtitle in Inverted Box (Nexus Style) */}
          <motion.div
            className="mt-12 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <div className="inline-block bg-white dark:bg-black border-[3px] border-white dark:border-black px-6 py-4 sm:px-8 sm:py-6 relative overflow-hidden">
              {/* Animated corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-black dark:border-white"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, duration: 0.5 }}
              />
              
              <p className="font-title-alt font-bold text-xl sm:text-2xl lg:text-4xl tracking-tight text-black dark:text-white relative z-10">
                {hero.subtitle}
              </p>
              
              {/* Bottom border animation */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-black dark:bg-white"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 2.5, duration: 0.6 }}
              />
            </div>
          </motion.div>

          {/* Bottom Label with Mono Font */}
          <motion.div
            className="mt-auto mb-24 ml-4 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 1 }}
          >
            <div className="h-[2px] w-12 sm:w-16 bg-white dark:bg-black" />
            <span className="font-body-alt font-mono text-xs tracking-[0.4em] text-white/70 dark:text-black/70 uppercase">
              GLOBAL NEXUS INSTITUTE
            </span>
            <div className="h-[2px] flex-1 bg-white dark:bg-black" />
          </motion.div>
        </div>

        {/* RIGHT SIDE - VIDEO WITH EXPANDING ANIMATION */}
        <div className="hidden lg:block w-full lg:w-1/2 h-full relative">
          <motion.div 
            className="w-full h-full relative overflow-hidden"
            variants={videoMaskVariants}
            initial="hidden"
            animate="visible"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={hero.posterSrc}
              preload="metadata"
            >
              <source src={hero.videoSrc} type="video/mp4" />
            </video>
            
            {/* Video overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/60 dark:via-white/20 dark:to-white/60" />
            
            {/* Decorative Border Frame on Video */}
            <motion.div
              className="absolute inset-4 border-2 border-white dark:border-black pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 2, duration: 1 }}
            />
          </motion.div>

          {/* Decorative Corner Frame - Bottom Right */}
          <motion.div
            className="absolute bottom-8 right-8 w-20 h-20 sm:w-24 sm:h-24 border-b-[3px] border-r-[3px] border-white dark:border-black"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          />
        </div>
      </div>

      {/* Geometric Accent Lines */}
      <motion.div
        className="hidden lg:block absolute top-1/2 left-1/2 w-[2px] h-24 sm:h-32 bg-white dark:bg-black -translate-x-1/2 -translate-y-1/2"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 0.3 }}
        transition={{ delay: 1.5, duration: 1 }}
      />

      {/* Decorative Corner Brackets - Keep original ones */}
      <motion.div
        className="absolute top-6 right-6 sm:top-12 sm:right-12 w-12 h-12 sm:w-16 sm:h-16 border-t-4 border-r-4 border-white dark:border-black lg:hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      />
      <motion.div
        className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12 w-12 h-12 sm:w-16 sm:h-16 border-b-4 border-l-4 border-white dark:border-black lg:hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      />
      <motion.div
        className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12 w-12 h-12 sm:w-16 sm:h-16 border-b-4 border-r-4 border-white dark:border-black lg:hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      />
    </section>
  );
};