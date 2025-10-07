import React from 'react';

export const InitiativesSection = () => {
  return (
    <section id="initiatives" className="h-screen border-t border-black/5 dark:border-white/[0.06] flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">Turning foresight into global impact.</h2>
          <p className="mt-6 text-gray-700 dark:text-white/80">Two examples that make our mission tangible.</p>
        </header>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <article className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
            <div className="text-4xl">🛰️</div>
            <h3 className="mt-3 font-display text-2xl font-bold">Global Chokepoints Initiative</h3>
            <p className="mt-3 text-gray-600 dark:text-white/75">Mapping critical energy, trade, and health bottlenecks — and modeling how disruptions cascade across systems.</p>
            <a href="#contact" className="mt-6 inline-block text-accent-600 dark:text-accent-400 hover:underline underline-offset-4">Discuss the project</a>
          </article>
          <article className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
            <div className="text-4xl">🌍</div>
            <h3 className="mt-3 font-display text-2xl font-bold">Energy Transition Health Index (ETHI)</h3>
            <p className="mt-3 text-gray-600 dark:text-white/75">Ranking countries on the health impact of their energy transitions — from air quality to equity.</p>
            <a href="#contact" className="mt-6 inline-block text-accent-600 dark:text-accent-400 hover:underline underline-offset-4">Explore ETHI</a>
          </article>
        </div>
      </div>
    </section>
  );
};