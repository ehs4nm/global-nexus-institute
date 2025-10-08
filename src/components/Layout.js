import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FullscreenMenu } from './FullscreenMenu';
import { PersonDrawer } from './PersonDrawer';
import { NewsletterProvider } from '../hooks/useNewsletter';
import { NewsletterModal } from './NewsletterModal';
import { SEO } from './SEO';

export const Layout = ({ children, title, description, image }) => {
  return (
    <NewsletterProvider>
      <div>
        <SEO title={title} description={description} image={image} />
        <Header />
        <FullscreenMenu />
        <PersonDrawer />
        <main id="top" className="relative">
          {children}
        </main>
        <Footer />
        <NewsletterModal />
      </div>
    </NewsletterProvider>
  );
};
