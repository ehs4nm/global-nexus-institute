import React from 'react';

export const ContactSection = () => {
  return (
    <section 
      id="contact" 
      className="min-h-[60vh] py-20 sm:py-24 md:py-32  dark:bg-black text-black dark:text-white flex items-center"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="space-y-6">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Join the Nexus.
            </h2>
            
            <div className="w-16 h-1 bg-black dark:bg-white mx-auto"></div>
          </div>

          <p className="mt-8 text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
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
                className="w-full px-6 py-4 border-2 border-black/20 dark:border-white/20 bg-white dark:bg-black focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white text-base font-mono"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-6 py-4 border-2 border-black/20 dark:border-white/20 bg-white dark:bg-black focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white text-base font-mono"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              name="message"
              placeholder="Message (optional)"
              rows="4"
              className="w-full px-6 py-4 border-2 border-black/20 dark:border-white/20 bg-white dark:bg-black focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white text-base font-mono resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group relative w-full sm:w-auto px-12 py-4 border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-bold text-base sm:text-lg transition-all duration-300 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white overflow-hidden"
          >
            <span className="relative z-10 font-mono tracking-wider">
              CONTACT OUR TEAM →
            </span>
            
            {/* Hover effect */}
            <div className="absolute inset-0 bg-white dark:bg-black transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </form>

        {/* Bottom decorative element */}
        <div className="mt-16 sm:mt-20 flex items-center gap-4">
          <div className="h-px flex-1 bg-black/10 dark:bg-white/10"></div>
          <p className="text-sm font-mono text-gray-500 dark:text-gray-400 tracking-wide">
            → Let's connect
          </p>
          <div className="h-px flex-1 bg-black/10 dark:bg-white/10"></div>
        </div>
      </div>
    </section>
  );
};