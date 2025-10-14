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
    <section className="relative w-full h-screen mt-[130px] overflow-hidden bg-black dark:bg-white">
      {/* Subtle Dot Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" 
           style={{
             backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
             backgroundSize: '30px 30px'
           }} 
      />

      {/* Neural Network / Integration Lines - Brutalist Style */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        {/* Horizontal connection lines - representing integration */}
        <motion.line
          x1="0" y1="20%" x2="50%" y2="20%"
          stroke="white"
          strokeWidth="2"
          className="dark:stroke-black opacity-30"
          variants={chaosLineVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.line
          x1="50%" y1="20%" x2="100%" y2="20%"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="8 4"
          className="dark:stroke-black opacity-20"
          variants={chaosLineVariants}
          initial="hidden"
          animate="visible"
          style={{ transitionDelay: '0.2s' }}
        />
        
        {/* Vertical divider - center split */}
        <motion.line
          x1="50%" y1="0" x2="50%" y2="100%"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="12 8"
          className="dark:stroke-black opacity-15"
          variants={chaosLineVariants}
          initial="hidden"
          animate="visible"
          style={{ transitionDelay: '0.4s' }}
        />

        {/* Cross connections - AI meets Health concept */}
        <motion.line
          x1="20%" y1="30%" x2="80%" y2="70%"
          stroke="white"
          strokeWidth="1.5"
          className="dark:stroke-black opacity-25"
          variants={chaosLineVariants}
          initial="hidden"
          animate="visible"
          style={{ transitionDelay: '0.6s' }}
        />
        <motion.line
          x1="80%" y1="30%" x2="20%" y2="70%"
          stroke="white"
          strokeWidth="1.5"
          className="dark:stroke-black opacity-25"
          variants={chaosLineVariants}
          initial="hidden"
          animate="visible"
          style={{ transitionDelay: '0.8s' }}
        />

        {/* Bottom grid lines - foundation */}
        <motion.line
          x1="0" y1="80%" x2="100%" y2="80%"
          stroke="white"
          strokeWidth="2"
          className="dark:stroke-black opacity-20"
          variants={chaosLineVariants}
          initial="hidden"
          animate="visible"
          style={{ transitionDelay: '1s' }}
        />

        {/* Neural nodes - connection points */}
        <motion.circle
          cx="20%" cy="30%" r="4"
          fill="white"
          className="dark:fill-black opacity-40"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        />
        <motion.circle
          cx="50%" cy="20%" r="5"
          fill="white"
          className="dark:fill-black opacity-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        />
        <motion.circle
          cx="80%" cy="30%" r="4"
          fill="white"
          className="dark:fill-black opacity-40"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        />
        <motion.circle
          cx="20%" cy="70%" r="4"
          fill="white"
          className="dark:fill-black opacity-40"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        />
        <motion.circle
          cx="80%" cy="70%" r="4"
          fill="white"
          className="dark:fill-black opacity-40"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        />

        {/* Corner brackets - brutalist framing */}
        <motion.polyline
          points="5,5 5,50 50,50"
          stroke="white"
          strokeWidth="2"
          fill="none"
          className="dark:stroke-black opacity-30"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ delay: 1.7, duration: 0.8 }}
        />
        <motion.polyline
          points="95%,5 95%,50 calc(95% - 45px),50"
          stroke="white"
          strokeWidth="2"
          fill="none"
          className="dark:stroke-black opacity-30"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        />
      </svg>

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
          <div className="relative">
            <motion.div
              className={`font-title-alt font-black leading-[0.85] text-white dark:text-black mb-8 ${
                glitchActive ? 'animate-pulse' : ''
              }`}
              initial="hidden"
              animate="visible"
            >
              {/* Arrow prefix */}
              <motion.span 
                className="block text-4xl sm:text-5xl lg:text-7xl mb-2 font-mono text-right"
                variants={glitchVariants}
                custom={0}
              >
                →
              </motion.span>
              
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
                    className="inline-block text-5xl sm:text-6xl lg:text-[7rem] xl:text-[8rem] tracking-tighter"
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
            className="mt-auto mb-8 flex items-center gap-4"
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