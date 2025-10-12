import React from 'react';
import { useContent } from '../../hooks/useContent';

export const InitiativesSection = () => {
  const { content, isLoading } = useContent();
  
  // Safety check - ensure we have content and initiatives data
  if (isLoading || !content || !content.initiatives) {
    return (
      <section id="initiatives" className="brutalist-section text-black dark:text-white">
        <div className="brutalist-container relative flex items-center justify-center min-h-[50vh]">
          <div className="brutalist-label">Loading initiatives data...</div>
        </div>
      </section>
    );
  }
  
  const initiatives = content.initiatives;
  return (
    <section id="initiatives" className="brutalist-section text-black dark:text-white">
      {/* Dot pattern background */}
      <div className="brutalist-bg-dots absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
      
      <div className="brutalist-container relative">
        {/* Section Header */}
        <div className="inline-block mb-6">
          <div className="brutalist-divider-bold mb-4" />
          <span className="brutalist-label">Our Initiatives</span>
        </div>
        
        <header className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="brutalist-heading mb-6">
            {initiatives.title}
          </h2>
          <p className="brutalist-card-title">
            {initiatives.subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {initiatives.projects.map((project, index) => (
            <article 
              key={index} 
              className="brutalist-card group p-6 sm:p-8"
            >
              {/* Number badge */}
              <div className="absolute top-0 right-0 bg-black dark:bg-white text-white dark:text-black brutalist-label font-bold px-3 py-1 brutalist-border-box border-t-0 border-r-0">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Icon in a bordered box */}
              <div className="inline-flex items-center justify-center brutalist-border-box p-4 mb-6">
                <img src={project.icon} alt={project.title} className="w-32 h-32"/>
              </div>
              
              <h3 className="brutalist-card-title mb-4 pr-12">
                {project.title}
              </h3>
              
              <p className="brutalist-body mb-6">
                {project.description}
              </p>
              
              {/* Link with arrow */}
              <a 
                href={project.linkHref} 
                className="group/link inline-flex items-center gap-2 brutalist-label font-bold brutalist-border-box px-4 py-3 transition-all duration-300 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
              >
                {project.linkText}
                <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
              </a>
              
              {/* Expanding line */}
              <div className="h-1 w-8 bg-black dark:bg-white transition-all duration-300 group-hover:w-16 mt-6" />
            </article>
          ))}
        </div>
        
        {/* Bottom Divider */}
        <div className="relative pt-8 mt-16 brutalist-border-box border-t-2 border-b-0 border-x-0">
          <div className="text-center">
            <span className="inline-block bg-white dark:bg-black px-6 brutalist-label -mt-3">
              Turning Foresight Into Global Impact
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
