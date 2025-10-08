import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { useMenu } from '../hooks/useMenu';
import { TopBar } from './TopBar';
import { MegaMenu } from './menus/MegaMenu';

const WHAT_WE_DO = [
  { href: '/what-we-do/analysis', title: 'Analysis', image: '/assets/images/1.jpg' },
  { href: '/what-we-do/advisory', title: 'Advisory', image: '/assets/images/2.jpg' },
  { href: '/what-we-do/research', title: 'Research', image: '/assets/images/3.jpg' },
];

const WHO_WE_ARE = [
  { href: '/who-we-are/team', title: 'Team', image: '/assets/images/6.jpg' },
  { href: '/who-we-are/partners', title: 'Partners', image: '/assets/images/4.jpg' },
  { href: '/who-we-are/careers', title: 'Careers', image: '/assets/images/5.jpg' },
];

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { setMenuOpen } = useMenu();

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* Top black bar */}
      <TopBar />

      {/* Main header bar */}
      <div className="bg-white dark:bg-black backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/50 border-b border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-24">
            <a href="#top" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-accent-500">
              <div className="h-8 w-8 rounded image-cover">
                  <img src="/assets/favicon_io/android-chrome-512x512.png" alt="Global Nexus Institute" className="rounded" />
              </div>
              <span className="font-display text-lg tracking-wide">Global Nexus Institute</span>
            </a>
            <div className="flex items-center gap-3">
              <nav className="hidden md:flex items-center text-sm uppercase tracking-wide">
                <a href="#mission" className="px-3 py-2 hover:text-accent-400" onClick={() => setMenuOpen(false)}>Mission</a>
                <a href="#model" className="px-3 py-2 hover:text-accent-400" onClick={() => setMenuOpen(false)}>Model</a>
                <a href="#initiatives" className="px-3 py-2 hover:text-accent-400" onClick={() => setMenuOpen(false)}>Initiatives</a>
                <a href="#leadership" className="px-3 py-2 hover:text-accent-400" onClick={() => setMenuOpen(false)}>Leadership</a>
                <a href="#contact" className="px-3 py-2 hover:text-accent-400" onClick={() => setMenuOpen(false)}>Contact</a>
                <MegaMenu label="Who We Are" items={WHO_WE_ARE} />
                <MegaMenu label="What We Do" items={WHAT_WE_DO} />
              </nav>
              <div className="flex items-center gap-2">
                <button
                  aria-pressed={isDark}
                  title="Toggle theme"
                  onClick={toggleTheme}
                  className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-accent-500"
                >
                  {/* Sun icon shown in light mode */}
                  <svg
                    className={`w-5 h-5 ${isDark ? "hidden" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                  >
                    <path d="M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z M 10.65625 9.84375 C 10.28125 9.910156 9.980469 10.183594 9.875 10.546875 C 9.769531 10.914063 9.878906 11.304688 10.15625 11.5625 L 14.40625 15.8125 C 14.648438 16.109375 15.035156 16.246094 15.410156 16.160156 C 15.78125 16.074219 16.074219 15.78125 16.160156 15.410156 C 16.246094 15.035156 16.109375 14.648438 15.8125 14.40625 L 11.5625 10.15625 C 11.355469 9.933594 11.054688 9.820313 10.75 9.84375 C 10.71875 9.84375 10.6875 9.84375 10.65625 9.84375 Z M 39.03125 9.84375 C 38.804688 9.875 38.59375 9.988281 38.4375 10.15625 L 34.1875 14.40625 C 33.890625 14.648438 33.753906 15.035156 33.839844 15.410156 C 33.925781 15.78125 34.21875 16.074219 34.589844 16.160156 C 34.964844 16.246094 35.351563 16.109375 35.59375 15.8125 L 39.84375 11.5625 C 40.15625 11.265625 40.246094 10.800781 40.0625 10.410156 C 39.875 10.015625 39.460938 9.789063 39.03125 9.84375 Z M 24.90625 15 C 24.875 15.007813 24.84375 15.019531 24.8125 15.03125 C 24.75 15.035156 24.6875 15.046875 24.625 15.0625 C 24.613281 15.074219 24.605469 15.082031 24.59375 15.09375 C 19.289063 15.320313 15 19.640625 15 25 C 15 30.503906 19.496094 35 25 35 C 30.503906 35 35 30.503906 35 25 C 35 19.660156 30.746094 15.355469 25.46875 15.09375 C 25.433594 15.09375 25.410156 15.0625 25.375 15.0625 C 25.273438 15.023438 25.167969 15.003906 25.0625 15 C 25.042969 15 25.019531 15 25 15 C 24.96875 15 24.9375 15 24.90625 15 Z M 24.9375 17 C 24.957031 17 24.980469 17 25 17 C 25.03125 17 25.0625 17 25.09375 17 C 29.46875 17.050781 33 20.613281 33 25 C 33 29.421875 29.421875 33 25 33 C 20.582031 33 17 29.421875 17 25 C 17 20.601563 20.546875 17.035156 24.9375 17 Z M 4.71875 24 C 4.167969 24.078125 3.78125 24.589844 3.859375 25.140625 C 3.9375 25.691406 4.449219 26.078125 5 26 L 11 26 C 11.359375 26.003906 11.695313 25.816406 11.878906 25.503906 C 12.058594 25.191406 12.058594 24.808594 11.878906 24.496094 C 11.695313 24.183594 11.359375 23.996094 11 24 L 5 24 C 4.96875 24 4.9375 24 4.90625 24 C 4.875 24 4.84375 24 4.8125 24 C 4.78125 24 4.75 24 4.71875 24 Z M 38.71875 24 C 38.167969 24.078125 37.78125 24.589844 37.859375 25.140625 C 37.9375 25.691406 38.449219 26.078125 39 26 L 45 26 C 45.359375 26.003906 45.695313 25.816406 45.878906 25.503906 C 46.058594 25.191406 46.058594 24.808594 45.878906 24.496094 C 45.695313 24.183594 45.359375 23.996094 45 24 L 39 24 C 38.96875 24 38.9375 24 38.90625 24 C 38.875 24 38.84375 24 38.8125 24 C 38.78125 24 38.75 24 38.71875 24 Z M 15 33.875 C 14.773438 33.90625 14.5625 34.019531 14.40625 34.1875 L 10.15625 38.4375 C 9.859375 38.679688 9.722656 39.066406 9.808594 39.441406 C 9.894531 39.8125 10.1875 40.105469 10.558594 40.191406 C 10.933594 40.277344 11.320313 40.140625 11.5625 39.84375 L 15.8125 35.59375 C 16.109375 35.308594 16.199219 34.867188 16.039063 34.488281 C 15.882813 34.109375 15.503906 33.867188 15.09375 33.875 C 15.0625 33.875 15.03125 33.875 15 33.875 Z M 34.6875 33.875 C 34.3125 33.941406 34.011719 34.214844 33.90625 34.578125 C 33.800781 34.945313 33.910156 35.335938 34.1875 35.59375 L 38.4375 39.84375 C 38.679688 40.140625 39.066406 40.277344 39.441406 40.191406 C 39.8125 40.105469 40.105469 39.8125 40.191406 39.441406 C 40.277344 39.066406 40.140625 38.679688 39.84375 38.4375 L 35.59375 34.1875 C 35.40625 33.988281 35.148438 33.878906 34.875 33.875 C 34.84375 33.875 34.8125 33.875 34.78125 33.875 C 34.75 33.875 34.71875 33.875 34.6875 33.875 Z M 24.90625 37.96875 C 24.863281 37.976563 24.820313 37.988281 24.78125 38 C 24.316406 38.105469 23.988281 38.523438 24 39 L 24 45 C 23.996094 45.359375 24.183594 45.695313 24.496094 45.878906 C 24.808594 46.058594 25.191406 46.058594 25.503906 45.878906 C 25.816406 45.695313 26.003906 45.359375 26 45 L 26 39 C 26.011719 38.710938 25.894531 38.433594 25.6875 38.238281 C 25.476563 38.039063 25.191406 37.941406 24.90625 37.96875 Z" />
                  </svg>
                  {/* Moon icon shown in dark mode */}
                  <svg
                    className={`w-5 h-5 ${isDark ? "" : "hidden"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                  </svg>
                </button>
                <button
                  aria-controls="menuPanel"
                  aria-expanded={false}
                  onClick={() => setMenuOpen(true)}
                  className="inline-flex items-center justify-center w-10 h-10 rounded border border-black/10 dark:border-white/15 hover:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                >
                  <span className="sr-only">Open menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm.75 4.5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
