import React from 'react';
import { Link } from 'gatsby';
import { useContent } from '../../hooks/useContent';

export const GallerySection = () => {
  const { content } = useContent();
  const gallery = content.gallery;

  return (
    <section
      id="gallery"
      className="min-h-screen py-12 sm:py-16 md:py-20 border-black/5 dark:border-white/10 flex items-center"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <header className="max-w-4xl mb-6 sm:mb-8">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            {gallery.title}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 dark:text-white/70 leading-relaxed">
            {gallery.subtitle}
          </p>
        </header>

        {/* Mobile Grid */}
        <div className="block md:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gallery.items.map((panel) => (
              <Link
                key={panel.id}
                to={`/insights/${panel.slug}`}
                // ADJUSTMENT: duration-300 -> duration-500 for smoother mobile hover
                className="group relative border border-black/10 dark:border-white/10 overflow-hidden transition-all duration-500"
              >
                <img
                  src={panel.img}
                  alt={panel.label}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="p-3 text-black">
                  <div className="font-display text-lg">{panel.label}</div>
                  {/* ADJUSTMENT: duration-300 -> duration-500 for smoother opacity fade */}
                  <div className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-1">
                    {panel.pageContent.sections.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Expandable */}
        <div className="hidden md:block">
          <div className="group flex gap-3 h-[60vh] lg:h-[70vh]">
            {gallery.items.map((panel) => (
              <Link
                key={panel.id}
                to={`/insights/${panel.slug}`}
                // ADJUSTMENT: duration-1500 ease-in-out -> duration-500 ease-out for snappier expansion
                className="group/item relative flex-1 overflow-hidden flex flex-col transition-[flex] duration-500 ease-out hover:flex-[8]"
              >
                <div className="relative flex-1">
                  <img
                    src={panel.img}
                    alt={panel.label}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                {/* Kept inner transition-all duration-500 for general styling changes */}
                <div className="text-black p-4 transition-all duration-500">
                  <div className="font-display text-xl">{panel.label}</div>
                  {/* ADJUSTMENT: transition-[flex] duration-1500 -> transition-opacity duration-500 
                      Allows subtitle to fade in smoothly and independently of the flex animation.
                  */}
                  <div className="hidden text-sm opacity-0 group-hover/item:opacity-100 group-hover/item:block transition-opacity duration-500 mt-2 ease-in-out">
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