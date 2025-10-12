import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white border-t-2 border-black dark:border-white">
        {/* Dot pattern background */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* 404 Number Badge */}
          <div className="inline-block mb-8 sm:mb-12 pt-16">
            <div className="relative">
              <div className="absolute top-0 right-0 bg-black dark:bg-white text-white dark:text-black font-mono text-xs sm:text-sm font-bold px-3 py-1 border-l-2 border-b-2 border-black dark:border-white">
                404
              </div>
              <div className="h-1 w-16 bg-black dark:bg-white mb-4" />
            </div>
          </div>
          
          {/* Main Error Heading */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.95] mb-8 sm:mb-12">
            PAGE
            <br />
            NOT
            <br />
            FOUND
          </h1>
          
          {/* Error Description */}
          <p className="font-body text-lg sm:text-xl md:text-2xl leading-relaxed mb-12 sm:mb-16 max-w-2xl mx-auto">
            The page you're looking for has been misplaced, deleted, or never existed in the first place.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link 
              to="/"
              className="group relative border-2 border-black dark:border-white px-8 py-4 font-bold uppercase tracking-wider transition-all duration-300 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
            >
              RETURN HOME
              <div className="h-1 w-8 bg-black dark:bg-white mt-2 transition-all duration-300 group-hover:w-16 mx-auto" />
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="group relative border-2 border-black dark:border-white px-8 py-4 font-bold uppercase tracking-wider transition-all duration-300 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
            >
              GO BACK
              <div className="h-1 w-8 bg-black dark:bg-white mt-2 transition-all duration-300 group-hover:w-16 mx-auto" />
            </button>
          </div>
          
          {/* Bottom Divider */}
          <div className="relative pt-16 mt-16 border-t-2 border-black dark:border-white">
            <div className="text-center">
              <span className="inline-block bg-white dark:bg-black px-6 font-mono text-xs uppercase tracking-widest -mt-3">
                ERROR CODE: 404
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;