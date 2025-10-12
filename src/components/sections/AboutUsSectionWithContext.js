import React from 'react';
import { useContent } from '../../hooks/useContent';

export const AboutUsSectionWithContext = () => {
  const { content } = useContent();
  
  // Return null if content is not loaded yet
  if (!content || !content.aboutUs) {
    return null;
  }
  
  const aboutUsContent = content.aboutUs;
  
  return (
    <section id="about" className="brutalist-section text-gray-900 dark:text-white">
      {/* Subtle dot pattern background */}
      <div className="brutalist-bg-dots absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
      
      <div className="brutalist-container relative">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-6">
            <div className="brutalist-divider-bold mb-4" />
            <span className="brutalist-label">{aboutUsContent.sectionLabel}</span>
          </div>
          
          <h2 className="brutalist-heading mb-8">
            {aboutUsContent.mainTitle}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <p className="brutalist-card-title brutalist-label mb-6">
                {aboutUsContent.primaryDescription}
              </p>
              <p className="brutalist-body">
                {aboutUsContent.secondaryDescription}
              </p>
            </div>
            <div className="relative">
              <div className="brutalist-card-inverted p-6 sm:p-8">
                <p className="brutalist-body font-bold">
                  {aboutUsContent.missionStatement}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="mb-16">
          <h3 className="brutalist-card-title mb-8 sm:mb-12">{aboutUsContent.principlesTitle}</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutUsContent.principles && Array.isArray(aboutUsContent.principles) ? aboutUsContent.principles.map((principle, index) => (
              <div 
                key={principle.id}
                className="brutalist-card group overflow-hidden"
              >
                {/* Number Badge Overlay */}
                <div className="absolute top-0 right-0 bg-black dark:bg-white text-white dark:text-black brutalist-label font-bold px-3 py-1 brutalist-border-box border-t-0 border-r-0">
                  {principle.number}
                </div>
                
                <div className="p-6 sm:p-8">
                  <h4 className="brutalist-card-title text-xl sm:text-2xl mb-4 pr-12">
                    {principle.title}
                  </h4>
                  <p className="brutalist-body mb-6">
                    {principle.description}
                  </p>
                  
                  {/* Expanding bottom line on hover */}
                  <div className="h-1 w-8 bg-black dark:bg-white transition-all duration-300 group-hover:w-16" />
                </div>
              </div>
            )) : (
              <div className="col-span-full text-center brutalist-body text-gray-500">
                No principles data found. Please check your content structure.
              </div>
            )}
          </div>
        </div>

        {/* Bottom Divider with Text */}
        <div className="relative pt-8 brutalist-border-box border-t-2 border-b-0 border-x-0">
          <div className="text-center">
            <span className="inline-block bg-white dark:bg-black px-6 brutalist-label -mt-3">
              {aboutUsContent.bottomMessage}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};