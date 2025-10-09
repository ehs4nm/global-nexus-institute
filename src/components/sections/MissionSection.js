import React from 'react';
import { useContent } from '../../hooks/useContent';

export const MissionSection = () => {
  const { content } = useContent();
  const mission = content.mission;
  return (
    <section id="mission" className="relative min-h-[60vh] py-12 sm:py-16 md:py-20 flex items-center text-gray-800 dark:text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8">
          <div className="h-full"></div>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div>
            <h2 className="heading-1 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              {mission.title}
            </h2>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-700 dark:text-white/80 leading-relaxed">
              {mission.paragraphs[0]}
            </p>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 dark:text-white/70 leading-relaxed">
              {mission.paragraphs[1]}
            </p>
          </div>
          <div className="relative">
            <div className="p-4 sm:p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] mt-8 lg:mt-0">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                {mission.cards.map((card, index) => (
                  <div key={index} className={`p-3 sm:p-4 md:p-6 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-black/60`}>
                    <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 dark:text-white/60">{card.label}</p>
                    <p className={`mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl font-display font-bold ${index === 3 ? 'text-accent-500' : ''}`}>{card.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-gray-500 dark:text-white/60 text-sm">{mission.caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
};