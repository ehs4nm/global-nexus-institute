import React from 'react';
import { useMenu } from '../hooks/useMenu';
import { motion, AnimatePresence } from 'framer-motion';

export const PersonDrawer = () => {
  const { person, isDrawerOpen, setDrawerOpen } = useMenu();
  const bioFallback = person
    ? `${person.name}${person.title ? `, ${person.title}` : ''}.`
    : '';

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Fullscreen container */}
          <motion.div
            className="fixed inset-0 z-50 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Left: backdrop (1/3) */}
            <div
              onClick={() => setDrawerOpen(false)}
              className="w-1/4 sm:w-1/3 bg-black/70 cursor-pointer transition hover:bg-black/80"
            />

            {/* Right: solid content (3/4 or 2/3) */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-3/4 sm:w-2/3 bg-white dark:bg-black text-black dark:text-white flex flex-col border-l-2 border-black dark:border-white"
            >
              {/* Close button */}
              <button
                onClick={() => setDrawerOpen(false)}
                className="absolute top-4 right-4 w-12 h-12 inline-flex items-center justify-center border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 z-10"
              >
                <span className="sr-only">Close</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex flex-col md:flex-row h-full">
                {/* Left Column (inside drawer): Image + title */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 sm:p-12 border-b-2 md:border-b-0 md:border-r-2 border-black dark:border-white">
                  {person?.img && (
                    <div className="border-2 border-black dark:border-white overflow-hidden aspect-square w-64 sm:w-72 max-w-full">
                      <img
                        src={person.img}
                        alt={person?.name || 'Person'}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <div className="mt-8 text-center">
                    {/* Decorative line */}
                    <div className="h-1 w-16 bg-black dark:bg-white mx-auto mb-4" />
                    
                    <h3 className="font-display text-3xl sm:text-4xl font-black tracking-tight">
                      {person?.name || ''}
                    </h3>
                    {person?.title && (
                      <p className="font-mono text-xs uppercase tracking-widest mt-3">
                        {person.title}
                      </p>
                    )}
                  </div>
                </div>

                {/* Right Column: Description */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-8 sm:p-12">
                  <div className="max-w-xl">
                    {/* Top label */}
                    <div className="inline-block mb-6">
                      <div className="h-1 w-12 bg-black dark:bg-white mb-3" />
                      <span className="font-mono text-xs uppercase tracking-widest">Biography</span>
                    </div>
                    
                    <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line">
                      {person?.bio || bioFallback}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
