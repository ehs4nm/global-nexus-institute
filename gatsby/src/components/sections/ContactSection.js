import React from 'react';

export const ContactSection = () => {
  return (
    <section id="contact" className="h-screen border-t border-black/10 dark:border-white/[0.06] relative overflow-hidden flex items-center text-gray-800 dark:text-white">
      <div className="absolute -inset-y-24 -inset-x-10 opacity-20 blur-3xl bg-accent-500/20"></div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">Join the Nexus.</h2>
        <p className="mt-6 text-gray-700 dark:text-white/80">Shape the future of global foresight. Partner with GNI to build resilient, informed, and equitable systems.</p>
        <form className="mt-10 grid sm:grid-cols-3 gap-3" onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="name" placeholder="Name" className="sm:col-span-1 col-span-3 w-full px-4 py-3 rounded border border-gray-300 dark:border-white/15 bg-white dark:bg-black/60 focus:outline-none focus:ring-2 focus:ring-accent-500 placeholder-gray-500 dark:placeholder-white/40 text-gray-800 dark:text-white" />
          <input type="email" name="email" placeholder="Email" className="sm:col-span-1 col-span-3 w-full px-4 py-3 rounded border border-gray-300 dark:border-white/15 bg-white dark:bg-black/60 focus:outline-none focus:ring-2 focus:ring-accent-500 placeholder-gray-500 dark:placeholder-white/40 text-gray-800 dark:text-white" />
          <button type="submit" className="sm:col-span-1 col-span-3 px-6 py-3 rounded bg-accent-500 hover:bg-accent-600 transition shadow-glow font-semibold text-white">Contact Our Team</button>
        </form>
      </div>
    </section>
  );
};