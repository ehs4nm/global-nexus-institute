import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FullscreenMenu } from './FullscreenMenu';
import { PersonDrawer } from './PersonDrawer';
import { NewsletterProvider } from '../hooks/useNewsletter';
import { NewsletterModal } from './NewsletterModal';
import { MenuProvider } from '../hooks/useMenu';

export const Layout = ({ children }) => {
  return (
    <NewsletterProvider>
      <MenuProvider>
        <div className="min-h-screen overflow-x-hidden">
          <Header />
          <FullscreenMenu />
          <PersonDrawer />
          <main id="top" className="relative w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
          <NewsletterModal />
        </div>
      </MenuProvider>
    </NewsletterProvider>
  );
};
