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
        }, 2000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div 
            className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-500 bg-black
                ${isAppReady ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.015) 0, transparent 50%)'
            }}
        >
            <div className="text-center">
                {/* GNI Title - Bold brutalist typography */}
                <h1 className="text-7xl sm:text-9xl md:text-[12rem] font-extrabold text-white tracking-tighter leading-none animate-fade-in-up">
                    GNI
                </h1>

                {/* Subtitle - Minimal contrast */}
                <p className="mt-4 text-neutral-400 text-base md:text-lg tracking-wider font-mono animate-fade-in-up delay-150">
                    → Global Nexus Institute
                </p>

                {/* Loading Bar - Thick brutalist border style */}
                <div className="mt-10 relative h-0.5 w-48 sm:w-64 mx-auto bg-neutral-800 overflow-hidden">
                    <div className="absolute inset-0 bg-white animate-loading-bar" />
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                .animate-fade-in-up {
                    animation: fadeInUp 0.6s cubic-bezier(0.3, 0.7, 0.4, 1) forwards;
                }

                .delay-150 {
                    animation-delay: 0.15s;
                }

                @keyframes loading-bar {
                    0% { transform: translateX(-100%); }
                    50% { transform: translateX(0); }
                    100% { transform: translateX(100%); }
                }

                .animate-loading-bar {
                    animation: loading-bar 1.4s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};



// --- Main Gatsby Page Component ---
const IndexPage = () => {
    const [isAppReady, setIsAppReady] = useState(false);
    const [isLoaderFinished, setIsLoaderFinished] = useState(false);

    // Track when the logo animation has completed (LoadingScreen calls onComplete)
    const [isLogoDone, setIsLogoDone] = useState(false);
    // Track when the browser has finished loading all resources
    const [hasWindowLoaded, setHasWindowLoaded] = useState(false);

    // Listen for the window load event (or immediate if already complete)
    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        // Check if already loaded
        if (document.readyState === 'complete') {
            console.log('Document already loaded');
            setHasWindowLoaded(true);
            return;
        }
        
        const onLoad = () => {
            console.log('Window load event fired');
            setHasWindowLoaded(true);
        };
        
        window.addEventListener('load', onLoad, { once: true });
        
        // Fallback: if window doesn't load within 5 seconds, proceed anyway
        const fallbackTimer = setTimeout(() => {
            console.log('Fallback: Force setting window as loaded');
            setHasWindowLoaded(true);
        }, 5000);
        
        return () => {
            window.removeEventListener('load', onLoad);
            clearTimeout(fallbackTimer);
        };
    }, []);

    // LoadingScreen tells us its animation finished
    const handleLoadingComplete = () => {
        console.log('Loading animation completed');
        setIsLogoDone(true);
    };

    // When both the logo has shown and the window has fully loaded, reveal the app
    useEffect(() => {
        console.log('State check:', { isLogoDone, hasWindowLoaded });
        if (isLogoDone && hasWindowLoaded) {
            console.log('Both conditions met, showing app');
            setIsAppReady(true);
            const t = setTimeout(() => {
                console.log('Hiding loader');
                setIsLoaderFinished(true);
            }, 500); // increased timeout to match fade-out duration
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
            
            <div className={`transition-opacity duration-1000 will-change-opacity ${isAppReady ? 'opacity-100' : 'opacity-0'}`}>
                <Layout>
                    <HeroSection />
                    <SloganSection />
                    <GallerySection />
                    <ModelSection />
                    <MissionSection />
                    <AboutUsSection />
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
    </>
);

