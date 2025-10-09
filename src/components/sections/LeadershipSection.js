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
      className="min-h-[70vh] py-20 sm:py-24 md:py-32 bg-white dark:bg-black text-black dark:text-white flex items-center relative"
    >
      {/* Subtle background pattern */}
      <div className="brutalist-bg-dots absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none" />

      <div className="brutalist-container relative">
        
        {/* Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="space-y-6">
            <h2 className="brutalist-heading">
              Leadership
            </h2>
            
            <div className="brutalist-divider-bold"></div>
          </div>

          <p className="mt-8 brutalist-subheading">
            Led by global experts in health policy, energy strategy, and geopolitics — backed by advisors from leading institutions.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {leadershipData.map((p, idx) => (
            <button
              key={p.name}
              onClick={() => openPerson(p)}
              className="group text-left brutalist-card focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Number overlay */}
                <div className="absolute top-4 right-4 brutalist-label text-white bg-black/80 dark:bg-white/80 dark:text-black px-2 py-1 backdrop-blur-sm">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 space-y-2">
                <h3 className="brutalist-card-title text-xl sm:text-2xl">
                  {p.name}
                </h3>
                
                <p className="brutalist-body text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {p.title}
                </p>

                {/* Bottom accent line */}
                <div className="pt-4">
                  <div className="brutalist-accent-line"></div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 sm:mt-20 flex items-center gap-4">
          <div className="brutalist-divider flex-1"></div>
          <p className="brutalist-label brutalist-arrow">
            Expertise across continents and disciplines
          </p>
          <div className="brutalist-divider flex-1"></div>
        </div>
      </div>
    </section>
  );
};