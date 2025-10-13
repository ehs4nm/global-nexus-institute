import React from 'react';

export const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-16 sm:py-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          
          {/* Brand Section */}
          <div className="max-w-md">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 border-2 border-white dark:border-black overflow-hidden flex-shrink-0">
                <img 
                  src="/assets/favicon_io/android-chrome-512x512.png" 
                  alt="Global Nexus Institute" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <span className="font-display text-2xl sm:text-3xl font-bold leading-tight">
                Global Nexus Institute
              </span>
            </div>
            
            <div className="w-16 h-1 bg-white dark:bg-black"></div>
            
            <p className="text-3xl font-medium">
              Foresight for a connected world.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 lg:text-right">
            <div className="space-y-3">
              {[
                { href: '#mission', label: 'Mission' },
                { href: '#model', label: 'Model' },
                { href: '#initiatives', label: 'Initiatives' },
                { href: '#leadership', label: 'Leadership' },
                { href: '#contact', label: 'Contact' }
              ].map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group block text-lg sm:text-xl font-display font-bold hover:translate-x-2 lg:hover:translate-x-0 lg:hover:-translate-x-2 transition-transform duration-300"
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="w-0 h-0.5 bg-white dark:bg-black transition-all duration-300 group-hover:w-8"></span>
                    <span>{link.label}</span>
                  </span>
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm font-mono text-gray-400 dark:text-gray-600 tracking-wider">
              © {year} GLOBAL NEXUS INSTITUTE
            </p>
            
            <p className="text-xs sm:text-sm font-mono text-gray-500 dark:text-gray-500">
              ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};