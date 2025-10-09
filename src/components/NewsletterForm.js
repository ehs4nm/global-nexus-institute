import React from 'react';

export const NewsletterForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="px-6 sm:px-8 pb-8 space-y-6 max-w-2xl mx-auto">
      {/* Top label */}
      <div className="inline-block mb-4">
        <div className="h-1 w-16 bg-black dark:bg-white mb-3" />
        <span className="font-mono text-xs uppercase tracking-widest">Newsletter</span>
      </div>
      
      <h3 id="newsletter-title" className="font-display text-3xl sm:text-4xl font-black tracking-tight leading-tight">
        Be the first to know what we're doing - and how you can get more involved.
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block font-mono text-xs uppercase tracking-widest mb-2">First name</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            className="w-full border-2 border-black dark:border-white bg-white dark:bg-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2" 
            placeholder="Jane" 
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block font-mono text-xs uppercase tracking-widest mb-2">Last name</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            className="w-full border-2 border-black dark:border-white bg-white dark:bg-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2" 
            placeholder="Doe" 
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest mb-2">Email address</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          className="w-full border-2 border-black dark:border-white bg-white dark:bg-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2" 
          placeholder="you@example.com" 
        />
      </div>
      
      <div>
        <label id="interests-label" className="block font-mono text-xs uppercase tracking-widest mb-3">Interests</label>
        <div role="group" id="interests" aria-labelledby="interests-label" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="inline-flex items-center gap-3 border-2 border-black dark:border-white p-3 cursor-pointer hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all">
            <input type="checkbox" name="interests" value="energy" className="w-4 h-4 border-2 border-black dark:border-white" />
            <span className="font-mono text-xs uppercase tracking-widest">Energy</span>
          </label>
          <label className="inline-flex items-center gap-3 border-2 border-black dark:border-white p-3 cursor-pointer hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all">
            <input type="checkbox" name="interests" value="geopolitics" className="w-4 h-4 border-2 border-black dark:border-white" />
            <span className="font-mono text-xs uppercase tracking-widest">Geopolitics</span>
          </label>
          <label className="inline-flex items-center gap-3 border-2 border-black dark:border-white p-3 cursor-pointer hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all">
            <input type="checkbox" name="interests" value="health" className="w-4 h-4 border-2 border-black dark:border-white" />
            <span className="font-mono text-xs uppercase tracking-widest">Health</span>
          </label>
          <label className="inline-flex items-center gap-3 border-2 border-black dark:border-white p-3 cursor-pointer hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all">
            <input type="checkbox" name="interests" value="events" className="w-4 h-4 border-2 border-black dark:border-white" />
            <span className="font-mono text-xs uppercase tracking-widest">Events</span>
          </label>
        </div>
      </div>
      
      <button 
        type="submit" 
        className="w-full inline-flex items-center justify-center px-6 py-4 border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-all duration-300"
      >
        Subscribe Now →
      </button>
      
      <p className="font-mono text-xs uppercase tracking-widest text-center opacity-60">
        We'll send occasional updates. Unsubscribe anytime.
      </p>
    </form>
  );
};
