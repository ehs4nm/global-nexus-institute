import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { Layout } from './Layout';
import { ContentProvider } from '../contexts/ContentContext';

// Hero Section Component
const HeroSection = ({ data }) => (
  <section className="brutalist-section">
    <div className="brutalist-container">
      <div className="max-w-6xl">
        <div className="my-16">
          {/* <div className="brutalist-number-badge inline-block mb-6 text-black dark:text-white">01</div> */}

          <h1 className="brutalist-heading dark:text-white text-5xl mt-32">{data.title}</h1>
          <h2 className="brutalist-heading dark:text-white text-3xl mt-32">{data.stitle}</h2>
          <p className="mt-4 brutalist-subheading text-xl text-black/80 dark:text-white/80">
            {data.subtitle}
          </p>
          <div className="mt-6 brutalist-divider-bold" />
          <p className="mt-6 brutalist-body max-w-3xl text-3xl text-black/80 dark:text-white">
            {data.description}
          </p>
          {data.heroImage && <img src={data.heroImage} alt="" />}
        </div>
      </div>
    </div>
  </section>
);

// Loading Component
const LoadingSection = () => (
  <section className="brutalist-section">
    <div className="brutalist-container">
      <div className="text-center">
        <div className="brutalist-subheading">Loading...</div>
      </div>
    </div>
  </section>
);

// Error Component
const ErrorSection = () => (
  <section className="brutalist-section">
    <div className="brutalist-container">
      <div className="text-center">
        <div className="brutalist-subheading">Content unavailable</div>
      </div>
    </div>
  </section>
);

// Grid Section for Areas/Members/Partners
const GridSection = ({ section, isInverted = false }) => {
  const sectionClass = isInverted ? "brutalist-section-inverted" : "brutalist-section";
  const items = section.areas || section.members || section.partners || [];

  return (
    <section className={sectionClass}>
      <div className="brutalist-container">
        <div className="max-w-6xl">
          <div className="mb-16">
            <h2 className=" brutalist-heading text-4xl lg:text-5xl text-black dark:text-white">
              {section.title}
            </h2>
            <div className="brutalist-divider-bold" />
            <p className="mt-4 brutalist-subheading text-black/80 dark:text-white/80">{section.content}</p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <article key={index} className="brutalist-card group p-8">
                <div className="flex flex-col h-full">
                  <div className="brutalist-number-badge mb-6 text-black dark:text-white">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <h3 className="brutalist-card-title mb-4 text-black dark:text-white">
                    {item.title || item.name}
                  </h3>
                  
                  {item.image && (
                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4" />
                  )}
                  
                  <p className="brutalist-body mb-6 flex-grow text-black dark:text-white">
                    {item.description || item.bio}
                  </p>
                  
                  {/* Methods for research areas */}
                  {item.methods && (
                    <div className="mb-6">
                      <p className="brutalist-label mb-3">Methods</p>
                      <div className="flex flex-wrap gap-2">
                        {item.methods.map((method, methodIndex) => (
                          <span key={methodIndex} className="brutalist-label bg-black dark:bg-white text-white dark:text-black px-3 py-1 text-xs">
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Expertise for team members */}
                  {item.expertise && (
                    <div className="mb-6">
                      <p className="brutalist-label mb-3">Expertise</p>
                      <div className="flex flex-wrap gap-2">
                        {item.expertise.map((skill, skillIndex) => (
                          <span key={skillIndex} className="brutalist-label bg-black dark:bg-white text-white dark:text-black px-3 py-1 text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Type for partners */}
                  {item.type && (
                    <div className="mb-6">
                      <p className="brutalist-label mb-3">{item.type}</p>
                    </div>
                  )}
                  
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
  );
};

// List Section for Projects/Positions/Reports/Services
const ListSection = ({ section, isInverted = false }) => {
  const sectionClass = isInverted ? "brutalist-section-inverted" : "brutalist-section";
  const items = section.projects || section.positions || section.reports || section.services || section.clients || [];

  return (
    <section className={sectionClass}>
      <div className="brutalist-container">
        <div className="max-w-6xl">
          <div className="mb-16">
            <h2 className=" brutalist-heading text-4xl lg:text-5xl text-white dark:text-black">
              {section.title}
            </h2>
            <div className="mt-6 brutalist-divider-bold" />
            <p className="brutalist-subheading text-white dark:text-black">{section.content}</p>
          </div>

          <div className="space-y-8">
            {items.map((item, index) => (
              <article key={index} className="brutalist-card-minimal p-8 dark:bg-white bg-black">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="lg:w-2/3">
                    <div className="flex items-start justify-between mb-6">
                      <div className="brutalist-number-badge text-white dark:text-black">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="text-right">
                        {item.status && <span className="brutalist-label">{item.status}</span>}
                        {item.type && <span className="brutalist-label">{item.type}</span>}
                        {item.date && <span className="brutalist-label">{item.date}</span>}
                        {item.timeframe && <span className="brutalist-label">{item.timeframe}</span>}
                        {item.format && <span className="brutalist-label">{item.format}</span>}
                        {item.focus && <span className="brutalist-label">{item.focus}</span>}
                        {item.sector && <span className="brutalist-label">{item.sector}</span>}
                        {item.timeline && (
                          <div className="text-sm brutalist-body mt-1 text-white dark:text-black">
                            {item.timeline}
                          </div>
                        )}
                        {item.location && (
                          <div className="text-sm brutalist-body mt-1 text-white dark:text-black">
                            {item.location}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="brutalist-card-title mb-4 text-white dark:text-black">
                      {item.title}
                    </h3>
                    <p className="brutalist-body mb-6 text-white dark:text-black">
                      {item.description || item.summary}
                    </p>
                  </div>
                  
                  <div className="lg:w-1/3">
                    {/* Partners */}
                    {item.partners && (
                      <div className="mb-4">
                        <p className="brutalist-label mb-3">Partners</p>
                        <ul className="space-y-1">
                          {item.partners.map((partner, partnerIndex) => (
                            <li key={partnerIndex} className="brutalist-body text-2xl flex items-start">
                              <span className="mr-3 font-mono">•</span>
                              <span>{partner}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Requirements */}
                    {item.requirements && (
                      <div className="mb-4">
                        <p className="brutalist-label mb-3">Requirements</p>
                        <ul className="space-y-1 text-white dark:text-black">
                          {item.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="brutalist-body text-sm flex items-start">
                              <span className="mr-3 font-mono">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Topics */}
                    {item.topics && (
                      <div className="mb-4">
                        <p className="brutalist-label mb-3">Topics</p>
                        <div className="flex flex-wrap gap-2">
                          {item.topics.map((topic, topicIndex) => (
                            <span key={topicIndex} className="brutalist-label bg-white dark:bg-black text-black dark:text-white px-3 py-1 text-xs">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Benefits/Principles Section
const BenefitsSection = ({ section, isInverted = false }) => {
  const sectionClass = isInverted ? "brutalist-section-inverted" : "brutalist-section";
  const items = section.benefits || section.principles || [];

  return (
    <section className={sectionClass}>
      <div className="brutalist-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className=" brutalist-heading text-4xl lg:text-5xl text-black dark:text-white mb-6">{section.title}</h2>
            {section.subtitle && (
              <p className="brutalist-subheading mb-12 max-w-2xl mx-auto text-black/80 dark:text-white/80">
                {section.subtitle}
              </p>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {items.map((item, index) => (
              <div key={index} className="brutalist-card group p-8 text-black dark:text-white">
                <h3 className="brutalist-card-title mb-4">{item.title}</h3>
                <p className="brutalist-body">
                  {item.description}
                </p>
                <div className="pt-4 mt-6">
                  <div className="brutalist-accent-line-black" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// PageTemplate Component
const PageTemplateContent = ({ pageKey }) => {
  const { pagesContent, isLoading, error } = useContent();
  
  if (isLoading) {
    return <LoadingSection />;
  }

  if (error || !pagesContent[pageKey]) {
    return <ErrorSection />;
  }

  const pageData = pagesContent[pageKey];

  return (
    <>
      {/* Hero Section */}
      <HeroSection data={pageData} />

      {/* Dynamic Sections */}
      {pageData.sections && pageData.sections.map((section, index) => {
        const isInverted = index % 2 === 1;

        // Determine section type based on content structure
        if (section.areas || section.members || section.partners) {
          return <GridSection key={index} section={section} isInverted={isInverted} />;
        }

        if (section.projects || section.positions || section.reports || section.services || section.clients) {
          return <ListSection key={index} section={section} isInverted={isInverted} />;
        }

        if (section.benefits || section.principles) {
          return <BenefitsSection key={index} section={section} isInverted={isInverted} />;
        }

        // Special handling for research page outputs section
        if (section.outputs) {
          return (
            <section key={index} className={isInverted ? "brutalist-section-inverted" : "brutalist-section"}>
              <div className="brutalist-container">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="mb-12">
                    <h2 className=" brutalist-heading text-4xl lg:text-5xl text-black dark:text-white mb-6 dark:text-black text-white">{section.title}</h2>
                    {section.subtitle && (
                      <p className="brutalist-subheading mb-8 max-w-2xl mx-auto text-white dark:text-black">
                        {section.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="brutalist-card-inverted p-12 mb-12">
                    <h3 className="brutalist-card-title mb-6">Research Outputs</h3>
                    <div className="grid sm:grid-cols-2 gap-8 mb-8">
                      {section.outputs.map((output, outputIndex) => (
                        <div key={outputIndex}>
                          <h4 className="brutalist-label mb-3">{output.title}</h4>
                          <p className="brutalist-body text-2xl mb-4">
                            {output.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {section.content && section.description && (
                    <div className="brutalist-border-box inline-block p-8 bg-white dark:bg-black text-black dark:text-white">
                      <p className="brutalist-body font-mono mb-4">
                        {section.content}
                      </p>
                      <p className="brutalist-body font-mono text-2xl">
                        {section.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        }

        // Default text section
        return (
          <section key={index} className={isInverted ? "brutalist-section-inverted" : "brutalist-section"}>
            <div className="brutalist-container">
              <div className="max-w-6xl">
                <div className="mb-16">
                  <h2 className=" brutalist-heading text-4xl lg:text-5xl text-black dark:text-white text-black/80 dark:text-white/80">
                    {section.title}
                  </h2>
                  <div className="mt-6 brutalist-divider-bold" />
                  <p className="mt-8 brutalist-subheading text-black/80 dark:text-white/80">{section.content}</p>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

// Main PageTemplate Component
export const PageTemplate = ({ pageKey }) => {
  return (
    <ContentProvider>
      <Layout>
        <PageTemplateContent pageKey={pageKey} />
      </Layout>
    </ContentProvider>
  );
};

// Head component generator
export const createPageHead = (pageKey) => {
  return () => {
    // We need to access content.json directly here since this runs at build time
    const contentData = require('../data/content.json');
    const pageMetadata = contentData.pages[pageKey]?.pageMetadata || contentData.pages[pageKey];
    
    return (
      <>
        <title>{pageMetadata?.title || `${pageKey.charAt(0).toUpperCase() + pageKey.slice(1)} — Global Nexus Institute`}</title>
        <meta name="description" content={pageMetadata?.description || pageMetadata?.subtitle || ''} />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </>
    );
  };
};