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
    <section className="grid place-items-center relative  w-full min-h-[80vh] sm:min-h-[90vh] md:min-h-screen mt-[140px] overflow-hidden mx-auto max-w-[100vw] sm:max-w-[95vw]">
      <video
        className="absolute inset-0 w-full h-[80vh] object-cover object-center gpu-accelerate"
        autoPlay muted loop playsInline poster={hero.posterSrc}
        preload="metadata"
      >
        <source src={hero.videoSrc} type="video/mp4" />
      </video>

      {/* Strong overlay for brutalist contrast */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 px-6 sm:px-8 max-w-7xl text-center w-full">
        {/* Top label */}
        <motion.div
          className="inline-block mb-8"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="border-2 border-white bg-white text-black px-4 py-2 inline-block">
            <span className="font-mono text-xs uppercase tracking-widest font-bold">
              {hero.tagline}
            </span>
          </div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] text-white mb-6">
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
          <div className="inline-block border-2 border-white bg-black px-6 py-3 mt-4">
            <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              {hero.subtitle}
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <div className="h-1 w-16 bg-white" />
            <span className="font-mono text-xs uppercase tracking-widest text-white">
              Global Nexus Institute
            </span>
            <div className="h-1 w-16 bg-white" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
