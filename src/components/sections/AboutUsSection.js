import React from 'react';

export const AboutUsSection = () => {
  return (
    <section id="mission" className="relative h-[50vh] flex items-center text-gray-800 dark:text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8">
          <div className="h-full"></div>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="heading-1 font-display text-3xl sm:text-5xl font-extrabold leading-tight">
              About Us
            </h2>
            <p className="mt-6 text-xl text-gray-700 dark:text-white/80">
              Energy shocks fuel conflict. Conflict spreads disease. Health crises destabilize economies. Yet global policy and research remain siloed.
            </p>
            <p className="mt-6 text-gray-600 dark:text-white/70">
              The Global Nexus Institute (GNI) exists to break those silos — integrating energy, geopolitics, and health into a single field of foresight and action.
            </p>
          </div>
          <div className="relative">
            <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
              <div className="grid grid-cols-2 gap-4 text-center">

              </div>
            </div>
            <p className="mt-4 text-gray-500 dark:text-white/60 text-sm">A connected world demands connected intelligence.</p>
          </div>
        </div>
      </div>
    </section>
  );
};