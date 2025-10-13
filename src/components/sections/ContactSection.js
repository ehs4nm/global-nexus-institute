import React, { useState } from 'react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status.message) setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    if (!formData.name || !formData.email) {
      setStatus({ type: 'error', message: 'Name and email are required' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/.netlify/functions/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! We\'ll be in touch soon.' 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ 
          type: 'error', 
          message: data.error || 'Something went wrong. Please try again.' 
        });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="brutalist-section-inverted border-0 min-h-[60vh] py-20 sm:py-24 md:py-32 text-black dark:text-white flex items-center relative"
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

          <p className="mt-8 brutalist-subheading max-w-3xl mx-auto">
            Shape the future of global foresight. Partner with GNI to build resilient, informed, and equitable systems.
          </p>
        </div>


        {/* Contact Form */}
        <form 
          className="space-y-6" 
          // onSubmit={handleSubmit}
          netlify
        >
          {/* Input Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Name"
                // value={formData.name}
                // onChange={handleChange}
                // disabled={isSubmitting}
                required
                className="w-full px-6 py-4 brutalist-border-box focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white text-base font-mono disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                // value={formData.email}
                // onChange={handleChange}
                // disabled={isSubmitting}
                required
                className="w-full px-6 py-4 brutalist-border-box focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white text-base font-mono disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              name="message"
              placeholder="Message (optional)"
              rows="4"
              // value={formData.message}
              // onChange={handleChange}
              // disabled={isSubmitting}
              // maxLength={1000}
              className="w-full px-6 py-4 brutalist-border-box focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white text-base font-mono resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            // disabled={isSubmitting}
            className="group relative w-full sm:w-auto px-12 py-4 brutalist-card font-bold text-base sm:text-lg transition-all duration-300 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10 brutalist-label tracking-wider text-black dark:text-white">
              {/* {isSubmitting ? 'SENDING...' : 'CONTACT OUR TEAM →'} */}
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