import React from 'react';

// The purpose of this component is to visually represent the core intersection 
// (Nexus) of the organization's focus areas, acting as a bold, structural anchor 
// for the entire framework discussed.

const content = {
  nexus: {
    title: "INTEGRATED NEXUS ANALYSIS",
    fields: [
      { name: "ENERGY SYSTEMS", highlight: "SUSTAINABILITY", color: "text-red-600 dark:text-red-400" },
      { name: "GEOPOLITICS", highlight: "SECURITY", color: "text-blue-600 dark:text-blue-400" },
      { name: "PUBLIC HEALTH", highlight: "WELL-BEING", color: "text-green-600 dark:text-green-400" }
    ],
    tagline: "ACTIONABLE INTELLIGENCE AT THE CAUSAL INTERSECTION.",
    description: "Our intelligence is not confined to silos. We operate where energy, geopolitical stability, and human health converge, identifying systemic risks and opportunities missed by traditional, linear analysis.",
  }
};

/**
 * Renders a bold, brutalist visualization of the organization's core focus area 
 * (the Nexus) using a stark, layered, and typographic design.
 */
export const NexusSection = () => {
  const { nexus } = content;

  return (
    <section 
      id="nexus-overview" 
      className="py-16 sm:py-24 bg-white dark:bg-black text-black dark:text-white"
    >
      <div className="brutalist-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- 1. MASSIVE TITLE BLOCK --- */}
        <div className="mb-12 sm:mb-20 border-b-8 border-black dark:border-white pb-6">
          <h1 className="text-5xl sm:text-7xl lg:text-[100px] font-black uppercase tracking-tighter leading-none">
            {nexus.title}
          </h1>
        </div>
          
        {/* --- 2. LAYERED FIELDS (UPDATED TO GRID/B&W) --- */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 sm:mb-24">
          {nexus.fields.map((field, index) => (
            <div 
              key={index} 
              // New style: Simple grid, no color, extremely thick border
              className={`p-6 sm:p-10 border-8 border-black dark:border-white bg-white dark:bg-black 
                transition duration-300 transform hover:scale-[1.03] cursor-pointer group`}
            >
              <div className="space-y-4">
                {/* Field Highlight/Value - Dominant text element with inverse hover effect */}
                <p className={`text-3xl sm:text-4xl lg:text-5xl font-black leading-none uppercase tracking-tight 
                    dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition duration-300 p-1 -m-1 inline-block`}>
                  {field.highlight}
                </p>
                
                {/* Structural Divider */}
                <div className="w-1/3 h-1 bg-black dark:bg-white my-4"></div>
                
                {/* Field Name - Subordinate, Monospace for structure */}
                <p className="font-mono text-base sm:text-xl font-bold uppercase tracking-widest leading-none">
                  {field.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- 3. INVERTED COMMAND BLOCK --- */}
        <div className="w-full">
            <div className="p-8 sm:p-12 border-8 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black">
                <div className="space-y-6">
                    {/* Tagline - Arrow indicator for action/direction */}
                    <p className="font-mono text-2xl sm:text-3xl font-black uppercase flex items-center gap-4">
                        <span className="text-4xl leading-none">→</span>
                        {nexus.tagline}
                    </p>
                    <div className="w-full h-1 bg-white dark:bg-black"></div>
                    {/* Description - The mission statement in bold type */}
                    <p className="text-base sm:text-xl font-bold italic pt-2">
                        {nexus.description}
                    </p>
                </div>
            </div>
        </div>
        
        {/* Subtle Bottom Accent */}
        <div className="mt-16 text-center font-mono text-sm uppercase tracking-widest text-gray-500 border-t-2 border-dashed border-gray-300 dark:border-gray-700 pt-4">
            SYSTEMIC VALIDATION PROTOCOL INITIATED | NON-LINEAR THINKING REQUIRED
        </div>

      </div>
    </section>
  );
};
