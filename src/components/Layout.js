import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FullscreenMenu } from './FullscreenMenu';
import { PersonDrawer } from './PersonDrawer';
import { NewsletterProvider } from '../hooks/useNewsletter';
import { NewsletterModal } from './NewsletterModal';
import { MenuProvider } from '../hooks/useMenu';
import { ScrollModeProvider, useScrollMode } from '../hooks/useScrollMode';
import FullscreenScroll from './FullscreenScroll';
import { ContentProvider } from '../contexts/ContentContext';
// import CacheRefresh from './CacheRefresh';

// Inner layout component that uses scroll mode context
const LayoutContent = ({ children }) => {
  const { isFullscreenMode } = useScrollMode();
  
  if (isFullscreenMode) {
    // In fullscreen mode, we need to restructure the layout
    const sections = React.Children.toArray(children);
    
    return (
      <div className="relative">
        <Header />
        <FullscreenMenu />
        <PersonDrawer />
        <NewsletterModal />
        
        <FullscreenScroll>
          {sections.map((section, index) => (
            <div key={index} className="relative w-full overflow-y-auto dark:bg-black" style={{ minHeight: '100vh' }}>
              {section}
            </div>
          ))}
          {/* Add Footer as the last section */}
          <div className="relative w-full overflow-y-auto" style={{ minHeight: '100vh' }}>
            <div className="h-screen flex flex-col justify-center">
              <Footer />
            </div>
          </div>
        </FullscreenScroll>
        {/* <CacheRefresh /> */}
      </div>
    );
  }
  
  // Normal scroll mode
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <FullscreenMenu />
      <PersonDrawer />
      <main id="top" className="relative w-full overflow-x-hidden dark:bg-black">
        {children}
      </main>
      <Footer />
      <NewsletterModal />
      {/* <CacheRefresh /> */}
    </div>
  );
};

export const Layout = ({ children }) => {
  return (
    <ContentProvider>
      <NewsletterProvider>
        <MenuProvider>
          <ScrollModeProvider>
            <LayoutContent>{children}</LayoutContent>
          </ScrollModeProvider>
        </MenuProvider>
      </NewsletterProvider>
    </ContentProvider>
  );
};
