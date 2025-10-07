import React from 'react';

export const SloganSection = () => {
  return (
    <section id="slogan" className="h-screen relative flex items-center justify-center overflow-hidden border-t border-black/5 dark:border-white/10">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline poster="assets/1.jpg">
        <source src="assets/video-8.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/30 dark:bg-black/30"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight dark:text-white">
          Foresight for a Connected World
        </h2>
      </div>
    </section>
  );
};