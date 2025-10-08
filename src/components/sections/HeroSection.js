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
    <section className="grid place-items-center hero-grid relative dark:bg-black w-[85vw] h-[90vh] mx-auto mt-[160px] rounded-xl overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay muted loop playsInline poster={hero.posterSrc}
      >
        <source src={hero.videoSrc} type="video/mp4" />
      </video>

      {/* Overlay with rounded corners matching the video */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>

      <div className="relative z-10 px-6 md:px-12 max-w-5xl text-center">
        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible" // Changed from 'whileInView'
        >
          {/* The rest of the content remains exactly the same
          <motion.div className="flex items-center justify-center gap-4 mb-6" variants={itemVariants}>
            <img src="/assets/favicon_io/android-chrome-512x512.png" alt="logo" className='w-32 h-32 rounded-xl' />
          </motion.div> */}

          <motion.h2
            className="font-display sm:text-6xl md:text-7xl font-extrabold leading-tight text-white"
            variants={itemVariants}
            style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5)' }}
          >

          </motion.h2>
        </motion.div>
        
        <div><p className='text-white text-lg font-bold'>{hero.tagline}</p></div>
        <h1 className="font-title-bold font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
          <span 
            ref={textRef}
            className="block"
          >
            {hero.title.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-2">{word}</span>
            ))}
          </span>
          <span className="block text-accent-500">{hero.subtitle}</span>
        </h1>

        {/* rest of component unchanged */}
      </div>
    </section>
  );
};
