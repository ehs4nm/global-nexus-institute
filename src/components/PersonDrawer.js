import React from 'react';
import { useMenu } from '../hooks/useMenu';

export const PersonDrawer = () => {
  const { person, isDrawerOpen, setDrawerOpen } = useMenu();

  if (!isDrawerOpen) return null;

  return (
    <>
      {/* Backdrop: dark in light mode, light in dark mode */}
      <div
        className="fixed inset-0 z-40 bg-black/50 dark:bg-white/50 backdrop-blur-sm"
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        id="personDrawer"
        className="fixed right-0 top-0 z-50 h-screen w-full md:w-2/3 bg-black/95 border-l border-white/10 transition-transform duration-300 ease-out translate-x-0"
        role="dialog"
        aria-modal="true"
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <h3 id="personName" className="font-display text-xl text-white">{person?.name || ''}</h3>
            <button
              onClick={() => setDrawerOpen(false)}
              className="w-10 h-10 inline-flex items-center justify-center rounded border border-white/15 hover:border-accent-500 focus:ring-2 focus:ring-accent-500"
            >
              <span className="sr-only">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-6 space-y-4 overflow-y-auto">
            <p id="personTitle" className="text-accent-400">{person?.title || ''}</p>
            <p id="personBio" className="text-white/80 leading-relaxed">{person?.bio || ''}</p>
          </div>
        </div>
      </aside>
    </>
  );
};
