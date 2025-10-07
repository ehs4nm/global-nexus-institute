import React from 'react';

export const SloganSection = () => {
  return (
    <section id="slogan" className="h-screen relative flex items-center justify-center overflow-hidden border-t border-black/5 dark:border-white/10">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline poster="assets/1.jpg">
        <source src="assets/video-2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/30 dark:bg-black/30"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-end gap-3 mb-6">
            <div className="h-32 w-32 rounded-3xl image-cover">
                <img src="assets/favicon_io/android-chrome-512x512.png" alt="Global Nexus Institute" className="rounded-3xl" />
            </div>
            <span className="font-display text-5xl font-extrabold text-white dark:text-black tracking-wide"><strong className="text-black dark:text-white">G</strong>lobal <strong className="text-black dark:text-white">N</strong>exus <strong className="text-black dark:text-white">I</strong>nstitute</span>
          </div>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight dark:text-white">
          Foresight for a Connected World
        </h2>
      </div>
    </section>
  );
};