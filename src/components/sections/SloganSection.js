import React from 'react';

export const SloganSection = () => {
  return (
    <section id="slogan" className="brutalist-section text-black dark:text-white">
      {/* Dot pattern background */}
      <div className="brutalist-bg-dots absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
      
      <div className="brutalist-container relative">
        {/* Section Header */}
        <div className="inline-block mb-6">
          <div className="brutalist-divider-bold mb-4" />
          <span className="brutalist-label">How We Work</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="brutalist-heading">
              HOW WE WORK
            </h2>
            
            {/* Decorative border box */}
            <div className="mt-8 brutalist-border-box p-6">
              <div className="brutalist-divider-bold mb-4" />
              <p className="brutalist-label">
                Strategy • Policy • Delivery
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <h3 className="brutalist-card-title md:text-5xl mb-8">
              Here to turn bold ideas into reality
            </h3>
            
            <div className="space-y-6">
              <p className="brutalist-body">
                We help governments and leaders get things done. We do it by advising on strategy, policy and delivery, unlocking the power of technology across all three.
              </p>
              
              <p className="brutalist-body">
                As a not-for-profit, we can work in the most challenging contexts and on the most transformative projects because our focus is on leaders rather than profits.
              </p>
              
              <p className="brutalist-body">
                And as a non-partisan organisation, we can bring the best of our expertise to leaders who want to translate their ambition into meaningful action for their people.
              </p>
              
              {/* Decorative line */}
              <div className="pt-4">
                <div className="brutalist-divider-bold w-24" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Divider */}
        <div className="relative pt-8 mt-16 brutalist-border-box border-t-2 border-b-0 border-x-0">
          <div className="text-center">
            <span className="inline-block bg-white dark:bg-black px-6 brutalist-label -mt-3">
              Focused on Impact, Not Profits
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
