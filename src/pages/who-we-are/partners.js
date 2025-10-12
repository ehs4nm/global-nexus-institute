import React from 'react';
import { Layout } from '../../components/Layout';
import { ContentProvider, useContent } from '../../contexts/ContentContext';

const PartnersContent = () => {
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

  if (error || !pagesContent.partners) {
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

  const partnersData = pagesContent.partners;

  return (
    <>
      {/* Hero Section */}
      <section className="brutalist-section">
        <div className="brutalist-container">
          <div className="max-w-6xl">
            {/* Page Header */}
            <div className="mb-16">
              <div className="brutalist-number-badge inline-block mb-6">01</div>
              <h1 className="brutalist-heading">{partnersData.title}</h1>
              <div className="mt-6 brutalist-divider-bold" />
              <p className="mt-8 brutalist-subheading">{partnersData.subtitle}</p>
              <p className="mt-6 brutalist-body max-w-3xl">{partnersData.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships Section */}
      <section className="brutalist-section-inverted">
        <div className="brutalist-container">
          <div className="max-w-6xl">
            <div className="mb-16">
              <h2 className="brutalist-heading text-4xl lg:text-5xl">
                {partnersData.sections[0].title}
              </h2>
              <div className="mt-6 brutalist-divider-bold" />
              <p className="mt-8 brutalist-subheading">{partnersData.sections[0].content}</p>
            </div>

            {/* Partners Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnersData.sections[0].partners.map((partner, index) => (
                <article key={index} className="brutalist-card group p-8">
                  <div className="brutalist-number-badge absolute top-4 right-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <span className="brutalist-label">{partner.type}</span>
                    </div>
                    
                    <h3 className="brutalist-card-title mb-4">{partner.name}</h3>
                    
                    <p className="brutalist-body flex-grow">{partner.description}</p>
                    
                    <div className="pt-6 mt-auto">
                      <div className="brutalist-accent-line" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Principles Section */}
      <section className="brutalist-section">
        <div className="brutalist-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="brutalist-heading text-4xl lg:text-5xl">Partnership Principles</h2>
              <div className="mt-6 brutalist-divider-bold mx-auto" style={{width: '120px'}} />
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="brutalist-card-minimal p-8">
                <div className="brutalist-number-badge mb-4">01</div>
                <h3 className="brutalist-card-title mb-4">Shared Vision</h3>
                <p className="brutalist-body">
                  All partnerships align with our mission of integrated analysis across energy, geopolitics, and health.
                </p>
              </div>
              
              <div className="brutalist-card-minimal p-8">
                <div className="brutalist-number-badge mb-4">02</div>
                <h3 className="brutalist-card-title mb-4">Complementary Expertise</h3>
                <p className="brutalist-body">
                  We seek partners who bring unique capabilities that enhance our analytical depth and global reach.
                </p>
              </div>
              
              <div className="brutalist-card-minimal p-8">
                <div className="brutalist-number-badge mb-4">03</div>
                <h3 className="brutalist-card-title mb-4">Actionable Impact</h3>
                <p className="brutalist-body">
                  Every collaboration focuses on producing practical intelligence that informs real-world decisions.
                </p>
              </div>
              
              <div className="brutalist-card-minimal p-8">
                <div className="brutalist-number-badge mb-4">04</div>
                <h3 className="brutalist-card-title mb-4">Global Perspective</h3>
                <p className="brutalist-body">
                  Our partnerships span regions and sectors to ensure comprehensive understanding of interconnected risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="brutalist-section-inverted">
        <div className="brutalist-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="brutalist-heading text-4xl lg:text-5xl mb-6">
              Partner With GNI
            </h2>
            <p className="brutalist-subheading mb-12 max-w-2xl mx-auto">
              → Interested in collaborative research or strategic partnership? 
              Let's explore how we can work together.
            </p>
            <div className="brutalist-border-box inline-block p-8">
              <p className="brutalist-body font-mono">
                Contact: partnerships@globalnexusinstitute.org
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const PartnersPage = () => {
  return (
    <ContentProvider>
      <Layout>
        <PartnersContent />
      </Layout>
    </ContentProvider>
  );
};

export default PartnersPage;

export const Head = () => (
  <>
    <title>Partners — Global Nexus Institute</title>
    <meta name="description" content="Strategic partnerships for integrated analysis across energy, geopolitics, and health domains." />
    <meta name="theme-color" content="#000000" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
);