import React from 'react';
import { useContent } from '../../hooks/useContent';

export const MissionSection = () => {
  const { content } = useContent();
  const mission = content.mission;
  return (
    <section id="mission" className="brutalist-section text-black dark:text-white">
      {/* Dot pattern background */}
      <div className="brutalist-bg-dots absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
      
      <div className="brutalist-container relative">
        {/* Section Header */}
        <div className="inline-block mb-6">
          <div className="brutalist-divider-bold mb-4" />
          <span className="brutalist-label">Our Mission</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="brutalist-heading mb-8">
              {mission.title}
            </h2>
            <p className="brutalist-card-title mb-6">
              {mission.paragraphs[0]}
            </p>
            <p className="brutalist-body">
              {mission.paragraphs[1]}
            </p>
          </div>
          
          <div className="relative">
            <div className="brutalist-border-box bg-white dark:bg-black p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-4">
                {mission.cards.map((card, index) => (
                  <div 
                    key={index} 
                    className={`group relative p-4 sm:p-6 ${
                      index === 3 ? 'brutalist-card-inverted' : 'brutalist-card'
                    }`}
                  >
                    <p className="brutalist-label mb-3">
                      {card.label}
                    </p>
                    <p className="brutalist-card-title text-lg sm:text-xl md:text-2xl">
                      {card.title}
                    </p>
                    
                    {/* Expanding line */}
                    <div className="h-1 w-6 bg-black dark:bg-white transition-all duration-300 group-hover:w-12 mt-4" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Caption below */}
            <div className="mt-6 text-center">
              <span className="brutalist-label">
                {mission.caption}
              </span>
            </div>
          </div>
        </div>
        
        {/* Bottom Divider */}
        <div className="relative pt-8 mt-16 brutalist-border-box border-t-2 border-b-0 border-x-0">
          <div className="text-center">
            <span className="inline-block bg-white dark:bg-black px-6 brutalist-label -mt-3">
              Breaking Silos Through Integration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
