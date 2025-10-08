import React from 'react';
import { useContent } from '../../hooks/useContent';

export const InitiativesSection = () => {
  const { content } = useContent();
  const initiatives = content.initiatives;
  return (
    <section id="initiatives" className="h-screen  border-black/5 dark:border-white/[0.06] flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">{initiatives.title}</h2>
          <p className="mt-6 text-gray-700 dark:text-white/80">{initiatives.subtitle}</p>
        </header>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {initiatives.projects.map((project, index) => (
            <article key={index} className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
              <div className="text-4xl">{project.icon}</div>
              <h3 className="mt-3 font-display text-2xl font-bold">{project.title}</h3>
              <p className="mt-3 text-gray-600 dark:text-white/75">{project.description}</p>
              <a href={project.linkHref} className="mt-6 inline-block text-accent-600 dark:text-accent-400 hover:underline underline-offset-4">{project.linkText}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};