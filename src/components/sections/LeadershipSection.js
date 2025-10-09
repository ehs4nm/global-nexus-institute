import React from 'react';
import { useMenu } from '../../hooks/useMenu';
import { useContent } from '../../hooks/useContent';

export const LeadershipSection = () => {
  const { openPerson } = useMenu();
  const { content } = useContent();
  const leadershipData = content.leadership;

  return (
    <section 
      id="leadership" 
      className="min-h-[70vh] py-20 sm:py-24 md:py-32 bg-white dark:bg-black text-black dark:text-white flex items-center"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="space-y-6">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Leadership
            </h2>
            
            <div className="w-16 h-1 bg-black dark:bg-white"></div>
          </div>

          <p className="mt-8 text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Led by global experts in health policy, energy strategy, and geopolitics — backed by advisors from leading institutions.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {leadershipData.map((p, idx) => (
            <button
              key={p.name}
              onClick={() => openPerson(p)}
              className="group text-left border-2 border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black bg-white dark:bg-black"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Number overlay */}
                <div className="absolute top-4 right-4 text-xs font-mono text-white bg-black/80 dark:bg-white/80 dark:text-black px-2 py-1 backdrop-blur-sm">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 space-y-2">
                <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">
                  {p.name}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-snug">
                  {p.title}
                </p>

                {/* Bottom accent line */}
                <div className="pt-4">
                  <div className="w-0 h-0.5 bg-black dark:bg-white transition-all duration-500 group-hover:w-full"></div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 sm:mt-20 flex items-center gap-4">
          <div className="h-px flex-1 bg-black/10 dark:bg-white/10"></div>
          <p className="text-sm font-mono text-gray-500 dark:text-gray-400 tracking-wide">
            → Expertise across continents and disciplines
          </p>
          <div className="h-px flex-1 bg-black/10 dark:bg-white/10"></div>
        </div>
      </div>
    </section>
  );
};