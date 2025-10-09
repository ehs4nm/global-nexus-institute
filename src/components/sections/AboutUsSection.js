import React from 'react';

const principles = [
  {
    number: '01',
    title: 'Integrated Analysis',
    description: 'Connecting energy, geopolitics, and health into unified foresight.'
  },
  {
    number: '02',
    title: 'Systems Thinking',
    description: 'Understanding cascading effects across interconnected domains.'
  },
  {
    number: '03',
    title: 'Actionable Intelligence',
    description: 'Translating complex data into strategic guidance for decision-makers.'
  },
  {
    number: '04',
    title: 'Global Impact',
    description: 'Building resilient systems for an interconnected world.'
  }
];

export const AboutUsSection = () => {
  return (
    <section id="about" className="brutalist-section text-gray-900 dark:text-white">
      {/* Subtle dot pattern background */}
      <div className="brutalist-bg-dots absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
      
      <div className="brutalist-container relative">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-6">
            <div className="brutalist-divider-bold mb-4" />
            <span className="brutalist-label">Who We Are</span>
          </div>
          
          <h2 className="brutalist-heading mb-8">
            About Us
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <p className="brutalist-card-title mb-6">
                Energy shocks fuel conflict. Conflict spreads disease. Health crises destabilize economies.
              </p>
              <p className="brutalist-body">
                Yet global policy and research remain siloed. The Global Nexus Institute (GNI) exists to break those silos — integrating energy, geopolitics, and health into a single field of foresight and action.
              </p>
            </div>
            <div className="relative">
              <div className="brutalist-card-inverted p-6 sm:p-8">
                <p className="brutalist-body font-bold">
                  We transform complexity into clarity, connecting global challenges into actionable intelligence for leaders who shape our future.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="mb-16">
          <h3 className="brutalist-card-title mb-8 sm:mb-12">Our Principles</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="brutalist-card group overflow-hidden"
              >
                {/* Number Badge Overlay */}
                <div className="absolute top-0 right-0 bg-black dark:bg-white text-white dark:text-black brutalist-label font-bold px-3 py-1 brutalist-border-box border-t-0 border-r-0">
                  {principle.number}
                </div>
                
                <div className="p-6 sm:p-8">
                  <h4 className="brutalist-card-title text-xl sm:text-2xl mb-4 pr-12">
                    {principle.title}
                  </h4>
                  <p className="brutalist-body mb-6">
                    {principle.description}
                  </p>
                  
                  {/* Expanding bottom line on hover */}
                  <div className="h-1 w-8 bg-black dark:bg-white transition-all duration-300 group-hover:w-16" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Divider with Text */}
        <div className="relative pt-8 brutalist-border-box border-t-2 border-b-0 border-x-0">
          <div className="text-center">
            <span className="inline-block bg-white dark:bg-black px-6 brutalist-label -mt-3">
              A connected world demands connected intelligence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
