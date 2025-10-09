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
      className="pt-12 sm:pt-16 md:pt-20 flex items-center"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Mobile Grid */}
        <div className="block md:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gallery.items.map((panel) => (
              <Link
                key={panel.id}
                to={`/insights/${panel.slug}`}
                className="group relative overflow-hidden transition-all duration-500"
              >
                <img
                  src={panel.img}
                  alt={panel.label}
                  className="w-full h-[70vh] sm:h-56 object-cover"
                />
                <div className="p-3 text-black">
                  <div className="font-display text-lg">{panel.label}</div>
                  <div className="text-sm mt-1">
                    {panel.pageContent.subtitle}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Expandable */}
        <div className="hidden md:block">
          <div className="flex gap-3 h-[60vh] lg:h-[70vh]">
            {gallery.items.map((panel) => (
              <Link
                key={panel.id}
                to={`/insights/${panel.slug}`}
                className="relative overflow-hidden flex flex-col transition-all duration-700 ease-out"
                style={{
                  flex: hoveredId === panel.id ? '8' : '1'
                }}
                onMouseEnter={() => setHoveredId(panel.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-5/6 shrink-0">
                  <img
                    src={panel.img}
                    alt={panel.label}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-4 flex-1 relative overflow-hidden">
                  <div
                    className="font-display text-xl transition-opacity duration-300"
                    style={{
                      opacity: hoveredId === null || hoveredId === panel.id ? 1 : 0
                    }}
                  >
                    {panel.label}
                  </div>
                  
                  <div
                    className="text-sm mt-2 transition-all duration-500"
                    style={{
                      opacity: hoveredId === panel.id ? 1 : 0,
                      maxHeight: hoveredId === panel.id ? '200px' : '0',
                      overflow: 'hidden'
                    }}
                  >
                    {panel.pageContent.subtitle}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};