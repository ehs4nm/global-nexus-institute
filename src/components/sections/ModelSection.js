import React, { useState } from 'react';

// NOTE: The static 'content' structure is defined here to simulate data
// fetched from an external source, ensuring the component remains runnable.
const content = {
  "pillars": {
    "title": "Integrated Intelligence Framework",
    "subtitle": "Our methodology is built on a systemic, system-aware approach that transforms complexity into actionable insight.",
    "cards": [
      {
        "title": "Vision",
        "description": "A world where decisions about energy, health, and geopolitics are made as one interconnected system—ensuring sustainability, security, and human well-being reinforce each other.",
        "number": "01"
      },
      {
        "title": "Mission",
        "description": "To deliver pioneering, data-driven intelligence at the intersection of energy, geopolitics, and public health, empowering leaders to make decisions that are informed, timely, and systemically aware.",
        "number": "02"
      },
      {
        "title": "Core Values",
        "description": "Our foundation rests on Integrity, Non-Partisanship, Impact, Collaboration, and Adaptability. These principles guide every action and analysis.",
        "number": "03"
      },
      {
        "title": "Strategy & Objectives",
        "description": "Focusing on illuminating interconnections, developing predictive foresight, fostering collaboration, and empowering decision-makers with actionable intelligence.",
        "number": "04"
      }
    ],
    "details": {
      "vision": "A world where decisions about energy, health, and geopolitics are made as one interconnected system — where sustainability, security, and human well-being reinforce rather than undermine each other. We envision a global ecosystem of leaders and institutions capable of anticipating risks, shaping transitions, and ensuring that progress in one domain strengthens resilience in all.",
      "mission": "To deliver pioneering, data-driven intelligence at the intersection of energy, geopolitics, and public health — turning complex global dynamics into actionable insights. We bridge the gap between research and strategy, empowering leaders in government, industry, and civil society to make decisions that are informed, timely, and systemically aware. Our mission is to transform analysis into impact.",
      "objectives": [
        "Illuminate Interconnections: Reveal causal pathways linking energy systems, resource dependencies, conflict dynamics, and health outcomes. We expose hidden patterns to enable proactive action.",
        "Develop Predictive Foresight: Design and implement foresight systems that forecast nexus “hotspots” where shifts could trigger geopolitical or health consequences, guiding strategic planning.",
        "Foster Multi-Sector Collaboration: Convene a global coalition of governments, corporations, financial institutions, and NGOs to co-create actionable solutions and scale innovation across sectors.",
        "Empower Decision-Makers: Translate complex data into decision-ready intelligence, providing clear, timely, and operational insights through dashboards, reports, and executive briefings."
      ],
      "coreValues": [
        "Integrity in Analysis - Every insight is grounded in transparency, rigor, and evidence.",
        "Non-Partisanship - We are trusted by leaders across political and institutional divides.",
        "Impact over Ideology - Our focus is measurable outcomes, not theoretical debates.",
        "Collaboration and Inclusion - We thrive on partnerships that cross disciplines and sectors.",
        "Adaptability and Innovation - We evolve with the challenges we study, constantly refining our methods and models."
      ],
      "principles": [
        "Systemic Thinking: Every project integrates political, environmental, and health dimensions of energy transitions.",
        "Evidence-Based Advisory: All recommendations are data-backed, peer-reviewed, and outcome-oriented.",
        "Agile Delivery: We combine consultancy precision with startup agility — delivering value iteratively.",
        "Ethical Intelligence: We uphold strict standards on data ethics, confidentiality, and societal responsibility."
      ],
      "kpis": {
        "Strategic KPIs": [
          "Policy Impact Index - Number and quality of governmental or institutional policies influenced by our intelligence outputs.",
          "Cross-Sector Partnership Growth - Volume and diversity of partnerships established across public, private, and NGO domains.",
          "Forecast Accuracy Rate - Percentage of foresight predictions validated through subsequent real-world developments.",
          "Knowledge Dissemination Metrics - Reach and engagement across publications, events, and briefings.",
          "Client/Partner Retention Rate - Long-term engagement ratio reflecting trust and perceived value."
        ],
        "Operational KPIs": [
          "Project Delivery Efficiency - Timeliness and adherence to scope within defined resource parameters.",
          "Data Model Performance - Accuracy, explainability, and reproducibility of analytical models.",
          "Decision Uptake Rate - Proportion of insights that directly inform strategic or operational decisions by clients.",
          "Innovation Index - Frequency of new methodologies, tools, or frameworks introduced annually.",
          "Team Development Score - Skills growth and internal collaboration performance within the organization."
        ],
        "Critical Success KPIs": [
          "System Impact Score - Composite measure assessing real-world change resulting from implemented recommendations.",
          "Early-Warning Adoption Rate - Percentage of client institutions adopting predictive tools or foresight frameworks.",
          "Multi-Stakeholder Alignment - Level of cross-sector coordination achieved in complex project environments.",
          "Reputation Capital - External recognition, citations, or media references as a thought leader in energy-health-geopolitical intelligence."
        ]
      }
    }
  }
};


/**
 * Renders the integrated intelligence framework using a brutalist design with 
 * interactive list disclosure for Operating Principles and KPIs.
 */
export const ModelSection = () => {
    // Simulate data loading as if coming from a hook
    const isLoading = false;
    
    // Safety check
    if (isLoading || !content || !content.pillars) {
      return (
        <section id="pillars" className="brutalist-section text-black dark:text-white flex items-center min-h-screen">
          <div className="brutalist-container relative w-full py-8 flex items-center justify-center">
            <div className="brutalist-label">Loading framework data...</div>
          </div>
        </section>
      );
    }
    
    const pillars = content.pillars || {};
    const cards = pillars.cards || [];
    const details = pillars.details || {}; // New object for detailed content

    // Helper component for rendering lists with a click-to-reveal brutalist pattern
    const BrutalistList = ({ title, items, className = "" }) => {
        const [isExpanded, setIsExpanded] = useState(false);
        
        // Use the first part of the first item as a visible teaser
        const teaser = items.length > 0 ? items[0].split(':')[0] + "..." : "Click to view details."; 

        return (
            <div className={`p-6 border-4 border-current cursor-pointer hover:border-8 transition-all duration-300 ${className}`}
                 onClick={() => setIsExpanded(!isExpanded)}
            >
                {/* Clickable Header */}
                <div className="flex justify-between items-center mb-4 border-b-2 border-current pb-2">
                    <h3 className="text-xl sm:text-3xl font-black uppercase tracking-widest leading-none">{title}</h3>
                    {/* Brutalist + / - toggle icon */}
                    <span className="text-3xl sm:text-4xl font-black transition-transform duration-300 transform select-none">
                        {isExpanded ? '-' : '+'}
                    </span>
                </div>

                {/* Content Area - show teaser or full list */}
                {isExpanded ? (
                    // Full List (Visible when expanded)
                    <ul className="space-y-4 pt-2">
                        {items.map((item, index) => (
                            <li key={index} className="font-extrabold text-base border-l-4 border-current pl-3 hover:bg-gray-900 dark:hover:bg-gray-200 hover:text-xl transition duration-300">
                                {item}
                            </li>
                        ))}
                    </ul>
                ) : (
                    // Teaser when collapsed
                    <p className="text-lg font-bold text-gray-400 dark:text-gray-600">
                        {teaser}
                        <span className="block text-sm font-bold pt-2 italic underline">Click to expand all {items.length} directives.</span>
                    </p>
                )}
            </div>
        );
    };

    // Helper component for rendering Key Performance Indicator groups
    const KPIGroup = ({ title, items }) => {
        const [isExpanded, setIsExpanded] = useState(false);
        const teaser = `${items.length} critical metrics defined.`;

        return (
            <div className={`p-4 border-4 border-current cursor-pointer hover:border-8 transition-all duration-300 bg-gray-900 dark:bg-gray-100 text-white dark:text-black`}
                 onClick={() => setIsExpanded(!isExpanded)}
            >
                 {/* Clickable Header */}
                <div className="flex justify-between items-center mb-3 border-b-2 border-current pb-2">
                    <h4 className="text-xl font-black uppercase tracking-widest leading-none">{title}</h4>
                    {/* Brutalist + / - toggle icon */}
                    <span className="text-3xl font-black transition-transform duration-300 transform select-none">
                        {isExpanded ? '-' : '+'}
                    </span>
                </div>
                
                {/* Content Area - show metrics when expanded */}
                {isExpanded ? (
                    <ul className="space-y-3 pt-2">
                        {items.map((kpi, index) => (
                            <li key={index} className="font-extrabold text-base hover:border-0 border-l-4 border-current pl-3 hover:bg-gray-700 dark:hover:bg-gray-300 hover:scale-[1.1] transition duration-150">
                                {kpi}
                            </li>
                        ))}
                    </ul>
                ) : (
                    // Teaser when collapsed
                    <p className="text-lg font-bold text-gray-400 dark:text-gray-600">
                        {teaser}
                        <span className="block text-sm font-bold pt-2 italic underline">Reveal full list of metrics.</span>
                    </p>
                )}
            </div>
        );
    };


  return (
    <section
      id="model"
      // Ensure high-contrast background for brutalism
      className="relative brutalist-section-inverted bg-black dark:bg-white text-white dark:text-black py-16 sm:py-24 overflow-hidden"
    >
      <div className="relative brutalist-container">
        {/* Header Section */}
        <div className="max-w-4xl mb-16 sm:mb-20 relative z-10">
          <div className="space-y-6">
            <h2 className="brutalist-heading text-white dark:text-black">
              {pillars.title}
            </h2>
            {/* Bold divider */}
            <div className="brutalist-divider-bold bg-white dark:bg-black"></div>
          </div>
          <p className="mt-8 brutalist-subheading text-white dark:text-black">
            {pillars.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid (Core Framework Overview) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {cards.map((pillar, idx) => (
            <article
              key={idx}
              // Brutalist style: hard borders, high contrast overlay, aggressive hover scale
              className="p-8 border-4 border-white dark:border-black bg-gray-900/50 dark:bg-gray-100/50 relative transform hover:scale-[1.1] transition duration-200"
            >
              <div className="space-y-6">
                {/* Bold, uppercase title */}
                <h3 className="text-2xl font-black mb-4 uppercase">{pillar.title}</h3>
                <p className="text-lg font-bold text-gray-300 dark:text-gray-700">
                  {pillar.description}
                </p>
                <div className="pt-4">
                  {/* Accent line */}
                  <div className="h-0.5 w-1/3 bg-white dark:bg-black"></div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* --- DEDICATED DETAIL SECTIONS START HERE --- */}
        
        <div className="mt-20 sm:mt-32">
            {/* Operating Principles Section */}
            <div className="mb-20">
                <h2 className="brutalist-heading text-white dark:text-black mb-10">
                    Operating Principles
                </h2>
                <div className="brutalist-divider-bold bg-white dark:bg-black w-1/4"></div>

                <div className="grid md:grid-cols-2 gap-6 mt-10">
                    {/* Display Principles with interactive disclosure */}
                    <BrutalistList 
                        title="Our Four Directives" 
                        items={details.principles || []} 
                        className="bg-black text-white border-white dark:bg-white dark:text-black dark:border-black"
                    />

                    {/* Display Strategic Objectives with interactive disclosure */}
                    <BrutalistList 
                        title="Strategic Objectives (Detail)" 
                        items={details.objectives || []} 
                        className="bg-black text-white border-white dark:bg-white dark:text-black dark:border-black"
                    />
                </div>
            </div>

            {/* Key Performance Indicators (KPIs) Section */}
            <div>
                <h2 className="brutalist-heading text-white dark:text-black mb-10">
                    Key Performance Indicators <strong className='text-white text-8xl font-black'>KPI</strong>s
                </h2>
                <div className="brutalist-divider-bold bg-white dark:bg-black w-1/4"></div>

                {/* KPI Grid with interactive disclosure */}
                <div className="grid lg:grid-cols-3 gap-6 mt-10 text-white dark:text-black">
                    
                    <KPIGroup 
                        title="Strategic KPIs" 
                        items={details.kpis?.['Strategic KPIs'] || []} 
                    />
                    
                    <KPIGroup 
                        title="Operational KPIs" 
                        items={details.kpis?.['Operational KPIs'] || []} 
                    />
                    
                    <KPIGroup 
                        title="Critical Success KPIs" 
                        items={details.kpis?.['Critical Success KPIs'] || []} 
                    />
                </div>
                
            </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-20 flex items-center gap-4 relative z-10">
          <div className="brutalist-divider flex-1 bg-white dark:bg-black h-0.5"></div>
          <p className="brutalist-label bg-white dark:bg-black text-black dark:text-white px-3">Four pillars. One integrated, measurable approach.</p>
          <div className="brutalist-divider flex-1 bg-white dark:bg-black h-0.5"></div>
        </div>
      </div>
    </section>
  );
};
