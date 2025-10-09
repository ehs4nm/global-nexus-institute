import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useContent } from '../../hooks/useContent';

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


export const HeroSection = () => {
  const textRef = useRef(null);
  const { content } = useContent();
  const hero = content.hero;

  useEffect(() => {
    const words = textRef.current.querySelectorAll('span');

    gsap.set(words, { y: 30, opacity: 0 });
    gsap.to(words, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="grid place-items-center hero-grid relative dark:bg-black w-full sm:w-[95vw] min-h-[70vh] sm:min-h-[80vh] md:h-[80vh] mx-auto mt-[115px] sm:mt-[120px] md:mt-[160px] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover object-center gpu-accelerate"
        autoPlay muted loop playsInline poster={hero.posterSrc}
        preload="metadata"
      >
        <source src={hero.videoSrc} type="video/mp4" />
      </video>

      {/* Overlay with rounded corners matching the video */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>

      <div className="relative z-10 px-4 max-w-5xl text-center w-full">
        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-2 sm:px-6 text-center will-change-opacity"
          variants={containerVariants}
          initial="hidden"
          animate="visible" // Changed from 'whileInView'
          >
          {/* The rest of the content remains exactly the same
          <motion.div className="flex items-center justify-center gap-4 mb-6" variants={itemVariants}>
            <img src="/assets/favicon_io/android-chrome-512x512.png" alt="logo" className='w-32 h-32 rounded-xl' />
          </motion.div> */}

          <motion.h2
            className="heading-1 text-3xl tracking-tight leading-[1.05] text-white mb-6 sm:mb-8"
            variants={itemVariants}
            style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5)' }}
          >

          </motion.h2>
        </motion.div>
        
        <div className="mb-4 sm:mb-6">
          <p className='text-white text-base sm:text-lg md:text-4xl font-bold opacity-90'>{hero.tagline}</p>
        </div>
        <h1 className="heading-1 font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white mb-6 sm:mb-8">
          <span 
            ref={textRef}
            className="block"
          >
            {hero.title.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-1 sm:mr-2">{word}</span>
            ))}
          </span>
          <span className="block text-accent-400 text-2xl sm:text-3xl md:text-5xl">{hero.subtitle}</span>
        </h1>

        {/* rest of component unchanged */}
      </div>
    </section>
  );
};
