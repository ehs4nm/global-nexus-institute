import React from 'react';

export const ContactSection = () => {
  return (
    <section id="contact" className="min-h-[60vh] py-12 sm:py-16 md:py-20 border-black/10 dark:border-white/[0.06] relative overflow-hidden flex items-center text-gray-800 dark:text-white">
      <div className="absolute -inset-y-24 -inset-x-10 opacity-20 blur-3xl bg-accent-500/20"></div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="title-hero font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">Join the Nexus.</h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 dark:text-white/80 leading-relaxed">Shape the future of global foresight. Partner with GNI to build resilient, informed, and equitable systems.</p>
        <form className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="name" placeholder="Name" className="sm:col-span-1 w-full px-4 py-3 sm:py-4 rounded-lg border border-gray-300 dark:border-white/15 bg-white dark:bg-black/60 focus:outline-none focus:ring-2 focus:ring-accent-500 placeholder-gray-500 dark:placeholder-white/40 text-gray-800 dark:text-white text-base" />
          <input type="email" name="email" placeholder="Email" className="sm:col-span-1 w-full px-4 py-3 sm:py-4 rounded-lg border border-gray-300 dark:border-white/15 bg-white dark:bg-black/60 focus:outline-none focus:ring-2 focus:ring-accent-500 placeholder-gray-500 dark:placeholder-white/40 text-gray-800 dark:text-white text-base" />
          <button type="submit" className="sm:col-span-1 w-full px-6 py-3 sm:py-4 rounded-lg bg-accent-500 hover:bg-accent-600 active:bg-accent-700 transition shadow-glow font-semibold text-white text-base min-h-[48px] touch-manipulation">Contact Our Team</button>
        </form>
      </div>
    </section>
  );
};