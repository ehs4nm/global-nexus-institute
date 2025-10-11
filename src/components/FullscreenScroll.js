import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useScrollMode } from '../hooks/useScrollMode';

const FullscreenScroll = ({ children }) => {
  const { currentSection, setCurrentSection } = useScrollMode();
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);
  
  const sections = React.Children.toArray(children);
  const totalSections = sections.length;

  // Navigate to specific section
  const navigateToSection = useCallback((sectionIndex) => {
    if (sectionIndex >= 0 && sectionIndex < totalSections && !isScrolling) {
      setCurrentSection(sectionIndex);
      setIsScrolling(true);
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Re-enable scrolling after animation completes
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 800); // Match CSS transition duration
    }
  }, [totalSections, setCurrentSection, isScrolling]);

  // Handle wheel scroll
  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling) return;
      
      // Get the current section's scrollable container
      const currentSectionEl = containerRef.current?.children[0]?.children[currentSection];
      if (!currentSectionEl) return;
      
      const { scrollTop, scrollHeight, clientHeight } = currentSectionEl;
      const delta = e.deltaY;
      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
      
      // Only navigate between sections if we're at the boundaries and trying to scroll further
      if (delta > 0 && isAtBottom && currentSection < totalSections - 1) {
        // Scroll down - move to next section
        e.preventDefault();
        navigateToSection(currentSection + 1);
      } else if (delta < 0 && isAtTop && currentSection > 0) {
        // Scroll up - move to previous section
        e.preventDefault();
        navigateToSection(currentSection - 1);
      }
      // Otherwise, let the default scroll behavior handle scrolling within the section
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentSection, totalSections, isScrolling, navigateToSection]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isScrolling) return;
      
      // For Home and End keys, always navigate
      if (e.key === 'Home') {
        e.preventDefault();
        navigateToSection(0);
        return;
      }
      if (e.key === 'End') {
        e.preventDefault();
        navigateToSection(totalSections - 1);
        return;
      }
      
      // For arrow keys and page keys, check scroll position
      const currentSectionEl = containerRef.current?.children[0]?.children[currentSection];
      if (!currentSectionEl) return;
      
      const { scrollTop, scrollHeight, clientHeight } = currentSectionEl;
      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
      
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
        case ' ': // Space key
          if (isAtBottom && currentSection < totalSections - 1) {
            e.preventDefault();
            navigateToSection(currentSection + 1);
          }
          break;
        case 'ArrowUp':
        case 'PageUp':
          if (isAtTop && currentSection > 0) {
            e.preventDefault();
            navigateToSection(currentSection - 1);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, totalSections, isScrolling, navigateToSection]);

  // Handle touch/swipe for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    if (isScrolling) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (isScrolling) return;
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || isScrolling) return;
    
    // Get the current section's scrollable container
    const currentSectionEl = containerRef.current?.children[0]?.children[currentSection];
    if (!currentSectionEl) return;
    
    const { scrollTop, scrollHeight, clientHeight } = currentSectionEl;
    const isAtTop = scrollTop <= 0;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
    
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > 50;
    const isDownSwipe = distance < -50;

    // Only navigate between sections if we're at the boundaries
    if (isUpSwipe && isAtBottom && currentSection < totalSections - 1) {
      navigateToSection(currentSection + 1);
    } else if (isDownSwipe && isAtTop && currentSection > 0) {
      navigateToSection(currentSection - 1);
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="w-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${currentSection * 100}vh)`,
          willChange: 'transform'
        }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className="w-full h-screen flex-shrink-0 relative overflow-y-auto"
            style={{ minHeight: '100vh' }}
          >
            {section}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-3 md:right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-2 md:space-y-3">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => navigateToSection(index)}
            className={`block w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 hover:scale-125 touch-manipulation ${
              currentSection === index
                ? 'bg-white shadow-lg scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to section ${index + 1}`}
            style={{ minHeight: '12px', minWidth: '12px' }} // Ensure touch target size
          />
        ))}
      </div>

      {/* Section Counter */}
      <div className="fixed bottom-3 md:bottom-6 right-3 md:right-6 z-50 bg-black/20 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-2">
        <span className="text-white dark:text-black text-xs md:text-sm font-medium">
          {currentSection + 1} / {totalSections}
        </span>
      </div>

      {/* Scroll Hint (only show on first section) */}
      {currentSection === 0 && (
        <div className="fixed bottom-16 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <div className="text-white/70 dark:text-black/70 text-center">
            <svg 
              className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-1 md:mb-2 text-black dark:text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
            <p className="text-xs font-medium text-black dark:text-white">Scroll to explore</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullscreenScroll;