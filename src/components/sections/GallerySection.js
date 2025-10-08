import React from 'react';
import { Link } from 'gatsby';
import { useContent } from '../../hooks/useContent';

export const GallerySection = () => {
  const { content } = useContent();
  const gallery = content.gallery;

  return (
    <section id="gallery" className="h-screen  border-black/5 dark:border-white/10 flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <header className="max-w-4xl mb-8">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">{gallery.title}</h2>
          <p className="mt-4 text-gray-700 dark:text-white/70">{gallery.subtitle}</p>
        </header>
        <div className="group flex gap-3 h-[70vh]">
          {gallery.items.map((panel) => (
            <Link key={panel.id} to={`/insights/${panel.slug}`} className="relative flex-1 overflow-hidden rounded-xl border border-black/10 dark:border-white/10 transition-[flex] duration-500 ease-out hover:flex-[8] hover:shadow-2xl hover:shadow-accent-500/20">
              <img src={panel.img} alt={panel.label} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 font-display text-xl text-white">{panel.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
