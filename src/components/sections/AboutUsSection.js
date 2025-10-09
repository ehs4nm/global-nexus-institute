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
    <section id="about" className="relative min-h-screen py-16 sm:py-20 md:py-24 bg-white dark:bg-black text-gray-900 dark:text-white border-t-2 border-black dark:border-white">
      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-6">
            <div className="h-1 w-16 bg-black dark:bg-white mb-4" />
            <span className="font-mono text-xs uppercase tracking-widest">Who We Are</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-8">
            About Us
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <p className="text-xl sm:text-2xl font-bold leading-tight mb-6">
                Energy shocks fuel conflict. Conflict spreads disease. Health crises destabilize economies.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Yet global policy and research remain siloed. The Global Nexus Institute (GNI) exists to break those silos — integrating energy, geopolitics, and health into a single field of foresight and action.
              </p>
            </div>
            <div className="relative">
              <div className="border-2 border-black dark:border-white p-6 sm:p-8 bg-black dark:bg-white text-white dark:text-black">
                <p className="text-base sm:text-lg font-bold leading-relaxed">
                  We transform complexity into clarity, connecting global challenges into actionable intelligence for leaders who shape our future.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="mb-16">
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Our Principles</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="group relative border-2 border-black dark:border-white overflow-hidden bg-white dark:bg-black transition-all duration-300 hover:border-black dark:hover:border-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
              >
                {/* Number Badge Overlay */}
                <div className="absolute top-0 right-0 bg-black dark:bg-white text-white dark:text-black font-mono text-xs sm:text-sm font-bold px-3 py-1 border-l-2 border-b-2 border-black dark:border-white">
                  {principle.number}
                </div>
                
                <div className="p-6 sm:p-8">
                  <h4 className="font-display text-xl sm:text-2xl font-bold leading-tight mb-4 pr-12">
                    {principle.title}
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed mb-6">
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
        <div className="relative pt-8 border-t-2 border-black dark:border-white">
          <div className="text-center">
            <span className="inline-block bg-white dark:bg-black px-6 font-mono text-xs uppercase tracking-widest -mt-3">
              A connected world demands connected intelligence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
