import React from 'react';
import { Link } from 'gatsby';
import { useContent } from '../../hooks/useContent';

export const GallerySection = () => {
  const { content } = useContent();
  const gallery = content.gallery;

  return (
    <section id="gallery" className="min-h-screen py-12 sm:py-16 md:py-20 border-black/5 dark:border-white/10 flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <header className="max-w-4xl mb-6 sm:mb-8">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">{gallery.title}</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 dark:text-white/70 leading-relaxed">{gallery.subtitle}</p>
        </header>
        {/* Mobile: Grid layout for better usability */}
        <div className="block md:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gallery.items.map((panel) => (
              <Link key={panel.id} to={`/insights/${panel.slug}`} className="relative h-48 sm:h-56 overflow-hidden rounded-xl border border-black/10 dark:border-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/20">
                <img src={panel.img} alt={panel.label} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
                <div className="absolute bottom-3 left-3 right-3 font-display text-lg text-white">{panel.label}</div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Desktop: Horizontal expandable layout */}
        <div className="hidden md:block">
          <div className="group flex gap-3 h-[60vh] lg:h-[70vh]">
            {gallery.items.map((panel) => (
              <Link key={panel.id} to={`/insights/${panel.slug}`} className="relative flex-1 overflow-hidden rounded-xl border border-black/10 dark:border-white/10 transition-[flex] duration-500 ease-out hover:flex-[8] hover:shadow-2xl hover:shadow-accent-500/20">
                <img src={panel.img} alt={panel.label} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 font-display text-xl text-white">{panel.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
