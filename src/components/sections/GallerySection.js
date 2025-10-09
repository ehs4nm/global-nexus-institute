import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useContent } from '../../hooks/useContent';

export const GallerySection = () => {
  const { content } = useContent();
  const gallery = content.gallery;
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="gallery"
      className="relative min-h-screen py-16 sm:py-20 md:py-24 bg-white dark:bg-black text-black dark:text-white border-t-2 border-black dark:border-white"
    >
      {/* Dot pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-block mb-6">
            <div className="h-1 w-16 bg-black dark:bg-white mb-4" />
            <span className="font-mono text-xs uppercase tracking-widest">Explore Our Work</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6">
            {gallery.title}
          </h2>
          <p className="text-base sm:text-lg max-w-3xl">
            {gallery.subtitle}
          </p>
        </div>
        {/* Mobile Grid */}
        <div className="block md:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {gallery.items.map((panel, index) => (
              <Link
                key={panel.id}
                to={`/insights/${panel.slug}`}
                className="group relative border-2 border-black dark:border-white overflow-hidden transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
              >
                {/* Number badge */}
                <div className="absolute top-0 right-0 bg-black dark:bg-white text-white dark:text-black font-mono text-xs sm:text-sm font-bold px-3 py-1 border-l-2 border-b-2 border-black dark:border-white z-10">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="relative h-[50vh] sm:h-64 overflow-hidden">
                  <img
                    src={panel.img}
                    alt={panel.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                
                <div className="bg-white dark:bg-black p-4 sm:p-6 border-t-2 border-black dark:border-white">
                  <h3 className="font-display text-xl sm:text-2xl font-bold mb-2">
                    {panel.label}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    {panel.pageContent.subtitle}
                  </p>
                  
                  {/* Expanding line */}
                  <div className="h-1 w-8 bg-black dark:bg-white transition-all duration-300 group-hover:w-16 mt-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Expandable */}
        <div className="hidden md:block">
          <div className="flex gap-0 h-[60vh] lg:h-[70vh]">
            {gallery.items.map((panel, index) => (
              <Link
                key={panel.id}
                to={`/insights/${panel.slug}`}
                className="group relative overflow-hidden flex flex-col transition-all duration-700 ease-out border-2 border-black dark:border-white"
                style={{
                  flex: hoveredId === panel.id ? '8' : '1',
                  marginLeft: index > 0 ? '-2px' : '0'
                }}
                onMouseEnter={() => setHoveredId(panel.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Number badge */}
                <div className="absolute top-4 right-4 bg-black dark:bg-white text-white dark:text-black font-mono text-sm font-bold px-3 py-2 border-2 border-black dark:border-white z-10">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="relative h-5/6 shrink-0">
                  <img
                    src={panel.img}
                    alt={panel.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                <div className="bg-white dark:bg-black text-black dark:text-white p-4 flex-1 relative overflow-hidden border-t-2 border-black dark:border-white">
                  <div
                    className="font-display text-xl sm:text-2xl font-bold transition-opacity duration-300"
                    style={{
                      opacity: hoveredId === null || hoveredId === panel.id ? 1 : 0
                    }}
                  >
                    {panel.label}
                  </div>
                  
                  <div
                    className="text-sm mt-2 transition-all duration-500 leading-relaxed"
                    style={{
                      opacity: hoveredId === panel.id ? 1 : 0,
                      maxHeight: hoveredId === panel.id ? '200px' : '0',
                      overflow: 'hidden'
                    }}
                  >
                    {panel.pageContent.subtitle}
                  </div>
                  
                  {/* Expanding line - only visible when expanded */}
                  <div 
                    className="h-1 bg-black dark:bg-white transition-all duration-500 mt-4"
                    style={{
                      width: hoveredId === panel.id ? '64px' : '0'
                    }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Bottom Divider */}
        <div className="relative pt-8 mt-16 border-t-2 border-black dark:border-white">
          <div className="text-center">
            <span className="inline-block bg-white dark:bg-black px-6 font-mono text-xs uppercase tracking-widest -mt-3">
              Signals from the Nexus
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};