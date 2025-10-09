import React from 'react';
import { useContent } from '../../hooks/useContent';

export const InitiativesSection = () => {
  const { content } = useContent();
  const initiatives = content.initiatives;
  return (
    <section id="initiatives" className="relative min-h-screen py-16 sm:py-20 md:py-24 bg-white dark:bg-black text-black dark:text-white border-t-2 border-black dark:border-white">
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
          <span className="font-mono text-xs uppercase tracking-widest">Our Initiatives</span>
        </div>
        
        <header className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6">
            {initiatives.title}
          </h2>
          <p className="text-xl sm:text-2xl font-bold leading-tight">
            {initiatives.subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {initiatives.projects.map((project, index) => (
            <article 
              key={index} 
              className="group relative border-2 border-black dark:border-white bg-white dark:bg-black p-6 sm:p-8 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
            >
              {/* Number badge */}
              <div className="absolute top-0 right-0 bg-black dark:bg-white text-white dark:text-black font-mono text-xs sm:text-sm font-bold px-3 py-1 border-l-2 border-b-2 border-black dark:border-white">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Icon in a bordered box */}
              <div className="inline-flex items-center justify-center border-2 border-black dark:border-white p-4 mb-6">
                <span className="text-4xl sm:text-5xl">{project.icon}</span>
              </div>
              
              <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight mb-4 pr-12">
                {project.title}
              </h3>
              
              <p className="text-sm sm:text-base leading-relaxed mb-6">
                {project.description}
              </p>
              
              {/* Link with arrow */}
              <a 
                href={project.linkHref} 
                className="group/link inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold border-2 border-black dark:border-white px-4 py-3 transition-all duration-300 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
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
        <div className="relative pt-8 mt-16 border-t-2 border-black dark:border-white">
          <div className="text-center">
            <span className="inline-block bg-white dark:bg-black px-6 font-mono text-xs uppercase tracking-widest -mt-3">
              Turning Foresight Into Global Impact
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
