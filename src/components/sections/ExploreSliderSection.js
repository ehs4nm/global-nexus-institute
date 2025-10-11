import React from 'react';

export const ExploreSliderSection = () => {
  return (
    <section 
      id="explore" 
      className="relative min-h-[60vh] py-20 sm:py-24 md:py-32 flex items-center bg-black dark:bg-white"
    >
      {/* Subtle background pattern */}
      <div className="brutalist-bg-dots absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" />


      <div className="brutalist-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <div className="col-span-full inline-flex items-center justify-center brutalist-border-box p-1 mb-6 bg-white dark:bg-black">
          <img src="/assets/images/golden-map.jpg" alt="Global Chokepoints Initiative" className="w-full max-h-[50vh] object-cover" />
        </div>
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="brutalist-heading text-white dark:text-black">
                Crises do not<br />stand alone.
              </h2>
              
              <div className="brutalist-divider-bold"></div>
            </div>

            <div className="space-y-6">
              <p className="brutalist-card-title text-gray-100 dark:text-gray-900">
                Energy shocks fuel conflict. Conflict spreads disease. Health crises destabilize economies. Yet global policy and research remain siloed.
              </p>
              
              <p className="brutalist-body text-lg sm:text-xl text-gray-300 dark:text-gray-900">
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
                      ${item.accent 
                        ? 'brutalist-card text-black dark:text-white border-white dark:border-black'
                        : 'brutalist-card-inverted text-white dark:text-black border-white dark:border-black' 
                      }
                    `}
                  >
                    <div className="space-y-3">
                      <p className="brutalist-label">
                        {item.label}
                      </p>
                      
                      <p className="brutalist-card-title text-2xl sm:text-3xl">
                        {item.title}
                      </p>
                    </div>

                    {/* Hover effect line */}
                    {!item.accent && (
                      <div className="brutalist-hover-line absolute bottom-0 left-0"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom tagline */}
              <div className="pt-4">
                <p className="brutalist-label brutalist-arrow">
                  A connected world demands connected intelligence.
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 brutalist-border-box opacity-10 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};