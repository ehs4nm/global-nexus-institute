import React from 'react';
import { Layout } from '../../components/Layout';
import { ContentProvider, useContent } from '../../contexts/ContentContext';

const AnalysisContent = () => {
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

  if (error || !pagesContent.analysis) {
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

  const analysisData = pagesContent.analysis;

  return (
    <>
      {/* Hero Section */}
      <section className="brutalist-section">
        <div className="brutalist-container">
          <div className="max-w-6xl">
            {/* Page Header */}
            <div className="mb-16">
              <div className="brutalist-number-badge inline-block mb-6">02</div>
              <h1 className="brutalist-heading">{analysisData.title}</h1>
              <div className="mt-6 brutalist-divider-bold" />
              <p className="mt-8 brutalist-subheading">{analysisData.subtitle}</p>
              <p className="mt-6 brutalist-body max-w-3xl">{analysisData.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytical Services Section */}
      <section className="brutalist-section-inverted">
        <div className="brutalist-container">
          <div className="max-w-6xl">
            <div className="mb-16">
              <h2 className="brutalist-heading text-4xl lg:text-5xl">
                {analysisData.sections[0].title}
              </h2>
              <div className="mt-6 brutalist-divider-bold" />
              <p className="mt-8 brutalist-subheading">{analysisData.sections[0].content}</p>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              {analysisData.sections[0].services.map((service, index) => (
                <article key={index} className="brutalist-card group p-8">
                  <div className="flex flex-col h-full">
                    <div className="brutalist-number-badge mb-6">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    <h3 className="brutalist-card-title mb-4">{service.title}</h3>
                    
                    <p className="brutalist-body mb-6 flex-grow">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <span className="brutalist-label">Frequency</span>
                        <p className="brutalist-body text-sm mt-1">{service.frequency}</p>
                      </div>
                      <div>
                        <span className="brutalist-label">Format</span>
                        <p className="brutalist-body text-sm mt-1">{service.format}</p>
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

      {/* Recent Analysis Section */}
      <section className="brutalist-section">
        <div className="brutalist-container">
          <div className="max-w-6xl">
            <div className="mb-16">
              <h2 className="brutalist-heading text-4xl lg:text-5xl">
                {analysisData.sections[1].title}
              </h2>
              <div className="mt-6 brutalist-divider-bold" />
              <p className="mt-8 brutalist-subheading">{analysisData.sections[1].content}</p>
            </div>

            {/* Reports List */}
            <div className="space-y-8">
              {analysisData.sections[1].reports.map((report, index) => (
                <article key={index} className="brutalist-card-minimal p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-start justify-between mb-6">
                        <div className="brutalist-number-badge">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="text-right">
                          <span className="brutalist-label">{report.type}</span>
                          <div className="text-sm brutalist-body mt-1">{report.date}</div>
                        </div>
                      </div>
                      
                      <h3 className="brutalist-card-title mb-4">{report.title}</h3>
                      <p className="brutalist-body mb-6">{report.summary}</p>
                    </div>
                    
                    <div className="lg:w-1/3">
                      <div className="mb-4">
                        <p className="brutalist-label mb-3">Topics Covered</p>
                        <div className="flex flex-wrap gap-2">
                          {report.topics.map((topic, topicIndex) => (
                            <span key={topicIndex} className="brutalist-label bg-black dark:bg-white text-white dark:text-black px-3 py-1 text-xs">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Analytical Approach Section */}
      <section className="brutalist-section-inverted">
        <div className="brutalist-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="brutalist-heading text-4xl lg:text-5xl mb-6">Our Approach</h2>
              <p className="brutalist-subheading mb-12 max-w-2xl mx-auto">
                → How we turn complex data into actionable intelligence
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="brutalist-card group p-8">
                <h3 className="brutalist-card-title mb-4">Multi-Domain Integration</h3>
                <p className="brutalist-body">
                  Every analysis considers energy, geopolitical, and health factors simultaneously, 
                  revealing connections that single-domain approaches miss.
                </p>
                <div className="pt-4 mt-6">
                  <div className="brutalist-accent-line" />
                </div>
              </div>
              
              <div className="brutalist-card group p-8">
                <h3 className="brutalist-card-title mb-4">Real-Time Monitoring</h3>
                <p className="brutalist-body">
                  We track developments across all three domains continuously, enabling rapid response 
                  to emerging crises and evolving situations.
                </p>
                <div className="pt-4 mt-6">
                  <div className="brutalist-accent-line" />
                </div>
              </div>
              
              <div className="brutalist-card group p-8">
                <h3 className="brutalist-card-title mb-4">Scenario Modeling</h3>
                <p className="brutalist-body">
                  We develop multiple scenarios to help decision-makers understand potential outcomes 
                  and prepare for different contingencies.
                </p>
                <div className="pt-4 mt-6">
                  <div className="brutalist-accent-line" />
                </div>
              </div>
              
              <div className="brutalist-card group p-8">
                <h3 className="brutalist-card-title mb-4">Decision-Ready Format</h3>
                <p className="brutalist-body">
                  All analysis is structured to support specific decisions, with clear recommendations 
                  and implementation pathways for different stakeholders.
                </p>
                <div className="pt-4 mt-6">
                  <div className="brutalist-accent-line" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Products Section */}
      <section className="brutalist-section">
        <div className="brutalist-container">
          <div className="max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="brutalist-heading text-4xl lg:text-5xl">Intelligence Products</h2>
              <div className="mt-6 brutalist-divider-bold mx-auto" style={{width: '120px'}} />
              <p className="mt-8 brutalist-subheading max-w-2xl mx-auto">
                → Tailored analytical products for different decision-making needs
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              <div className="brutalist-card-minimal p-8">
                <div className="brutalist-number-badge mb-4">01</div>
                <h3 className="brutalist-card-title mb-4">Government Briefings</h3>
                <p className="brutalist-body mb-4">
                  Confidential assessments for government officials on emerging risks and 
                  policy implications across our three domains.
                </p>
                <span className="brutalist-label">Classification: Restricted</span>
              </div>
              
              <div className="brutalist-card-minimal p-8">
                <div className="brutalist-number-badge mb-4">02</div>
                <h3 className="brutalist-card-title mb-4">Corporate Risk Reports</h3>
                <p className="brutalist-body mb-4">
                  Strategic intelligence for multinational corporations on regulatory changes, 
                  supply chain vulnerabilities, and market disruptions.
                </p>
                <span className="brutalist-label">Classification: Commercial</span>
              </div>
              
              <div className="brutalist-card-minimal p-8">
                <div className="brutalist-number-badge mb-4">03</div>
                <h3 className="brutalist-card-title mb-4">Public Analysis</h3>
                <p className="brutalist-body mb-4">
                  Open-source analysis and commentary on major developments, 
                  available to researchers, journalists, and civil society.
                </p>
                <span className="brutalist-label">Classification: Public</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe & Access Section */}
      <section className="brutalist-section-inverted">
        <div className="brutalist-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="brutalist-heading text-4xl lg:text-5xl mb-6">Access Our Analysis</h2>
              <p className="brutalist-subheading mb-8 max-w-2xl mx-auto">
                → Subscribe to receive regular intelligence updates and access custom analysis
              </p>
            </div>

            <div className="brutalist-card-inverted p-12 mb-12">
              <h3 className="brutalist-card-title mb-6">Subscription Tiers</h3>
              <div className="grid sm:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="brutalist-number-badge mb-4">01</div>
                  <h4 className="brutalist-label mb-2">Essential</h4>
                  <p className="brutalist-body text-sm mb-3">
                    Weekly intelligence briefs and quarterly outlook reports.
                  </p>
                  <p className="brutalist-label text-xs">Academic/NGO Rate Available</p>
                </div>
                <div>
                  <div className="brutalist-number-badge mb-4">02</div>
                  <h4 className="brutalist-label mb-2">Professional</h4>
                  <p className="brutalist-body text-sm mb-3">
                    All essential products plus crisis alerts and custom briefings.
                  </p>
                  <p className="brutalist-label text-xs">Corporate Standard</p>
                </div>
                <div>
                  <div className="brutalist-number-badge mb-4">03</div>
                  <h4 className="brutalist-label mb-2">Strategic</h4>
                  <p className="brutalist-body text-sm mb-3">
                    Full access plus direct analyst consultation and bespoke research.
                  </p>
                  <p className="brutalist-label text-xs">Government/Enterprise</p>
                </div>
              </div>
            </div>

            <div className="brutalist-border-box inline-block p-8">
              <p className="brutalist-body font-mono mb-4">
                Intelligence subscriptions: intelligence@globalnexusinstitute.org
              </p>
              <p className="brutalist-body font-mono text-sm">
                Need custom analysis or have specific intelligence requirements? 
                Contact us to discuss tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const AnalysisPage = () => {
  return (
    <ContentProvider>
      <Layout>
        <AnalysisContent />
      </Layout>
    </ContentProvider>
  );
};

export default AnalysisPage;

export const Head = () => (
  <>
    <title>Analysis — Global Nexus Institute</title>
    <meta name="description" content="Real-time intelligence for decision makers - integrated assessments of emerging crises across energy, geopolitical, and health domains." />
    <meta name="theme-color" content="#000000" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
);