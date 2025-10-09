import React, { useMemo } from 'react';
import { useMenu } from '../hooks/useMenu';

export const FullscreenMenu = () => {
  const { isMenuOpen, setMenuOpen, menuBg, setMenuBg, menuItems } = useMenu();

  if (!isMenuOpen) return null;

  return (
    <>
      <div id="menuPanel" className="fixed inset-0 z-50 bg-white dark:bg-black border-2 border-black dark:border-white">
        {/* Fullscreen background image that preserves aspect ratio (object-contain) on all screens */}
        <div className="absolute inset-0">
          {menuBg ? (
            <img
              src={menuBg}
              alt=""
              className="w-full h-full object-contain object-center opacity-20 transition-opacity duration-300 pointer-events-none select-none"
            />)
          : null}
        </div>
        
        <div className="relative h-full w-full flex flex-col items-center justify-center px-6 sm:px-8">
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 inline-flex items-center justify-center border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 touch-manipulation"
          >
            <span className="sr-only">Close menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Menu content */}
          <nav className="w-full max-w-4xl text-center">
            {/* Top decorative line */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-1 w-16 bg-black dark:bg-white" />
              <span className="font-mono text-xs uppercase tracking-widest text-black dark:text-white">Menu</span>
              <div className="h-1 w-16 bg-black dark:bg-white" />
            </div>
            
            <ul className="space-y-2">
              {(menuItems || []).map((item, index) => {
                const commonProps = {
                  onMouseEnter: () => setMenuBg(item.image || ''),
                  onFocus: () => setMenuBg(item.image || ''),
                  className: 'group relative block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-black dark:text-white border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 touch-manipulation py-4 px-6'
                };
                if (item.type === 'hash') {
                  return (
                    <li key={item.id || item.label}>
                      <a href={item.href} {...commonProps} onClick={() => setMenuOpen(false)}>
                        <span className="font-mono text-xs uppercase tracking-widest mr-4 opacity-60">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {item.label}
                      </a>
                    </li>
                  );
                }
                // route or external; use normal anchor for now
                const isExternal = item.type === 'external' || /^https?:\/\//.test(item.href || '');
                return (
                  <li key={item.id || item.label}>
                    <a
                      href={item.href}
                      {...commonProps}
                      onClick={() => setMenuOpen(false)}
                      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <span className="font-mono text-xs uppercase tracking-widest mr-4 opacity-60">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            
            {/* Bottom decorative line */}
            <div className="mt-12 pt-8 border-t-2 border-black dark:border-white">
              <span className="font-mono text-xs uppercase tracking-widest text-black dark:text-white">
                Global Nexus Institute
              </span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};