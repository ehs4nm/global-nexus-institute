import React, { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { HeroSection } from '../components/sections/HeroSection';
import { SloganSection } from '../components/sections/SloganSection';
import { MissionSection } from '../components/sections/MissionSection';
import { ModelSection } from '../components/sections/ModelSection';
import { InitiativesSection } from '../components/sections/InitiativesSection';
import { GallerySection } from '../components/sections/GallerySection';
import { LeadershipSection } from '../components/sections/LeadershipSection';
import { ContactSection } from '../components/sections/ContactSection';
import { AboutUsSection } from '../components/sections/AboutUsSection';     
import { ExploreSliderSection } from '../components/sections/ExploreSliderSection';

/**
 * A minimal, high-performance loading animation component.
 * @param {object} props - The component props.
 * @param {function} props.onComplete - Callback fired when animation completes.
 * @param {boolean} props.isAppReady - Controls fade-out animation.
 */
const LoadingScreen = ({ onComplete, isAppReady }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete?.();
        }, 2000); // Increased for better UX and animation completion
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div 
            className={`fixed inset-0 z-[100] bg-black transition-opacity duration-300 flex items-center justify-center
                ${isAppReady ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            role="progressbar"
            aria-valuetext="Loading"
        >
            <div className="text-center">
                <div className="overflow-hidden">
                    <h1 className="text-7xl md:text-9xl font-black tracking-widest text-white loading-title">
                        <span className="inline-block animate-slide-up">GNI</span>
                    </h1>
                </div>
                
                <div className="overflow-hidden mt-4">
                    <div className="loading-text text-white/80 text-sm md:text-base font-light tracking-wider animate-slide-up-delayed">
                        Global Nexus Institute
                    </div>
                </div>
                
                <div className="mt-8 relative h-[2px] w-48 mx-auto bg-white/20 overflow-hidden">
                    <div className="loading-bar absolute inset-0 bg-white" />
                </div>
            </div>

            <style>{`
                .loading-title { text-shadow: 0 0 40px rgba(255, 255, 255, 0.5); }
                
                @keyframes slideUp {
                    from { transform: translateY(100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @keyframes loadingBar {
                    0% { transform: translateX(-100%); }
                    50%, 100% { transform: translateX(100%); }
                }

                .animate-slide-up {
                    animation: slideUp 0.3s cubic-bezier(0.2, 0.7, 0.4, 1) forwards;
                }

                .animate-slide-up-delayed {
                    animation: slideUp 0.5s cubic-bezier(0.2, 0.7, 0.4, 1) 0.2s forwards;
                    opacity: 0;
                }

                .loading-bar {
                    animation: loadingBar 1s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};


// --- Main Gatsby Page Component ---
const IndexPage = () => {
    const [isAppReady, setIsAppReady] = useState(false);
    const [isLoaderFinished, setIsLoaderFinished] = useState(false);

    // Track when the logo animation has completed (LoaderTree calls onComplete)
    const [isLogoDone, setIsLogoDone] = useState(false);
    // Track when the browser has finished loading all resources
    const [hasWindowLoaded, setHasWindowLoaded] = useState(false);

    // Listen for the window load event (or immediate if already complete)
    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (document.readyState === 'complete') {
            setHasWindowLoaded(true);
            return;
        }
        const onLoad = () => setHasWindowLoaded(true);
        window.addEventListener('load', onLoad, { once: true });
        return () => window.removeEventListener('load', onLoad);
    }, []);

    // LoaderTree tells us its animation finished
    const handleLoadingComplete = () => {
        setIsLogoDone(true);
    };

    // When both the logo has shown and the window has fully loaded, reveal the app
    useEffect(() => {
        if (isLogoDone && hasWindowLoaded) {
            setIsAppReady(true);
            const t = setTimeout(() => setIsLoaderFinished(true), 300); // match fade-out duration
            return () => clearTimeout(t);
        }
    }, [isLogoDone, hasWindowLoaded]);

    return (
        <>
            {!isLoaderFinished && (
                <LoadingScreen 
                    onComplete={handleLoadingComplete} 
                    isAppReady={isAppReady}
                />
            )}
            
            <div className={`transition-opacity duration-1000 ${isAppReady ? 'opacity-100' : 'opacity-0'}`}>
                <Layout>
                    <HeroSection />
                    <SloganSection />
                    <GallerySection />
                    <MissionSection />
                    <ModelSection />
                    <AboutUsSection />
                    <ExploreSliderSection />
                    <InitiativesSection />
                    <LeadershipSection />
                    <ContactSection />
                </Layout>
            </div>
        </>
    );
};

export default IndexPage;

export const Head = () => (
    <>
        <title>Global Nexus Institute — Foresight for a Connected World</title>
        <meta name="description" content="GNI connects energy, geopolitics, and health into one field of actionable intelligence." />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link
        rel="preload"
        href="src/styles/global.css"
        as="style"
        onLoad={(e) => {
            const link = e.currentTarget;
            // stop future calls and promote to stylesheet
            link.onload = null;
            link.rel = 'stylesheet';
        }}
        /> */}
        {/* Optional noscript fallback */}
        {/* <noscript><link rel="stylesheet" href="src/styles/global.css" /></noscript> */}
    </>
);

