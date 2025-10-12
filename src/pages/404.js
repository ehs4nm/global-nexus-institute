import React from 'react';
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
          <div className="inline-block mb-8 sm:mb-12">
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
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Page not found
          </p>
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 border ransparent text-base font-medium rounded-md text-white bg-accent-500 hover:bg-accent-600"
          >
            Go back home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;