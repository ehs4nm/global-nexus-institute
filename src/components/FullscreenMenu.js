import React, { useMemo, useState } from 'react';
import { useMenu } from '../hooks/useMenu';

export const FullscreenMenu = () => {
  const { isMenuOpen, setMenuOpen, menuBg, setMenuBg, menuItems, navigation } = useMenu();
  const [expandedMega, setExpandedMega] = useState(null);
  
  const whoWeAre = navigation?.whoWeAre || [];
  const whatWeDo = navigation?.whatWeDo || [];

  if (!isMenuOpen) return null;

  return (
    <>
      <div id="menuPanel" className="fixed inset-0 z-50 bg-white dark:bg-black border-2 border-black dark:border-white overflow-y-auto">
        {/* Fullscreen background image that preserves aspect ratio (object-contain) on all screens */}
        <div className="fixed inset-0 pointer-events-none">
          {menuBg ? (
            <img
              src={menuBg}
              alt=""
              className="w-full h-full object-contain object-center opacity-20 transition-opacity duration-300 pointer-events-none select-none"
            />)
          : null}
        </div>
        
        <div className="relative min-h-full w-full flex flex-col items-center justify-start py-20 px-6 sm:px-8">
          {/* Close button - fixed position */}
          <button
            onClick={() => setMenuOpen(false)}
            className="fixed top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 inline-flex items-center justify-center border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 touch-manipulation z-10 bg-white dark:bg-black"
          >
            <span className="sr-only">Close menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Menu content */}
          <nav className="w-full max-w-6xl">
            {/* Top decorative line */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-1 w-16 bg-black dark:bg-white" />
              <span className="font-mono text-xs uppercase tracking-widest text-black dark:text-white">Menu</span>
              <div className="h-1 w-16 bg-black dark:bg-white" />
            </div>
            
            {/* Main Menu Items */}
            <ul className="space-y-2 mb-8">
              {(menuItems || []).map((item, index) => {
                const commonProps = {
                  onMouseEnter: () => setMenuBg(item.image || ''),
                  onFocus: () => setMenuBg(item.image || ''),
                  className: 'group relative block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black tracking-tight text-black dark:text-white border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 touch-manipulation py-3 px-6 text-center'
                };
                if (item.type === 'hash') {
                  return (
                    <li key={item.id || item.label}>
                      <a href={item.href} {...commonProps} onClick={() => setMenuOpen(false)}>
                        <span className="font-mono text-xs uppercase tracking-widest mr-3 opacity-60">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {item.label}
                      </a>
                    </li>
                  );
                }
                const isExternal = item.type === 'external' || /^https?:\/\//.test(item.href || '');
                return (
                  <li key={item.id || item.label}>
                    <a
                      href={item.href}
                      {...commonProps}
                      onClick={() => setMenuOpen(false)}
                      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <span className="font-mono text-xs uppercase tracking-widest mr-3 opacity-60">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            
            {/* Megamenu Sections */}
            <div className="border-t-2 border-black dark:border-white pt-8 space-y-6">
              {/* Who We Are Megamenu */}
              <div className="w-full">
                <button
                  onClick={() => setExpandedMega(expandedMega === 'who' ? null : 'who')}
                  className="w-full text-left border-2 border-black dark:border-white p-4 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 touch-manipulation flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-widest opacity-60">06</span>
                    <span className="text-xl sm:text-2xl md:text-3xl font-display font-black tracking-tight">Who We Are</span>
                  </div>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${expandedMega === 'who' ? 'rotate-180' : ''}`} 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </button>
                {expandedMega === 'who' && (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 px-2">
                    {whoWeAre.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="group block border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white transition-all duration-300 overflow-hidden"
                      >
                        <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                          <img 
                            src={item.image} 
                            alt="" 
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300" 
                          />
                        </div>
                        <div className="p-4 bg-white dark:bg-black group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                          <h4 className="text-base sm:text-lg font-mono font-bold uppercase tracking-wider flex items-center justify-between">
                            {item.title}
                            <svg viewBox="0 0 24 24" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" fill="currentColor">
                              <path d="M12 4l-1.41 1.41L14.17 9H4v2h10.17l-3.58 3.59L12 16l6-6-6-6z"/>
                            </svg>
                          </h4>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              {/* What We Do Megamenu */}
              <div className="w-full">
                <button
                  onClick={() => setExpandedMega(expandedMega === 'what' ? null : 'what')}
                  className="w-full text-left border-2 border-black dark:border-white p-4 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 touch-manipulation flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-widest opacity-60">07</span>
                    <span className="text-xl sm:text-2xl md:text-3xl font-display font-black tracking-tight">What We Do</span>
                  </div>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${expandedMega === 'what' ? 'rotate-180' : ''}`} 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </button>
                {expandedMega === 'what' && (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 px-2">
                    {whatWeDo.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="group block border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white transition-all duration-300 overflow-hidden"
                      >
                        <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                          <img 
                            src={item.image} 
                            alt="" 
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300" 
                          />
                        </div>
                        <div className="p-4 bg-white dark:bg-black group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                          <h4 className="text-base sm:text-lg font-mono font-bold uppercase tracking-wider flex items-center justify-between">
                            {item.title}
                            <svg viewBox="0 0 24 24" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" fill="currentColor">
                              <path d="M12 4l-1.41 1.41L14.17 9H4v2h10.17l-3.58 3.59L12 16l6-6-6-6z"/>
                            </svg>
                          </h4>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
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