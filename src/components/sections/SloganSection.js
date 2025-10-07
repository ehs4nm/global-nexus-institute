import React from 'react';

// Animation variants remain the same

export const SloganSection = () => {
  return (
    <section id="slogan" className="h-[50vh] relative flex items-center justify-center overflow-hidden border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full grid grid-cols-12 gap-8 py-16 lg:flex-row lg:py-20">
        <div className="col-span-4 lg:col-span-5">
          <p className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">HOW WE WORK</p>
        </div>
        <div className="col-span-4 lg:col-span-7 [&amp;&gt;:first-child]:mt-0">
          <h3 className="mt-6 text-3xl font-extrabold leading-tight text-gray-700 dark:text-white/80">Here to turn bold ideas into reality</h3>
          <p className="article-columns body-large relative mt-10 whitespace-pre-wrap">
            <span style={{opacity: 1, transition: 'opacity 0.6s ease-in-out'}}>
              We help governments and leaders get things done. We do it by advising on strategy, policy and delivery, unlocking the power of technology across all three. As a not-for-profit, we can work in the most challenging contexts and on the most transformative projects because our focus is on leaders rather than profits. And as a non-partisan organisation, we can bring the best of our expertise to leaders who want to translate their ambition into meaningful action for their people.&nbsp;
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};