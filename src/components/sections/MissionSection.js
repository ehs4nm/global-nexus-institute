import React from 'react';
import { useContent } from '../../hooks/useContent';

export const MissionSection = () => {
  const { content } = useContent();
  const mission = content.mission;
  return (
    <section id="mission" className="relative min-h-screen py-16 sm:py-20 md:py-24 bg-white dark:bg-black text-black dark:text-white border-t-2 border-black dark:border-white">
      {/* Dot pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="inline-block mb-6">
          <div className="h-1 w-16 bg-black dark:bg-white mb-4" />
          <span className="font-mono text-xs uppercase tracking-widest">Our Mission</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-8">
              {mission.title}
            </h2>
            <p className="text-xl sm:text-2xl font-bold leading-tight mb-6">
              {mission.paragraphs[0]}
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              {mission.paragraphs[1]}
            </p>
          </div>
          
          <div className="relative">
            <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-4">
                {mission.cards.map((card, index) => (
                  <div 
                    key={index} 
                    className={`group relative border-2 border-black dark:border-white p-4 sm:p-6 transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] ${
                      index === 3 ? 'bg-black dark:bg-white text-white dark:text-black' : 'bg-white dark:bg-black'
                    }`}
                  >
                    <p className="font-mono text-xs uppercase tracking-widest mb-3">
                      {card.label}
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl font-display font-bold leading-tight">
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
              <span className="font-mono text-xs uppercase tracking-widest">
                {mission.caption}
              </span>
            </div>
          </div>
        </div>
        
        {/* Bottom Divider */}
        <div className="relative pt-8 mt-16 border-t-2 border-black dark:border-white">
          <div className="text-center">
            <span className="inline-block bg-white dark:bg-black px-6 font-mono text-xs uppercase tracking-widest -mt-3">
              Breaking Silos Through Integration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
