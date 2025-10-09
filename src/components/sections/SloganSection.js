import React from 'react';

// Animation variants remain the same

export const SloganSection = () => {
  return (
    <section id="slogan" className="min-h-[40vh] sm:h-[50vh] py-12 sm:py-16 relative flex items-center justify-center overflow-hidden border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-8 sm:pt-16 lg:pt-20">
        <div className="lg:col-span-5">
          <p className="font-display text-xl font-extrabold leading-tight">HOW WE WORK</p>
        </div>
        <div className="lg:col-span-7 [&>:first-child]:mt-0">
          <h3 className="mt-4 lg:mt-6 text-xl sm:text-2xl md:text-4xl font-extrabold leading-tight text-gray-700 dark:text-white/80">Here to turn bold ideas into reality</h3>
          <p className="article-columns body-large relative mt-6 sm:mt-8 lg:mt-10 whitespace-pre-wrap text-sm sm:text-base leading-relaxed">
            <span style={{opacity: 1, transition: 'opacity 0.6s ease-in-out'}}>
              We help governments and leaders get things done. We do it by advising on strategy, policy and delivery, unlocking the power of technology across all three. As a not-for-profit, we can work in the most challenging contexts and on the most transformative projects because our focus is on leaders rather than profits. And as a non-partisan organisation, we can bring the best of our expertise to leaders who want to translate their ambition into meaningful action for their people.&nbsp;
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};