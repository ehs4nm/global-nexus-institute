import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FullscreenMenu } from './FullscreenMenu';
import { PersonDrawer } from './PersonDrawer';

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <FullscreenMenu />
      <PersonDrawer />
      <main id="top" className="relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};