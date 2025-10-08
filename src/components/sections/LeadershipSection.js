import React from 'react';
import { useMenu } from '../../hooks/useMenu';
import { leadershipData } from '../../data/leadership';

export const LeadershipSection = () => {
  const { openPerson } = useMenu();

  return (
    <section id="leadership" className="h-screen  border-black/10 dark:border-white/[0.06] flex items-center text-gray-800 dark:text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">Leadership</h2>
          <p className="mt-6 text-gray-700 dark:text-white/80">Led by global experts in health policy, energy strategy, and geopolitics — backed by advisors from leading institutions.</p>
        </header>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipData.map((p) => (
            <button
              key={p.name}
              onClick={() => openPerson(p)}
              className="group text-left p-6 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-accent-500/50 transition focus:outline-none focus:ring-2 focus:ring-accent-500"
            >
              <div className="rounded-xl bg-accent-500/30 aspect-square overflow-hidden">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{p.name}</h3>
              <p className="text-gray-600 dark:text-white/70">{p.title}</p>
              <div className="mt-6 h-1 w-16 bg-accent-500 group-hover:w-24 transition-all"></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};