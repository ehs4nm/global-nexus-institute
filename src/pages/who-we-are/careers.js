import React from 'react';
import { Layout } from '../../components/Layout';
import { ContentProvider, useContent } from '../../contexts/ContentContext';

const CareersContent = () => {
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

  if (error || !pagesContent.careers) {
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

  const careersData = pagesContent.careers;

  return (
    <>
      {/* Hero Section */}
      <section className="brutalist-section">
        <div className="brutalist-container">
          <div className="max-w-6xl">
            {/* Page Header */}
            <div className="mb-16">
              <div className="brutalist-number-badge inline-block mb-6">03</div>
              <h1 className="brutalist-heading">{careersData.title}</h1>
              <div className="mt-6 brutalist-divider-bold" />
              <p className="mt-8 brutalist-subheading">{careersData.subtitle}</p>
              <p className="mt-6 brutalist-body max-w-3xl">{careersData.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities Section */}
      <section className="brutalist-section-inverted">
        <div className="brutalist-container">
          <div className="max-w-6xl">
            <div className="mb-16">
              <h2 className="brutalist-heading text-4xl lg:text-5xl">
                {careersData.sections[0].title}
              </h2>
              <div className="mt-6 brutalist-divider-bold" />
              <p className="mt-8 brutalist-subheading">{careersData.sections[0].content}</p>
            </div>

            {/* Job Listings */}
            <div className="space-y-8">
              {careersData.sections[0].positions.map((position, index) => (
                <article key={index} className="brutalist-card group p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-grow">
                      <div className="flex items-start justify-between mb-6">
                        <div className="brutalist-number-badge">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="text-right">
                          <span className="brutalist-label">{position.type}</span>
                          <div className="text-sm brutalist-body mt-1">{position.location}</div>
                        </div>
                      </div>
                      
                      <h3 className="brutalist-card-title mb-2">{position.title}</h3>
                      <p className="brutalist-label mb-6">{position.department}</p>
                      
                      <p className="brutalist-body mb-6">{position.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="brutalist-label mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="brutalist-body flex items-start">
                              <span className="mr-3 font-mono">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4">
                        <div className="brutalist-accent-line" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why GNI Section */}
      <section className="brutalist-section">
        <div className="brutalist-container">
          <div className="max-w-6xl">
            <div className="mb-16">
              <h2 className="brutalist-heading text-4xl lg:text-5xl">
                {careersData.sections[1].title}
              </h2>
              <div className="mt-6 brutalist-divider-bold" />
              <p className="mt-8 brutalist-subheading">{careersData.sections[1].content}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {careersData.sections[1].benefits.map((benefit, index) => (
                <div key={index} className="brutalist-card-minimal p-8">
                  <div className="brutalist-number-badge mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="brutalist-card-title mb-4">{benefit.title}</h3>
                  <p className="brutalist-body">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Values Section */}
      <section className="brutalist-section-inverted">
        <div className="brutalist-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="brutalist-heading text-4xl lg:text-5xl mb-6">Culture & Values</h2>
              <p className="brutalist-subheading mb-12 max-w-2xl mx-auto">
                → The principles that guide how we work and grow together
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="brutalist-card group p-8">
                <h3 className="brutalist-card-title mb-4">Intellectual Rigor</h3>
                <p className="brutalist-body">
                  We demand excellence in analysis and reasoning, always questioning assumptions 
                  and seeking the most accurate understanding of complex systems.
                </p>
                <div className="pt-4 mt-6">
                  <div className="brutalist-accent-line" />
                </div>
              </div>
              
              <div className="brutalist-card group p-8">
                <h3 className="brutalist-card-title mb-4">Collaborative Innovation</h3>
                <p className="brutalist-body">
                  Our best insights emerge from diverse perspectives working together, 
                  combining different expertise to solve problems no single discipline can address.
                </p>
                <div className="pt-4 mt-6">
                  <div className="brutalist-accent-line" />
                </div>
              </div>
              
              <div className="brutalist-card group p-8">
                <h3 className="brutalist-card-title mb-4">Global Impact</h3>
                <p className="brutalist-body">
                  Every project, every analysis, every recommendation is designed to make 
                  the world more prepared for and resilient to interconnected crises.
                </p>
                <div className="pt-4 mt-6">
                  <div className="brutalist-accent-line" />
                </div>
              </div>
              
              <div className="brutalist-card group p-8">
                <h3 className="brutalist-card-title mb-4">Continuous Learning</h3>
                <p className="brutalist-body">
                  We invest in our people's growth, encouraging exploration across domains 
                  and supporting professional development that enhances our collective capability.
                </p>
                <div className="pt-4 mt-6">
                  <div className="brutalist-accent-line" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="brutalist-section">
        <div className="brutalist-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="brutalist-heading text-4xl lg:text-5xl mb-6">Ready to Join?</h2>
              <p className="brutalist-subheading mb-8 max-w-2xl mx-auto">
                → Here's how to apply for positions at the Global Nexus Institute
              </p>
            </div>

            <div className="brutalist-card-inverted p-12 mb-12">
              <h3 className="brutalist-card-title mb-6">Application Process</h3>
              <div className="grid sm:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="brutalist-number-badge mb-4">01</div>
                  <h4 className="brutalist-label mb-2">Submit</h4>
                  <p className="brutalist-body text-sm">
                    Send your CV, cover letter, and relevant work samples to the position-specific email.
                  </p>
                </div>
                <div>
                  <div className="brutalist-number-badge mb-4">02</div>
                  <h4 className="brutalist-label mb-2">Assessment</h4>
                  <p className="brutalist-body text-sm">
                    Complete a brief analytical exercise relevant to your domain and the role.
                  </p>
                </div>
                <div>
                  <div className="brutalist-number-badge mb-4">03</div>
                  <h4 className="brutalist-label mb-2">Interview</h4>
                  <p className="brutalist-body text-sm">
                    Meet with team members to discuss your experience and approach to nexus thinking.
                  </p>
                </div>
              </div>
            </div>

            <div className="brutalist-border-box inline-block p-8">
              <p className="brutalist-body font-mono mb-4">
                General inquiries: careers@globalnexusinstitute.org
              </p>
              <p className="brutalist-body font-mono text-sm">
                We're committed to building a diverse, inclusive team that reflects 
                the global challenges we aim to solve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const CareersPage = () => {
  return (
    <ContentProvider>
      <Layout>
        <CareersContent />
      </Layout>
    </ContentProvider>
  );
};

export default CareersPage;

export const Head = () => (
  <>
    <title>Careers — Global Nexus Institute</title>
    <meta name="description" content="Join our interdisciplinary team of systems thinkers working on the world's most complex challenges." />
    <meta name="theme-color" content="#000000" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
);