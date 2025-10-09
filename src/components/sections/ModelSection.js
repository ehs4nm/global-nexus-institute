import React from 'react';

export const ModelSection = () => {
  return (
    <section
      id="model"
      className="min-h-screen py-20 sm:py-24 md:py-32 bg-black text-white flex items-center"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="space-y-6">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              From research to<br />real-world impact.
            </h2>
            
            <div className="w-16 h-1 bg-white"></div>
          </div>

          <p className="mt-8 text-xl sm:text-2xl text-gray-300 leading-relaxed">
            GNI operates through four interconnected pillars that turn insight into action.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Research Clusters',
              description: 'Understanding the',
              highlight: 'what',
              number: '01'
            },
            {
              title: 'Geospatial & Data Intelligence',
              description: 'Mapping the',
              highlight: 'where & when',
              number: '02'
            },
            {
              title: 'Actionable Intelligence',
              description: 'Translating insight into decisions.',
              highlight: null,
              number: '03'
            },
            {
              title: 'Alliances & Communications',
              description: 'Amplifying global influence.',
              highlight: null,
              number: '04'
            }
          ].map((pillar, idx) => (
            <article
              key={idx}
              className="group relative p-8 border-2 border-white/20 hover:border-white transition-all duration-300 bg-black"
            >
              {/* Number indicator */}
              <div className="absolute top-4 right-4 text-xs font-mono text-white/30 group-hover:text-white/50 transition-colors">
                {pillar.number}
              </div>

              <div className="space-y-6">
                <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
                  {pillar.title}
                </h3>

                <p className="text-base sm:text-lg text-gray-400">
                  {pillar.description}
                  {pillar.highlight && (
                    <span className="block mt-1 text-white font-medium">
                      {pillar.highlight}
                    </span>
                  )}
                </p>

                {/* Bottom accent line */}
                <div className="pt-4">
                  <div className="w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10"></div>
          <p className="text-sm font-mono text-gray-500 tracking-wide">
            Four pillars. One integrated approach.
          </p>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>
      </div>
    </section>
  );
};