import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useContent } from '../../hooks/useContent';

export const GallerySection = () => {
  const { content, isLoading } = useContent();
  const [hoveredId, setHoveredId] = useState(null);
  
  // Safety check - ensure we have content and gallery data
  if (isLoading || !content || !content.gallery) {
    return (
      <section id="gallery" className="min-h-screen py-20 sm:py-24 md:py-32 bg-white dark:bg-black text-black dark:text-white relative">
        <div className="brutalist-container relative flex items-center justify-center min-h-[50vh]">
          <div className="brutalist-label">Loading gallery data...</div>
        </div>
      </section>
    );
  }
  
  const gallery = content.gallery;

  return (
    <section
      id="gallery"
      className="brutalist-section text-black dark:text-white"
    >
      {/* Dot pattern background */}
      <div className="brutalist-bg-dots absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
      
      <div className="brutalist-container relative">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-block mb-6">
            <div className="brutalist-divider-bold mb-4" />
            <span className="brutalist-label">{gallery.upTitle}</span>
          </div>
          
          <h2 className="brutalist-heading mb-6">
            {gallery.title}
          </h2>
          <p className="brutalist-body max-w-3xl">
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
                className="brutalist-card group overflow-hidden"
              >
                {/* Number badge */}
                <div className="absolute top-0 right-0 bg-black dark:bg-white text-white dark:text-black brutalist-label font-bold px-3 py-1 brutalist-border-box border-t-0 border-r-0 z-10">
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
                
                <div className="bg-white dark:bg-black p-4 sm:p-6 brutalist-border-box border-l-0 border-r-0 border-b-0">
                  <h3 className="brutalist-card-title text-xl sm:text-2xl mb-2">
                    {panel.label}
                  </h3>
                  <p className="brutalist-body">
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
                className="brutalist-border-box group relative overflow-hidden flex flex-col transition-all duration-700 ease-out"
                style={{
                  flex: hoveredId === panel.id ? '8' : '1',
                  marginLeft: index > 0 ? '-2px' : '0'
                }}
                onMouseEnter={() => setHoveredId(panel.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Number badge */}
                <div className="absolute top-4 right-4 bg-black dark:bg-white text-white dark:text-black brutalist-label font-bold px-3 py-2 brutalist-border-box z-10">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="relative h-5/6 shrink-0">
                  <img
                    src={panel.img}
                    alt={panel.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange/30 to-transparent"></div>
                </div>

                <div className="bg-white dark:bg-black text-black dark:text-white p-4 flex-1 relative overflow-hidden brutalist-border-box border-l-0 border-r-0 border-b-0">
                  <div
                    className="brutalist-card-title text-xl sm:text-2xl transition-opacity duration-300"
                    style={{
                      opacity: hoveredId === null || hoveredId === panel.id ? 1 : 0
                    }}
                  >
                    {panel.label}
                  </div>
                  
                  <div
                    className="brutalist-body text-2xl mt-2 transition-all duration-500"
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
        <div className="relative pt-8 mt-16 brutalist-border-box border-t-2 border-b-0 border-x-0">
          <div className="text-center">
            <span className="inline-block bg-white dark:bg-black px-6 brutalist-label -mt-3">
              Signals from the Nexus
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};