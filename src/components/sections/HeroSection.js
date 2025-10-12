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
  const { content, isLoading } = useContent();

  useEffect(() => {
    if (textRef.current && content && content.hero) {
      const words = textRef.current.querySelectorAll('span');

      gsap.set(words, { y: 30, opacity: 0 });
      gsap.to(words, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }
  }, [content]);
  
  // Safety check - ensure we have content and hero data
  if (isLoading || !content || !content.hero) {
    return (
      <section className="grid place-items-center relative w-full min-h-[80vh] sm:min-h-[90vh] md:mt-[140px] sm:mt-[100px] overflow-hidden mx-auto max-w-[100vw] sm:max-w-[95vw] bg-black">
        <div className="relative z-10 px-6 sm:px-8 max-w-7xl text-center w-full">
          <div className="brutalist-label text-white">Loading...</div>
        </div>
      </section>
    );
  }
  
  const hero = content.hero;

  return (
    <section className="grid place-items-center relative  w-full min-h-[80vh] sm:min-h-[90vh] mt-[140px] overflow-hidden mx-auto max-w-[100vw] sm:max-w-[95vw]">
      
      <video
        className="absolute inset-0 w-full h-[80vh] object-cover object-center gpu-accelerate"
        autoPlay muted loop playsInline poster={hero.posterSrc}
        preload="metadata"
      >
        <source src={hero.videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-1"></div>

      {/* Strong overlay for brutalist contrast */}

      <div className="relative z-10 px-6 sm:px-8 max-w-7xl text-center w-full">
        {/* Top label */}
        <motion.div
          className="inline-block mb-8"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="brutalist-card-inverted px-4 py-2 inline-block">
            <span className="brutalist-label font-bold text-white dark:text-black">
              {hero.tagline}
            </span>
          </div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="brutalist-heading xl:text-6xl text-white dark:text-black mb-6 bg-black/60 dark:bg-white/60 pt-2 pb-4 tracking-wide">
            <span 
              ref={textRef}
              className="block"
            >
              {hero.title.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-2 sm:mr-3">{word}</span>
              ))}
            </span>
          </h1>
          
          {/* Subtitle with border emphasis */}
          <div className="brutalist-border-box inline-block bg-black dark:bg-white px-6 py-3 mt-4">
            <p className="brutalist-card-title lg:text-4xl text-white dark:text-black">
              {hero.subtitle}
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <div className="brutalist-divider-bold" />
            <span className="brutalist-label text-white dark:text-black">
              Global Nexus Institute
            </span>
            <div className="brutalist-divider-bold" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
