import React from 'react';
import { useContent } from '../../hooks/useContent';

export const MissionSection = () => {
  const { content, isLoading } = useContent();
  
  // Safety check - ensure we have content and mission data
  if (isLoading || !content || !content.mission) {
    return (
      <section id="mission" className="refined-section">
        <div className="refined-container relative flex items-center justify-center min-h-[50vh]">
          <div className="refined-label">Loading mission data...</div>
        </div>
      </section>
    );
  }
  
  const mission = content.mission;
  
  return (
    <section id="mission" className="refined-section">
      {/* Subtle gradient background instead of dots */}
      <div className="refined-bg-gradient absolute inset-0 pointer-events-none" />
      
      <div className="refined-container relative">
        {/* Section Header - Softer approach */}
        <div className="mb-16">
          <div className="refined-accent-line mb-4" />
          <span className="refined-label">Our Mission</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h2 className="refined-heading">
              {mission.title}
            </h2>
            
            <p className="refined-intro">
              {mission.paragraphs[0]}
            </p>
            
            <p className="refined-body">
              {mission.paragraphs[1]}
            </p>
          </div>
          
          {/* Right Column - Cards with soft shadows */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {mission.cards.map((card, index) => (
                <div 
                  key={index} 
                  className={`group refined-hover-lift ${
                    index === 3 ? 'refined-card-inverted' : 'refined-card'
                  } p-8`}
                >
                  <div className="space-y-4">
                    <p className="refined-label">
                      {card.label}
                    </p>
                    
                    <p className="refined-card-title text-2xl">
                      {card.title}
                    </p>
                    
                    {/* Soft expanding line */}
                    <div className="refined-accent-line" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Caption below - more breathing room */}
            <div className="mt-10 text-center">
              <span className="refined-label">
                {mission.caption}
              </span>
            </div>
          </div>
        </div>
        
        {/* Bottom Section - Softer separator */}
        <div className="relative pt-16 mt-24">
          <div className="refined-divider" />
          <div className="flex justify-center -mt-3">
            <div className="bg-white dark:bg-[#0a0a0a] px-8">
              <span className="refined-label">
                Breaking Silos Through Integration
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
