import React from 'react';

export const ContactSection = () => {
  return (
    <section 
      id="contact" 
      className="min-h-[60vh] py-20 sm:py-24 md:py-32 dark:bg-black text-black dark:text-white flex items-center relative"
    >
      {/* Subtle background pattern */}
      <div className="brutalist-bg-dots absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="space-y-6">
            <h2 className="brutalist-heading">
              Join the Nexus
            </h2>
            
            <div className="brutalist-divider-bold mx-auto"></div>
          </div>

          <p className="mt-8 brutalist-subheading max-w-3xl mx-auto text-black">
            Shape the future of global foresight. Partner with GNI to build resilient, informed, and equitable systems.
          </p>
        </div>

        {/* Contact Form */}
        <form 
          className="space-y-6" 
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Input Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-6 py-4 brutalist-border-box bg-white dark:bg-black focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white text-base font-mono"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-6 py-4 brutalist-border-box bg-white dark:bg-black focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white text-base font-mono"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              name="message"
              placeholder="Message (optional)"
              rows="4"
              className="w-full px-6 py-4 brutalist-border-box bg-white dark:bg-black focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white text-base font-mono resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group relative w-full sm:w-auto px-12 py-4 brutalist-card-inverted font-bold text-base sm:text-lg transition-all duration-300 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white overflow-hidden"
          >
            <span className="relative z-10 brutalist-label tracking-wider">
              CONTACT OUR TEAM →
            </span>
            
            {/* Hover effect */}
            <div className="absolute inset-0 bg-white dark:bg-black transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </form>

        {/* Bottom decorative element */}
        <div className="mt-16 sm:mt-20 flex items-center gap-4">
          <div className="brutalist-divider flex-1"></div>
          <p className="brutalist-label brutalist-arrow">
            Let’s connect
          </p>
          <div className="brutalist-divider flex-1"></div>
        </div>
      </div>
    </section>
  );
};