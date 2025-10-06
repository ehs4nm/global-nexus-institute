import React from 'react';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 dark:border-white/[0.06] py-10 text-gray-800 dark:text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded bg-accent-500"></div>
              <span className="font-display">Global Nexus Institute</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 dark:text-white/60">Foresight for a connected world.</p>
          </div>
          <nav className="text-sm uppercase tracking-wide text-gray-700 dark:text-white/70">
            <a href="#mission" className="mr-4 hover:text-accent-400">Mission</a>
            <a href="#model" className="mr-4 hover:text-accent-400">Model</a>
            <a href="#initiatives" className="mr-4 hover:text-accent-400">Initiatives</a>
            <a href="#leadership" className="mr-4 hover:text-accent-400">Leadership</a>
            <a href="#contact" className="hover:text-accent-400">Contact</a>
          </nav>
        </div>
        <p className="mt-6 text-xs text-gray-500 dark:text-white/40">© <span>{year}</span> Global Nexus Institute. All rights reserved.</p>
      </div>
    </footer>
  );
};