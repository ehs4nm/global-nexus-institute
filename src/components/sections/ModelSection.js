import React from 'react';
import { useContent } from '../../hooks/useContent';

export const ModelSection = () => {

    const { content, isLoading } = useContent();
    
    // Safety check - ensure we have content and pillars data
    if (isLoading || !content || !content.pillars) {
      return (
        <section id="pillars" className="brutalist-section text-black dark:text-white flex items-center min-h-screen">
          <div className="brutalist-container relative w-full py-8 flex items-center justify-center">
            <div className="brutalist-label">Loading pillars data...</div>
          </div>
        </section>
      );
    }
    
    const pillars = content.pillars || {};
    const cards = pillars.cards || [];


  return (
    <section
      id="model"
      className="relative brutalist-section-inverted flex items-center overflow-hidden"
    >
      <div className="relative brutalist-container">
        {/* Header */}
        <div className="max-w-4xl mb-16 sm:mb-20 relative z-10">
          <div className="space-y-6">
            <h2 className="brutalist-heading">
              {pillars.title}
              
            </h2>
            <div className="brutalist-divider-bold"></div>
          </div>
          <p className="mt-8 brutalist-subheading">
            {pillars.subtitle}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {cards.map((pillar, idx) => (
            <article
              key={idx}
              className="brutalist-card-minimal group p-8 text-white dark:text-black relative"
            >
              {/* Number indicator */}
              <div className="absolute top-4 right-4 brutalist-number-badge">
                {pillar.number}
              </div>

              <div className="space-y-6">
                <h3 className="brutalist-card-title">{pillar.title}</h3>
                <p className="brutalist-body text-gray-400 dark:text-gray-600">
                  {pillar.description}
                  {pillar.highlight && (
                    <span className="block mt-1 font-medium">{pillar.highlight}</span>
                  )}
                </p>
                <div className="pt-4">
                  <div className="brutalist-accent-line"></div>
                </div>
              </div>
            </article>
          ))}
        
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-16 flex items-center gap-4 relative z-10">
          <div className="brutalist-divider flex-1"></div>
          <p className="brutalist-label">Four pillars. One integrated approach.</p>
          <div className="brutalist-divider flex-1"></div>
        </div>
      </div>
    </section>
  );
};
