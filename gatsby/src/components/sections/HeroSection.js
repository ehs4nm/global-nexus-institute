import React from 'react';

export const HeroSection = () => {
  return (
    <section className="h-screen grid place-items-center hero-grid relative dark:bg-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500/30 dark:via-white/30 to-transparent animate-pulseLine"></div>
        <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/70 dark:via-accent-500/50 to-transparent animate-pulseLine" style={{ animationDelay: "1.2s" }}></div>
      </div>
      <div className="relative z-10 px-6 md:px-12 max-w-5xl text-center">
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-gray-900 dark:text-white">
          <span className="block">Seeing the world's crises</span>
          <span className="block text-accent-500">— before they collide.</span>
        </h1>
        <p className="mt-6 text-gray-700 dark:text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
          We connect <span className="text-gray-900 dark:text-white">energy</span>, <span className="text-gray-900 dark:text-white">geopolitics</span>, and <span className="text-gray-900 dark:text-white">health</span> into one field of actionable intelligence — helping leaders prevent cascading global risks.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#mission" className="px-6 py-3 rounded bg-accent-500 hover:bg-accent-600 transition shadow-glow font-semibold text-white">Explore Our Mission</a>
          <a href="#contact" className="px-6 py-3 rounded border border-gray-300 dark:border-white/20 hover:border-accent-500 transition text-gray-900 dark:text-white">Partner With Us</a>
        </div>
      </div>
    </section>
  );
};