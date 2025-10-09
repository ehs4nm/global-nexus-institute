import React from 'react';
import { useMenu } from '../../hooks/useMenu';
import { useContent } from '../../hooks/useContent';

export const LeadershipSection = () => {
  const { openPerson } = useMenu();
  const { content } = useContent();
  const leadershipData = content.leadership;

  return (
    <section id="leadership" className="min-h-[70vh] py-12 sm:py-16 md:py-20 border-black/10 dark:border-white/[0.06] flex items-center text-gray-800 dark:text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-8 sm:mb-10">
          <h2 className="heading-1 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">Leadership</h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 dark:text-white/80 leading-relaxed">Led by global experts in health policy, energy strategy, and geopolitics — backed by advisors from leading institutions.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {leadershipData.map((p) => (
            <button
              key={p.name}
              onClick={() => openPerson(p)}
              className="group text-left p-4 sm:p-6 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-accent-500/50 transition focus:outline-none focus:ring-2 focus:ring-accent-500 min-h-[280px] sm:min-h-[320px]"
            >
              <div className="rounded-xl bg-accent-500/30 aspect-square overflow-hidden">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="mt-3 sm:mt-4 font-display text-lg sm:text-xl font-semibold">{p.name}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-white/70">{p.title}</p>
              <div className="mt-6 h-1 w-16 bg-accent-500 group-hover:w-24 transition-all"></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};