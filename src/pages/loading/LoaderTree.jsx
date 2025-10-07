import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as d3 from 'd3';

/**
 * A full-screen loading animation that draws a node-based tree,
 * reveals a logo, and then fades out.
 * @param {object} props - The component props.
 * @param {function} props.onComplete - A callback function that fires when the logo animation is finished.
 * @param {boolean} props.isAppReady - A boolean that signals the loader to begin its fade-out animation.
 */
const LoaderTree = ({ onComplete, isAppReady }) => {
    // --- State and Refs ---
    // 1=Tree Drawing, 2=Logo Reveal
    const [loadingPhase, setLoadingPhase] = useState(1);
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

    // --- Configuration & Constants ---
    const WIND_STRENGTH = 10;
    const WIND_FREQUENCY = 0.0005;
    const NODE_RADIUS = 8;
    const SIGNAL_RADIUS = 5;
    const LINE_WIDTH = 2;
    const SIGNAL_SPEED = 0.008;
    const GLOW_BLUR = 15;
    const NODE_COLOR = '50, 200, 255';
    const ACTIVE_COLOR = '0, 255, 150';
    const SIGNAL_COLOR = '255, 255, 0';
    const LOGO_HOLD_TIME = 2500;

    // --- Fixed Tree Structure (40 Nodes) ---
    // Moved into a useCallback to satisfy exhaustive-deps, though they are constant.
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
        { id: 22, x: 0.20, y: 0.28, active: false, activatedAt: null }, { id: 23, x: 0.12, y: 0.20, active: false, activatedAt: null },
        { id: 24, x: 0.08, y: 0.15, active: false, activatedAt: null }, { id: 25, x: 0.35, y: 0.15, active: false, activatedAt: null },
        { id: 26, x: 0.30, y: 0.10, active: false, activatedAt: null }, { id: 27, x: 0.80, y: 0.28, active: false, activatedAt: null },
        { id: 28, x: 0.88, y: 0.20, active: false, activatedAt: null }, { id: 29, x: 0.92, y: 0.15, active: false, activatedAt: null },
        { id: 30, x: 0.65, y: 0.15, active: false, activatedAt: null }, { id: 31, x: 0.70, y: 0.10, active: false, activatedAt: null },
        { id: 32, x: 0.42, y: 0.28, active: false, activatedAt: null }, { id: 33, x: 0.58, y: 0.28, active: false, activatedAt: null },
        { id: 34, x: 0.47, y: 0.20, active: false, activatedAt: null }, { id: 35, x: 0.53, y: 0.20, active: false, activatedAt: null },
        { id: 36, x: 0.20, y: 0.15, active: false, activatedAt: null }, { id: 37, x: 0.80, y: 0.15, active: false, activatedAt: null },
        { id: 38, x: 0.10, y: 0.10, active: false, activatedAt: null }, { id: 39, x: 0.90, y: 0.10, active: false, activatedAt: null }
    ], []);

    const getFixedConnections = useCallback(() => [
        { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 3, to: 5 }, { from: 3, to: 6 },
        { from: 4, to: 7 }, { from: 7, to: 8 }, { from: 7, to: 9 }, { from: 8, to: 10 }, { from: 8, to: 11 }, { from: 5, to: 12 },
        { from: 12, to: 13 }, { from: 12, to: 14 }, { from: 13, to: 15 }, { from: 13, to: 16 }, { from: 6, to: 17 }, { from: 6, to: 18 },
        { from: 17, to: 19 }, { from: 18, to: 20 }, { from: 19, to: 21 }, { from: 20, to: 21 }, { from: 8, to: 22 }, { from: 22, to: 23 },
        { from: 23, to: 24 }, { from: 24, to: 38 }, { from: 9, to: 25 }, { from: 25, to: 26 }, { from: 22, to: 36 }, { from: 11, to: 25 },
        { from: 13, to: 27 }, { from: 27, to: 28 }, { from: 28, to: 29 }, { from: 29, to: 39 }, { from: 14, to: 30 }, { from: 30, to: 31 },
        { from: 27, to: 37 }, { from: 16, to: 30 }, { from: 17, to: 32 }, { from: 18, to: 33 }, { from: 32, to: 34 }, { from: 33, to: 35 },
        { from: 34, to: 21 }, { from: 35, to: 21 }, { from: 7, to: 19 }, { from: 12, to: 20 }, { from: 10, to: 23 }, { from: 15, to: 28 }
    ], []);


    // --- Core Logic Functions (Wrapped in useCallback) ---
    const getNodeById = useCallback((id) => animationState.current.nodes.find(n => n.id === id), []);
    const distance = useCallback((a, b) => Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2), []);

    const toCanvas = useCallback((norm, time) => {
        const canvas = canvasRef.current;
        if (!canvas) return { x: 0, y: 0 };
        const w = canvas.width;
        const h = canvas.height;
        
        const swayFactor = (1 - norm.y) * 0.75; 
        let windOffset = 0;
        if (time !== undefined) {
            const uniqueId = norm.x * 1000 + norm.y * 1000; 
            windOffset = Math.sin(uniqueId + time * WIND_FREQUENCY) * Math.cos(uniqueId * 0.5 + time * WIND_FREQUENCY * 0.7) * WIND_STRENGTH * swayFactor;
        }
        return { x: norm.x * w + windOffset, y: norm.y * h };
    }, []);

    const drawLine = useCallback((ctx, fromNode, toNode, opacity, time) => {
        const a = toCanvas(fromNode, time);
        const b = toCanvas(toNode, time);
        ctx.save();
        ctx.strokeStyle = `rgba(${NODE_COLOR}, ${opacity})`;
        ctx.lineWidth = LINE_WIDTH;
        ctx.lineCap = 'round';
        ctx.shadowColor = `rgba(${NODE_COLOR}, ${opacity * 0.5})`;
        ctx.shadowBlur = GLOW_BLUR * 0.5;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        const cx = (a.x + b.x) / 2;
        const cy = a.y - Math.abs(a.y - b.y) * 0.5;
        ctx.quadraticCurveTo(cx, cy, b.x, b.y);
        ctx.stroke();
        ctx.restore();
    }, [toCanvas]);

    const drawNode = useCallback((ctx, node, time) => {
        const pos = toCanvas(node, time);
        const isActive = node.active;
        let scale = 1;
        if (isActive && node.activatedAt !== null) {
            const elapsed = (time - node.activatedAt) / 1000;
            const pulseFactor = Math.sin(elapsed * Math.PI * 3) * 0.15 + 1.15;
            scale = Math.min(d3.easeSinInOut(pulseFactor), 1.25);
        }
        const radius = NODE_RADIUS * scale;
        const color = isActive ? ACTIVE_COLOR : NODE_COLOR;
        const opacity = isActive ? 1 : 0.4;
        
        ctx.save();
        ctx.fillStyle = `rgba(${color}, ${opacity})`;
        ctx.shadowColor = `rgba(${color}, ${opacity * 0.8})`;
        ctx.shadowBlur = GLOW_BLUR;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.fillStyle = isActive ? 'rgb(0, 0, 0)' : 'rgb(200, 200, 200)';
        ctx.font = `bold ${NODE_RADIUS - 2}px Inter, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.id, pos.x, pos.y);
        ctx.restore();
    }, [toCanvas]);

    const drawSignal = useCallback((ctx, signal, time) => {
        const from = getNodeById(signal.from);
        const to = getNodeById(signal.to);
        if (!from || !to) return;
        
        const t = d3.easeCubicInOut(signal.progress);
        const rawX = from.x + (to.x - from.x) * t;
        const rawY = from.y + (to.y - from.y) * t;
        const pos = toCanvas({ x: rawX, y: rawY }, time);
        
        ctx.save();
        ctx.fillStyle = `rgba(${SIGNAL_COLOR}, 0.8)`;
        ctx.shadowColor = `rgba(${SIGNAL_COLOR}, 0.9)`;
        ctx.shadowBlur = GLOW_BLUR * 1.5;
        ctx.globalCompositeOperation = 'lighter';
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, SIGNAL_RADIUS * 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        ctx.save();
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, SIGNAL_RADIUS * 0.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }, [getNodeById, toCanvas]);
    
    const createSignal = useCallback((fromId, toId) => {
        const { nodes, signals } = animationState.current;
        const fromNode = nodes.find(n => n.id === fromId);
        const toNode = nodes.find(n => n.id === toId);
        if (!fromNode || !toNode) return;
        signals.push({ from: fromId, to: toId, progress: 0, distance: distance(fromNode, toNode) });
    }, [distance]);

    // --- Effect for Animation Loop ---
    useEffect(() => {
        if (loadingPhase !== 1) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: true });
        
        animationState.current.nodes = JSON.parse(JSON.stringify(getFixedNodes()));
        animationState.current.connections = getFixedConnections();
        animationState.current.signals = [];
        animationState.current.animationStartTime = null;
        animationState.current.allNodesActivated = false;
        animationState.current.syncStart = null;
        animationState.current.windTime = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const updateSignals = (time) => {
            const state = animationState.current;
            for (let i = state.signals.length - 1; i >= 0; i--) {
                const signal = state.signals[i];
                signal.progress += SIGNAL_SPEED / signal.distance;
                if (signal.progress >= 1) {
                    const targetNode = getNodeById(signal.to);
                    if (targetNode && !targetNode.active) {
                        targetNode.active = true;
                        targetNode.activatedAt = time;
                        state.connections.forEach(conn => {
                            if (conn.from === signal.to) {
                                setTimeout(() => createSignal(conn.from, conn.to), 50);
                            }
                        });
                    }
                    state.signals.splice(i, 1);
                }
            }
        };

        animationState.current.timer = d3.timer((elapsed) => {
            const state = animationState.current;
            state.windTime = elapsed;
            if (!state.animationStartTime) {
                state.animationStartTime = elapsed;
                const root = getNodeById(0);
                if(root) {
                    root.active = true;
                    root.activatedAt = elapsed;
                    state.connections.filter(c => c.from === 0).forEach(c => createSignal(c.from, c.to));
                }
            }
            
            ctx.fillStyle = 'rgba(10, 10, 20, 1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            updateSignals(elapsed);
            state.connections.forEach(conn => {
                const from = getNodeById(conn.from);
                const to = getNodeById(conn.to);
                if (from && to) drawLine(ctx, from, to, (from.active && to.active) ? 0.6 : 0.1, elapsed);
            });
            state.nodes.forEach(node => drawNode(ctx, node, elapsed));
            state.signals.forEach(signal => drawSignal(ctx, signal, elapsed));
            
            if (!state.allNodesActivated && state.nodes.every(n => n.active)) {
                state.allNodesActivated = true;
                state.syncStart = elapsed;
            }
            
            if (state.allNodesActivated && state.syncStart && (elapsed - state.syncStart) > 1500) {
                state.timer.stop();
                setTimeout(() => setLoadingPhase(2), 250);
            }
        });

        resize();
        window.addEventListener('resize', resize);

        // FIX: Capture the timer in a variable for the cleanup function.
        const timer = animationState.current.timer;
        return () => {
            window.removeEventListener('resize', resize);
            if (timer) {
                timer.stop();
            }
        };
    }, [loadingPhase, createSignal, drawLine, drawNode, drawSignal, getFixedConnections, getFixedNodes, getNodeById]);

    // --- Effect for Logo Phase Transition ---
    useEffect(() => {
        if (loadingPhase === 2) {
            const logoTimer = setTimeout(() => {
                onComplete?.(); // Signal to parent that the animation is done
            }, LOGO_HOLD_TIME);
            return () => clearTimeout(logoTimer);
        }
    }, [loadingPhase, onComplete]);

    // --- Render Logic ---
    return (
        <div className={`fixed inset-0 z-[100] transition-opacity duration-1000 ${isAppReady ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div 
                className={`absolute inset-0 transition-opacity duration-500 ${loadingPhase === 1 ? 'opacity-100' : 'opacity-0'}`}
                style={{ zIndex: 2, backgroundColor: '#0a0a14' }}
            >
                <canvas ref={canvasRef} className="w-full h-full"></canvas>
                <div className="absolute top-4 right-4 text-xs text-gray-400">Loading Network...</div>
            </div>

            <div 
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${loadingPhase === 2 ? 'opacity-100' : 'opacity-0'}`}
                style={{ zIndex: 1, backgroundColor: '#0a0a14' }}
            >
                <div className="flex flex-col items-center justify-center p-8">
                    <h1 className="text-8xl sm:text-[10rem] font-black tracking-widest text-indigo-400 gni-glow">GNI</h1>
                    <h2 
                        className="text-lg sm:text-2xl font-light text-slate-300 mt-6 text-center max-w-4xl animate-fadeInUp"
                        style={{ animationDelay: '0.5s', animationFillMode: 'forwards', opacity: 0 }}
                    >
                        Global Nexus Institute — Foresight for a Connected World
                    </h2>
                </div>
            </div>

            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
                    body, html { font-family: 'Inter', sans-serif; }
                    @keyframes logoBeat { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.05); opacity: 0.9; } }
                    .gni-glow {
                        text-shadow: 0 0 10px rgba(129, 140, 248, 0.9), 0 0 30px rgba(129, 140, 248, 0.7), 0 0 50px rgba(129, 140, 248, 0.5);
                        animation: logoBeat 2.5s ease-in-out infinite;
                    }
                    @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
                    .animate-fadeInUp { animation-name: fadeInUp; animation-duration: 1s; animation-timing-function: ease-out; }
                `}
            </style>
        </div>
    );
};

export default LoaderTree;