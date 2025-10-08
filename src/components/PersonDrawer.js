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
            {/* Left: blurred backdrop (1/3) */}
            <div
              onClick={() => setDrawerOpen(false)}
              className="w-1/3 bg-black/50 backdrop-blur-sm cursor-pointer transition hover:bg-black/60"
            />

            {/* Right: solid black content (2/3) */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="w-2/3 bg-black text-white flex flex-col md:flex-row border-l border-white/10"
            >
              {/* Left Column (inside drawer): Image + title centered */}
              <div className="w-1/2 flex flex-col items-center justify-center p-8 border-r border-white/10">
                {person?.img && (
                  <div className="rounded-2xl overflow-hidden border border-white/10 aspect-square w-72 max-w-full shadow-2xl">
                    <img
                      src={person.img}
                      alt={person?.name || 'Person'}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="mt-6 text-center">
                  <h3 className="text-3xl font-semibold tracking-tight">
                    {person?.name || ''}
                  </h3>
                  {person?.title && (
                    <p className="text-accent-400 text-lg mt-2">
                      {person.title}
                    </p>
                  )}
                </div>
              </div>

              {/* Right Column: Description */}
              <div className="w-1/2 flex items-center justify-center p-10">
                <p className="text-neutral-300 text-lg leading-relaxed whitespace-pre-line max-w-xl">
                  {person?.bio || bioFallback}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
