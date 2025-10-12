import React from 'react';
import { Layout } from '../../components/Layout';
import { ContentProvider, useContent } from '../../contexts/ContentContext';

const ResearchContent = () => {
  const { pagesContent, isLoading, error } = useContent();
  
  if (isLoading) {
    return (
      <section className="brutalist-section">
        <div className="brutalist-container">
          <div className="text-center">
            <div className="brutalist-subheading">Loading...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !pagesContent.research) {
    return (
      <section className="brutalist-section">
        <div className="brutalist-container">
          <div className="text-center">
            <div className="brutalist-subheading">Content unavailable</div>
          </div>
        </div>
      </section>
    );
  }

  const researchData = pagesContent.research;

  return (
    <>
      {/* Hero Section */}
      <section className="brutalist-section">
        <div className="brutalist-container">
          <div className="max-w-6xl">
            {/* Page Header */}
            <div className="my-16">
              <div className="brutalist-number-badge inline-block mb-6 text-black">01</div>
              <h1 className="brutalist-heading dark:text-white">{researchData.title}</h1>
              <p className="mt-4 brutalist-subheading text-xl text-black/80 dark:text-white/80">{researchData.subtitle}</p>
              <div className="mt-6 brutalist-divider-bold" />
              <p className="mt-6 brutalist-body max-w-3xl text-3xl text-black/80 dark:text-white">{researchData.description}</p>
              <img src={researchData.heroImage} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Research Areas Section */}
      <section className="brutalist-section-inverted">
        <div className="brutalist-container">
          <div className="max-w-6xl">
            <div className="mb-16">
              <h2 className="brutalist-heading text-4xl lg:text-5xl">
                {researchData.sections[0].title}
              </h2>
              <div className="mt-6 brutalist-divider-bold" />
              <p className="mt-8 brutalist-subheading">{researchData.sections[0].content}</p>
            </div>

            {/* Research Areas Grid */}
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
              {researchData.sections[0].areas.map((area, index) => (
                <article key={index} className="brutalist-card group p-8">
                  <div className="flex flex-col h-full">
                    <div className="brutalist-number-badge mb-6 text-black dark:text-white">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    <h3 className="brutalist-card-title mb-4 text-black dark:text-white">{area.title}</h3>
                    
                    <p className="brutalist-body mb-6 flex-grow text-black dark:text-white">{area.description}</p>
                    
                    {/* Methods */}
                    <div className="mb-6">
                      <p className="brutalist-label mb-3">Methods</p>
                      <div className="flex flex-wrap gap-2">
                        {area.methods.map((method, methodIndex) => (
                          <span key={methodIndex} className="brutalist-label bg-black dark:bg-white text-white dark:text-black px-3 py-1 text-xs">
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 mt-auto">
                      <div className="brutalist-accent-line" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="brutalist-section">
        <div className="brutalist-container">
          <div className="max-w-6xl">
            <div className="mb-16">
              <h2 className="brutalist-heading text-4xl lg:text-5xl">
                {researchData.sections[1].title}
              </h2>
              <div className="mt-6 brutalist-divider-bold" />
              <p className="brutalist-subheading text-black dark:text-white">{researchData.sections[1].content}</p>
            </div>

            {/* Projects List */}
            <div className="space-y-8">
              {researchData.sections[1].projects.map((project, index) => (
                <article key={index} className="brutalist-card-minimal p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-start justify-between mb-6">
                        <div className="brutalist-number-badge text-white dark:text-black">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="text-right">
                          <span className="brutalist-label">{project.status}</span>
                          <div className="text-sm brutalist-body mt-1 text-white dark:text-black">{project.timeline}</div>
                        </div>
                      </div>
                      
                      <h3 className="brutalist-card-title mb-4 text-white dark:text-black">{project.title}</h3>
                      <p className="brutalist-body mb-6 text-white dark:text-black">{project.description}</p>
                    </div>
                    
                    <div className="lg:w-1/3">
                      <div className="mb-4">
                        <p className="brutalist-label mb-3">Partners</p>
                        <ul className="space-y-1 text-white dark:text-black">
                          {project.partners.map((partner, partnerIndex) => (
                            <li key={partnerIndex} className="brutalist-body text-sm flex items-start">
                              <span className="mr-3 font-mono">•</span>
                              <span>{partner}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Philosophy Section */}
      <section className="brutalist-section-inverted">
        <div className="brutalist-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="brutalist-heading text-4xl lg:text-5xl mb-6">Research Philosophy</h2>
              <p className="brutalist-subheading mb-12 max-w-2xl mx-auto">
                → The principles that guide our approach to understanding complex systems
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="brutalist-card group p-8 text-black dark:text-white">
                <h3 className="brutalist-card-title mb-4">Systems-First Thinking</h3>
                <p className="brutalist-body">
                  We start with the assumption that energy, geopolitical, and health domains 
                  are fundamentally interconnected, not separate systems that occasionally interact.
                </p>
                <div className="pt-4 mt-6">
                  <div className="brutalist-accent-line-black" />
                </div>
              </div>
              
              <div className="brutalist-card group p-8 text-black dark:text-white">
                <h3 className="brutalist-card-title mb-4">Empirical Rigor</h3>
                <p className="brutalist-body">
                  Every model, every prediction, every insight must be grounded in verifiable data 
                  and tested against real-world outcomes to ensure reliability.
                </p>
                <div className="pt-4 mt-6">
                  <div className="brutalist-accent-line-black" />
                </div>
              </div>
              
              <div className="brutalist-card group p-8 text-black dark:text-white">
                <h3 className="brutalist-card-title mb-4">Practical Relevance</h3>
                <p className="brutalist-body">
                  Research that can't inform real decisions isn't valuable. We focus on questions 
                  that matter to policymakers, business leaders, and crisis responders.
                </p>
                <div className="pt-4 mt-6">
                  <div className="brutalist-accent-line-black" />
                </div>
              </div>
              
              <div className="brutalist-card group p-8 text-black dark:text-white">
                <h3 className="brutalist-card-title mb-4">Open Innovation</h3>
                <p className="brutalist-body">
                  The world's challenges are too complex for any single institution. We collaborate 
                  openly and share knowledge to accelerate progress across the field.
                </p>
                <div className="pt-4 mt-6">
                  <div className="brutalist-accent-line-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Collaboration Section */}
      <section className="brutalist-section">
        <div className="brutalist-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="brutalist-heading text-4xl lg:text-5xl mb-6 dark:text-white text-black">Publications & Collaboration</h2>
              <p className="brutalist-subheading mb-8 max-w-2xl mx-auto text-black dark:text-white">
                → Our research outputs and opportunities for academic collaboration
              </p>
            </div>

            <div className="brutalist-card-inverted p-12 mb-12">
              <h3 className="brutalist-card-title mb-6">Research Outputs</h3>
              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="brutalist-label mb-3">Peer-Reviewed Articles</h4>
                  <p className="brutalist-body text-2xl mb-4">
                    Published in leading journals across energy policy, international relations, 
                    and public health domains.
                  </p>
                </div>
                <div>
                  <h4 className="brutalist-label mb-3">Working Papers</h4>
                  <p className="brutalist-body text-2xl mb-4">
                    Preliminary findings and methodological innovations shared with the 
                    global research community.
                  </p>
                </div>
                <div>
                  <h4 className="brutalist-label mb-3">Policy Briefs</h4>
                  <p className="brutalist-body text-2xl mb-4">
                    Research-based recommendations for government officials and 
                    international organizations.
                  </p>
                </div>
                <div>
                  <h4 className="brutalist-label mb-3">Data & Models</h4>
                  <p className="brutalist-body text-2xl mb-4">
                    Open-source datasets and modeling tools to advance nexus research 
                    across institutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="brutalist-border-box inline-block p-8">
              <p className="brutalist-body font-mono mb-4">
                Research partnerships: research@globalnexusinstitute.org
              </p>
              <p className="brutalist-body font-mono text-2xl">
                Interested in collaborative research or data sharing? Let's explore opportunities 
                to advance nexus science together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ResearchPage = () => {
  return (
    <ContentProvider>
      <Layout>
        <ResearchContent />
      </Layout>
    </ContentProvider>
  );
};

export default ResearchPage;

export const Head = () => (
  <>
    <title>Research — Global Nexus Institute</title>
    <meta name="description" content="Advancing the science of interconnected systems through rigorous research across energy, geopolitics, and health domains." />
    <meta name="theme-color" content="#000000" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
);