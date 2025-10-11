import React, { useEffect, useRef, useCallback } from 'react';
import { useContent } from '../../contexts/ContentContext';

const NewsTickerSection = () => {
  const { newsTickerContent } = useContent();
  const tickerRef = useRef(null);
  const textRef = useRef(null);
  const animationIdRef = useRef(null);

  const startAnimation = useCallback(() => {
    const ticker = tickerRef.current;
    const text = textRef.current;
    
    if (!ticker || !text || !newsTickerContent.enabled || !newsTickerContent.text) {
      return;
    }

    // Cancel any existing animation
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }

    // Reset position
    let position = ticker.offsetWidth;
    
    const animate = () => {
      position -= newsTickerContent.speed / 60; // Convert to pixels per frame (assuming 60fps)
      
      // When text completely exits screen, reset to start from right
      if (position <= -text.offsetWidth) {
        position = ticker.offsetWidth;
      }
      
      text.style.transform = `translateX(${position}px)`;
      
      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationIdRef.current = requestAnimationFrame(animate);
  }, [newsTickerContent.speed, newsTickerContent.enabled, newsTickerContent.text]);

  useEffect(() => {
    if (newsTickerContent.enabled && newsTickerContent.text) {
      startAnimation();
    } else {
      // Stop animation if disabled
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }
    }

    // Cleanup function
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }
    };
  }, [startAnimation]);

  // Don't render if disabled or no text
  if (!newsTickerContent.enabled || !newsTickerContent.text) {
    return null;
  }

  return (
    <section className="bg-black border-y border-neutral-800 overflow-hidden relative" style={{ height: '15vh' }}>
      <div 
        ref={tickerRef}
        className="h-full flex items-center relative"
      >
        {/* Background pattern for visual interest */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 1px,
              rgba(255, 255, 255, 0.1) 1px,
              rgba(255, 255, 255, 0.1) 2px
            )`
          }}
        />
        
        {/* Scrolling text */}
        <div
          ref={textRef}
          className="absolute whitespace-nowrap will-change-transform"
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            fontWeight: '700',
            letterSpacing: '0.05em',
            color: '#ffffff',
            textShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
            fontFamily: 'monospace'
          }}
        >
          {newsTickerContent.text}
        </div>
        
        {/* Gradient edges for fade effect */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </div>
      
      {/* Optional: Add a subtle bottom border animation */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
    </section>
  );
};

export { NewsTickerSection };