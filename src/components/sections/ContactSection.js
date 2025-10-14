import React from 'react';
import { useContent } from '../../hooks/useContent';

export const ContactSection = () => {
  const { content } = useContent();
  
  // Return null if content is not loaded yet
  if (!content || !content.contactUs) {
    return null;
  }

  const contactUsContent = content.contactUs;
  
  return (
    <section 
      id="contact" 
      className="brutalist-section min-h-[60vh] py-20 sm:py-24 md:py-32 dark:bg-black text-black dark:text-white flex items-center relative"
    >
      {/* Subtle background pattern */}
      <div className="brutalist-bg-dots absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="space-y-6">
            <h2 className="brutalist-heading">
            {contactUsContent.slogan}
            </h2>
            
            <div className="brutalist-divider-bold mx-auto"></div>
          </div>

          <p className="mt-8 brutalist-subheading max-w-3xl mx-auto ">
            {contactUsContent.subtitle}
          </p>

          <p className="mt-4 brutalist-subheading text-3xl max-w-3xl mx-auto ">
            {contactUsContent.contactEmail}
          </p>
        </div>

        {/* Contact Form */}
        <form 
          name="contact-form"
          method="POST"
          data-netlify="true"
          className="space-y-6" 
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
            className="group relative w-full sm:w-auto px-12 py-4 font-bold text-base sm:text-lg transition-all duration-300 overflow-hidden bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            <span className="relative z-10 brutalist-label tracking-wider">
            {contactUsContent.btnTitle}
            </span>
            
            <div className="absolute inset-0 bg-black dark:bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </form>
      </div>
    </section>
  );
};