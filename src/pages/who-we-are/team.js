import React from 'react';
import { Layout } from '../../components/Layout';
import { ContentProvider, useContent } from '../../contexts/ContentContext';

const TeamContent = () => {
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

  if (error || !pagesContent.team) {
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

  const teamData = pagesContent.team;

  return (
    <>
      {/* Hero Section */}
      <section className="brutalist-section">
        <div className="brutalist-container">
          <div className="max-w-6xl">
            {/* Page Header */}
            <div className="mb-16">
              <div className="brutalist-number-badge inline-block mb-6">02</div>
              <h1 className="brutalist-heading">{teamData.title}</h1>
              <div className="mt-6 brutalist-divider-bold" />
              <p className="mt-8 brutalist-subheading">{teamData.subtitle}</p>
              <p className="mt-6 brutalist-body max-w-3xl">{teamData.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="brutalist-section-inverted">
        <div className="brutalist-container">
          <div className="max-w-6xl">
            <div className="mb-16">
              <h2 className="brutalist-heading text-4xl lg:text-5xl">
                {teamData.sections[0].title}
              </h2>
              <div className="mt-6 brutalist-divider-bold" />
              <p className="mt-8 brutalist-subheading">{teamData.sections[0].content}</p>
            </div>

            {/* Team Members Grid */}
            <div className="grid sm:grid-cols-2 gap-12">
              {teamData.sections[0].members.map((member, index) => (
                <article key={index} className="brutalist-card group p-8">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className="brutalist-number-badge">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="brutalist-card-title mb-2">{member.name}</h3>
                      <p className="brutalist-label mb-6">{member.title}</p>
                      
                      <p className="brutalist-body mb-6">{member.bio}</p>
                      
                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {member.expertise.map((skill, skillIndex) => (
                          <span key={skillIndex} className="brutalist-label bg-black dark:bg-white text-white dark:text-black px-3 py-1">
                            {skill}
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

      {/* Our Approach Section */}
      <section className="brutalist-section">
        <div className="brutalist-container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="brutalist-heading text-4xl lg:text-5xl">Our Approach</h2>
              <div className="mt-6 brutalist-divider-bold mx-auto" style={{width: '120px'}} />
              <p className="mt-8 brutalist-subheading max-w-2xl mx-auto">
                → How we build teams that can handle the world's most complex challenges
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="brutalist-card-minimal p-8">
                <div className="brutalist-number-badge mb-4">01</div>
                <h3 className="brutalist-card-title mb-4">Interdisciplinary Thinking</h3>
                <p className="brutalist-body">
                  We recruit across energy, geopolitics, and health domains, ensuring every team member 
                  understands how their specialty connects to broader systems.
                </p>
              </div>
              
              <div className="brutalist-card-minimal p-8">
                <div className="brutalist-number-badge mb-4">02</div>
                <h3 className="brutalist-card-title mb-4">Deep Expertise</h3>
                <p className="brutalist-body">
                  Each team member brings world-class skills in their domain while developing 
                  fluency in adjacent fields through continuous collaboration.
                </p>
              </div>
              
              <div className="brutalist-card-minimal p-8">
                <div className="brutalist-number-badge mb-4">03</div>
                <h3 className="brutalist-card-title mb-4">Global Perspective</h3>
                <p className="brutalist-body">
                  Our diverse backgrounds and experiences ensure we understand how crises 
                  manifest differently across regions, cultures, and systems.
                </p>
              </div>
              
              <div className="brutalist-card-minimal p-8">
                <div className="brutalist-number-badge mb-4">04</div>
                <h3 className="brutalist-card-title mb-4">Action-Oriented</h3>
                <p className="brutalist-body">
                  We hire individuals who combine analytical rigor with practical experience, 
                  understanding that intelligence must translate into real-world impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Network Section */}
      <section className="brutalist-section-inverted">
        <div className="brutalist-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="brutalist-heading text-4xl lg:text-5xl mb-6">Advisory Network</h2>
              <p className="brutalist-subheading mb-8 max-w-2xl mx-auto">
                We're building a council of senior advisors across sectors to guide our mission 
                and amplify global impact.
              </p>
            </div>

            <div className="brutalist-card-inverted p-12">
              <h3 className="brutalist-card-title mb-6">Coming Soon</h3>
              <p className="brutalist-body mb-8 max-w-2xl mx-auto">
                Our advisory council will include former government officials, industry leaders, 
                academic experts, and international organization executives who share our vision 
                of integrated crisis analysis.
              </p>
              <div className="brutalist-border-box inline-block p-6">
                <p className="brutalist-body font-mono">
                  Interested in advisory roles? Contact: advisory@globalnexusinstitute.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const TeamPage = () => {
  return (
    <ContentProvider>
      <Layout>
        <TeamContent />
      </Layout>
    </ContentProvider>
  );
};

export default TeamPage;

export const Head = () => (
  <>
    <title>Team — Global Nexus Institute</title>
    <meta name="description" content="Meet our interdisciplinary team of experts combining deep sector knowledge with systems thinking." />
    <meta name="theme-color" content="#000000" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
);