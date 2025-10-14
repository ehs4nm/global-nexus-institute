import React from 'react';
import { useContent } from '../../hooks/useContent';

export const SloganSection = () => {
  const { content, isLoading } = useContent();
  
  if (isLoading || !content || !content.slogan) {
    return (
      <section id="slogan" className="refined-section">
        <div className="refined-container relative flex items-center justify-center min-h-[50vh]">
          <div className="refined-label">Loading slogan data...</div>
        </div>
      </section>
    );
  }
  
  const slogan = content.slogan;
  
  return (
    <section id="slogan" className="brutalist-section text-black dark:text-white flex md:h-[60vh]">
      {/* Dot pattern background */}
      <div className="brutalist-bg-dots absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
      
      {/* Add flex and centering properties to the container */}
      <div className="brutalist-container relative flex items-center w-full">
        <div className="w-full">
          {/* Section Header */}
          <div className="inline-block mb-6">
            <div className="brutalist-divider-bold mb-4" />
            <span className="brutalist-label text-[1.5rem]">{slogan.upTitle}</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="brutalist-heading text-[3rem] md:text-[3rem] lg:text-[4rem]">
                {slogan.title}
              </h2>
              
              {/* Decorative border box */}
              <div className="md:mt-8 brutalist-border-box p-6">
                <div className="brutalist-divider-bold  md:mb-4" />
                <p className="brutalist-label text-xs md:text-base">
                  {slogan.inTheBox}
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <h3 className="brutalist-card-title md:text-5xl mb-8">
                {slogan.subtitle}
              </h3>
              
              <div className="space-y-6">
                <p className="brutalist-body">
                  {slogan.body}
                </p>
                
                <p className="brutalist-body">
                  {slogan.body2}
                </p>
                
                <p className="brutalist-body">
                  {slogan.body3}
                </p>
                
                {/* Decorative line */}
                <div className="pt-4">
                  <div className="brutalist-divider-bold w-24" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Divider */}
          <div className="relative pt-8 mt-16 brutalist-border-box border-t-2 border-b-0 border-x-0 border-white dark:border-black">
            <div className="text-center">
              <span className="inline-block bg-black dark:bg-white px-6 brutalist-label -mt-3">
                {slogan.bottomMessage}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};