import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as d3 from 'd3';
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

// --- LoaderTree Component ---
// I've moved this component into the same file to resolve the import error.

/**
 * A full-screen loading animation.
 * @param {object} props - The component props.
 * @param {function} props.onComplete - A callback function that fires when the logo animation is finished.
 * @param {boolean} props.isAppReady - A boolean that signals the loader to begin its fade-out animation.
 * @param {number} props.startPhase - The phase to start from (1=Tree, 2=Logo). Defaults to 1.
 */
const LoaderTree = ({ onComplete, isAppReady, startPhase = 2 }) => {
    const [loadingPhase, setLoadingPhase] = useState(startPhase);
    const canvasRef = useRef(null);
    const animationState = useRef({
        nodes: [],
        connections: [],
        signals: [],
        timer: null,
        windTime: 0,
        animationStartTime: null,
        allNodesActivated: false,
        syncStart: null,
    });

    const LOGO_HOLD_TIME = 700;

    const getFixedNodes = useCallback(() => [
        { id: 0, x: 0.50, y: 0.90, active: false, activatedAt: null }, { id: 1, x: 0.50, y: 0.78, active: false, activatedAt: null },
        { id: 2, x: 0.50, y: 0.66, active: false, activatedAt: null }, { id: 3, x: 0.50, y: 0.54, active: false, activatedAt: null },
        { id: 4, x: 0.40, y: 0.48, active: false, activatedAt: null }, { id: 5, x: 0.60, y: 0.48, active: false, activatedAt: null },
        { id: 6, x: 0.50, y: 0.42, active: false, activatedAt: null }, { id: 7, x: 0.32, y: 0.42, active: false, activatedAt: null },
        { id: 8, x: 0.25, y: 0.38, active: false, activatedAt: null }, { id: 9, x: 0.38, y: 0.35, active: false, activatedAt: null },
        { id: 10, x: 0.15, y: 0.30, active: false, activatedAt: null }, { id: 11, x: 0.28, y: 0.25, active: false, activatedAt: null },
        { id: 12, x: 0.68, y: 0.42, active: false, activatedAt: null }, { id: 13, x: 0.75, y: 0.38, active: false, activatedAt: null },
        { id: 14, x: 0.62, y: 0.35, active: false, activatedAt: null }, { id: 15, x: 0.85, y: 0.30, active: false, activatedAt: null },
        { id: 16, x: 0.72, y: 0.25, active: false, activatedAt: null }, { id: 17, x: 0.45, y: 0.33, active: false, activatedAt: null },
        { id: 18, x: 0.55, y: 0.33, active: false, activatedAt: null }, { id: 19, x: 0.40, y: 0.22, active: false, activatedAt: null },
        { id: 20, x: 0.60, y: 0.22, active: false, activatedAt: null }, { id: 21, x: 0.50, y: 0.10, active: false, activatedAt: null },
    ], []);

    const getFixedConnections = useCallback(() => [
        { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 3, to: 5 }, { from: 3, to: 6 },
        { from: 4, to: 7 }, { from: 7, to: 8 }, { from: 7, to: 9 }, { from: 8, to: 10 }, { from: 8, to: 11 }, { from: 5, to: 12 },
        { from: 12, to: 13 }, { from: 12, to: 14 }, { from: 13, to: 15 }, { from: 13, to: 16 }, { from: 6, to: 17 }, { from: 6, to: 18 },
        { from: 17, to: 19 }, { from: 18, to: 20 }, { from: 19, to: 21 }, { from: 20, to: 21 },
    ], []);

    useEffect(() => {
        if (loadingPhase !== 1) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        animationState.current.nodes = JSON.parse(JSON.stringify(getFixedNodes()));
        animationState.current.connections = getFixedConnections();
        
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);
        
        const timer = d3.timer(() => { /* animation logic omitted for brevity as it's being skipped */ });
        
        setTimeout(() => {
            timer.stop();
            setLoadingPhase(2);
        }, 100);

        return () => {
            window.removeEventListener('resize', resize);
            timer.stop();
        };
    }, [loadingPhase, getFixedConnections, getFixedNodes]);

    useEffect(() => {
        if (loadingPhase === 2) {
            const logoTimer = setTimeout(() => {
                onComplete?.();
            }, LOGO_HOLD_TIME);
            return () => clearTimeout(logoTimer);
        }
    }, [loadingPhase, onComplete]);

    return (
        <div className={`fixed inset-0 z-[100] transition-opacity duration-1000 ${isAppReady ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className={`absolute inset-0 transition-opacity duration-500 ${loadingPhase === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <canvas ref={canvasRef} />
            </div>
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${loadingPhase === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{ backgroundColor: '#0a0a14' }}>
                <div className="text-center p-8">
                    <h1 className="text-8xl sm:text-[10rem] font-black tracking-widest text-indigo-400 gni-glow">GNI</h1>
                    <h2 className="text-lg sm:text-2xl font-light text-slate-300 mt-6 animate-fadeInUp" style={{ animationDelay: '0.5s', animationFillMode: 'forwards', opacity: 0 }}>
                        Global Nexus Institute — Foresight for a Connected World
                    </h2>
                </div>
            </div>
            <style>{`
                @keyframes logoBeat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
                .gni-glow { text-shadow: 0 0 10px #818cf8, 0 0 30px #818cf8, 0 0 50px #818cf8; animation: logoBeat 2.5s ease-in-out infinite; }
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .animate-fadeInUp { animation: fadeInUp 1s ease-out; }
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
            const t = setTimeout(() => setIsLoaderFinished(true), 1000); // match fade-out duration
            return () => clearTimeout(t);
        }
    }, [isLogoDone, hasWindowLoaded]);

    return (
        <>
            {!isLoaderFinished && (
                <LoaderTree 
                    onComplete={handleLoadingComplete} 
                    isAppReady={isAppReady}
                    startPhase={2} // This skips the tree animation
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
    <meta
      name="description"
      content="GNI connects energy, geopolitics, and health into one field of actionable intelligence."
    />
  </>
);

