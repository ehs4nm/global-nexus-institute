import React from 'react';

export const ModelSection = () => {
  return (
    <section
      id="model"
      className="brutalist-section-inverted flex items-center"
    >
      <div className="brutalist-container">
        
        {/* Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="space-y-6">
            <h2 className="brutalist-heading">
              From research to<br />real-world impact.
            </h2>
            
            <div className="brutalist-divider-bold"></div>
          </div>

          <p className="mt-8 brutalist-subheading">
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
              className="brutalist-card-minimal group p-8 text-white dark:text-black"
            >
              {/* Number indicator */}
              <div className="absolute top-4 right-4 brutalist-number-badge">
                {pillar.number}
              </div>

              <div className="space-y-6">
                <h3 className="brutalist-card-title">
                  {pillar.title}
                </h3>

                <p className="brutalist-body text-gray-400 dark:text-gray-600">
                  {pillar.description}
                  {pillar.highlight && (
                    <span className="block mt-1 font-medium">
                      {pillar.highlight}
                    </span>
                  )}
                </p>

                {/* Bottom accent line */}
                <div className="pt-4">
                  <div className="brutalist-accent-line"></div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex items-center gap-4">
          <div className="brutalist-divider flex-1"></div>
          <p className="brutalist-label">
            Four pillars. One integrated approach.
          </p>
          <div className="brutalist-divider flex-1"></div>
        </div>
      </div>
    </section>
  );
};