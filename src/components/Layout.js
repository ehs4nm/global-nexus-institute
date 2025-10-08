import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FullscreenMenu } from './FullscreenMenu';
import { PersonDrawer } from './PersonDrawer';
import { NewsletterProvider } from '../hooks/useNewsletter';
import { NewsletterModal } from './NewsletterModal';

export const Layout = ({ children }) => {
  return (
    <NewsletterProvider>
      <div>
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
