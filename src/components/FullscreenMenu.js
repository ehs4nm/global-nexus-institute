import React, { useMemo } from 'react';
import { useMenu } from '../hooks/useMenu';

export const FullscreenMenu = () => {
  const { isMenuOpen, setMenuOpen, menuBg, setMenuBg, menuItems } = useMenu();

  if (!isMenuOpen) return null;

  return (
    <>
      <div id="menuPanel" className="fixed inset-0 z-50 bg-black">
        {/* Fullscreen background image that preserves aspect ratio (object-contain) on all screens */}
        <div className="absolute inset-0">
          {menuBg ? (
            <img
              src={menuBg}
              alt=""
              className="w-full h-full object-contain object-center opacity-70 transition-opacity duration-300 pointer-events-none select-none"
            />)
          : null}
        </div>
        <div className="relative h-full w-full flex flex-col items-center justify-center px-8">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 inline-flex items-center justify-center rounded border border-white/15 text-white hover:border-accent-500 focus:ring-2 focus:ring-accent-500"
          >
            <span className="sr-only">Close menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="w-full max-w-3xl text-center text-white">
            <ul className="space-y-6">
              {(menuItems || []).map((item) => {
                const commonProps = {
                  onMouseEnter: () => setMenuBg(item.image || ''),
                  onFocus: () => setMenuBg(item.image || ''),
                  className: 'block text-4xl sm:text-5xl font-display hover:text-accent-400'
                };
                if (item.type === 'hash') {
                  return (
                    <li key={item.id || item.label}>
                      <a href={item.href} {...commonProps} onClick={() => setMenuOpen(false)}>
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
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};