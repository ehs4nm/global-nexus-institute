import React from 'react';
import { Layout } from '../components/Layout';
import { HeroSection } from '../components/sections/HeroSection';
import { SloganSection } from '../components/sections/SloganSection';
import { MissionSection } from '../components/sections/MissionSection';
import { ModelSection } from '../components/sections/ModelSection';
import { InitiativesSection } from '../components/sections/InitiativesSection';
import { GallerySection } from '../components/sections/GallerySection';
import { LeadershipSection } from '../components/sections/LeadershipSection';
import { ContactSection } from '../components/sections/ContactSection';

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <SloganSection />
      <MissionSection />
      <ModelSection />
      <InitiativesSection />
      <GallerySection />
      <LeadershipSection />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Global Nexus Institute — Foresight for a Connected World</title>
    <meta
      name="description"
      content="GNI connects energy, geopolitics, and health into one field of actionable intelligence."
    />
  </>
);