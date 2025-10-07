import React from 'react';

export const ModelSection = () => {
  return (
    <section id="model" className="h-screen border-t border-black/10 dark:border-white/[0.06] flex items-center text-gray-800 dark:text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">From research to real-world impact.</h2>
          <p className="mt-6 text-gray-700 dark:text-white/80">GNI operates through four interconnected pillars that turn insight into action.</p>
        </header>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <article className="group p-6 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] hover:border-accent-500/50 transition">
            <h3 className="font-display text-xl font-semibold">Research Clusters</h3>
            <p className="mt-3 text-gray-600 dark:text-white/70">Understanding the <span className="text-gray-800 dark:text-white">what</span>.</p>
            <div className="mt-6 h-1 w-16 bg-accent-500 group-hover:w-24 transition-all"></div>
          </article>
          <article className="group p-6 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] hover:border-accent-500/50 transition">
            <h3 className="font-display text-xl font-semibold">Geospatial &amp; Data Intelligence</h3>
            <p className="mt-3 text-gray-600 dark:text-white/70">Mapping the <span className="text-gray-800 dark:text-white">where &amp; when</span>.</p>
            <div className="mt-6 h-1 w-16 bg-accent-500 group-hover:w-24 transition-all"></div>
          </article>
          <article className="group p-6 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] hover:border-accent-500/50 transition">
            <h3 className="font-display text-xl font-semibold">Actionable Intelligence</h3>
            <p className="mt-3 text-gray-600 dark:text-white/70">Translating insight into decisions.</p>
            <div className="mt-6 h-1 w-16 bg-accent-500 group-hover:w-24 transition-all"></div>
          </article>
          <article className="group p-6 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] hover:border-accent-500/50 transition">
            <h3 className="font-display text-xl font-semibold">Alliances &amp; Communications</h3>
            <p className="mt-3 text-gray-600 dark:text-white/70">Amplifying global influence.</p>
            <div className="mt-6 h-1 w-16 bg-accent-500 group-hover:w-24 transition-all"></div>
          </article>
        </div>
      </div>
    </section>
  );
};