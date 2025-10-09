import React from 'react';

export const SloganSection = () => {
  return (
    <section id="slogan" className="relative min-h-screen py-16 sm:py-20 md:py-24 bg-white dark:bg-black text-black dark:text-white border-t-2 border-black dark:border-white">
      {/* Dot pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="inline-block mb-6">
          <div className="h-1 w-16 bg-black dark:bg-white mb-4" />
          <span className="font-mono text-xs uppercase tracking-widest">How We Work</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95]">
              HOW WE WORK
            </h2>
            
            {/* Decorative border box */}
            <div className="mt-8 border-2 border-black dark:border-white p-6">
              <div className="h-1 w-12 bg-black dark:bg-white mb-4" />
              <p className="font-mono text-xs uppercase tracking-widest">
                Strategy • Policy • Delivery
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8">
              Here to turn bold ideas into reality
            </h3>
            
            <div className="space-y-6">
              <p className="text-base sm:text-lg leading-relaxed">
                We help governments and leaders get things done. We do it by advising on strategy, policy and delivery, unlocking the power of technology across all three.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed">
                As a not-for-profit, we can work in the most challenging contexts and on the most transformative projects because our focus is on leaders rather than profits.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed">
                And as a non-partisan organisation, we can bring the best of our expertise to leaders who want to translate their ambition into meaningful action for their people.
              </p>
              
              {/* Decorative line */}
              <div className="pt-4">
                <div className="h-1 w-24 bg-black dark:bg-white" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Divider */}
        <div className="relative pt-8 mt-16 border-t-2 border-black dark:border-white">
          <div className="text-center">
            <span className="inline-block bg-white dark:bg-black px-6 font-mono text-xs uppercase tracking-widest -mt-3">
              Focused on Impact, Not Profits
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
