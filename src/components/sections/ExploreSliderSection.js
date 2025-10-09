import React from 'react';

export const ExploreSliderSection = () => {
  return (
    <section 
      id="explore" 
      className="relative min-h-[60vh] py-20 sm:py-24 md:py-32 flex items-center bg-white dark:bg-black"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-black dark:text-white">
                Crises do not<br />stand alone.
              </h2>
              
              <div className="w-16 h-1 bg-black dark:bg-white"></div>
            </div>

            <div className="space-y-6 text-lg sm:text-xl leading-relaxed">
              <p className="text-gray-900 dark:text-gray-100">
                Energy shocks fuel conflict. Conflict spreads disease. Health crises destabilize economies. Yet global policy and research remain siloed.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400">
                The Global Nexus Institute (GNI) exists to break those silos — integrating energy, geopolitics, and health into a single field of foresight and action.
              </p>
            </div>
          </div>

          {/* Right Column - Interactive Grid */}
          <div className="relative">
            <div className="space-y-4">
              {/* Connection Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Energy → Conflict', title: 'Chain Reaction', accent: false },
                  { label: 'Conflict → Health', title: 'Spillover', accent: false },
                  { label: 'Health → Economy', title: 'Systemic Risk', accent: false },
                  { label: 'GNI Approach', title: 'Nexus', accent: true }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`
                      group relative p-6 sm:p-8
                      border-2 transition-all duration-300
                      ${item.accent 
                        ? 'border-black dark:border-white bg-black dark:bg-white' 
                        : 'border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white bg-white dark:bg-black'
                      }
                    `}
                  >
                    <div className="space-y-3">
                      <p className={`
                        text-xs font-mono uppercase tracking-widest
                        ${item.accent 
                          ? 'text-white dark:text-black' 
                          : 'text-gray-500 dark:text-gray-400'
                        }
                      `}>
                        {item.label}
                      </p>
                      
                      <p className={`
                        text-2xl sm:text-3xl font-display font-bold
                        ${item.accent 
                          ? 'text-white dark:text-black' 
                          : 'text-black dark:text-white'
                        }
                      `}>
                        {item.title}
                      </p>
                    </div>

                    {/* Hover effect line */}
                    {!item.accent && (
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom tagline */}
              <div className="pt-4">
                <p className="text-sm font-mono text-gray-500 dark:text-gray-400 tracking-wide">
                  → A connected world demands connected intelligence.
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 border-2 border-black/10 dark:border-white/10 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};