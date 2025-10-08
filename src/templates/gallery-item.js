import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/Layout';

const GalleryItemTemplate = ({ pageContext }) => {
  const { item } = pageContext;
  const { pageContent } = item;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-[146px]">
        <img 
          src={pageContent.heroImage} 
          alt={pageContent.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold leading-tight mb-4">
            {pageContent.title}
          </h1>
          <p className="text-xl sm:text-2xl font-light text-white/90">
            {pageContent.subtitle}
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {pageContent.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {section.heading}
                </h2>
                <p className="text-lg text-gray-700 dark:text-white/80 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-16 pt-12 border-t border-gray-200 dark:border-white/10">
            <Link 
              to="/#gallery"
              className="inline-flex items-center gap-2 text-accent-600 dark:text-accent-400 hover:underline underline-offset-4 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Gallery
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryItemTemplate;

export const Head = ({ pageContext }) => (
  <>
    <title>{pageContext.item.pageContent.title} | GNI</title>
    <meta name="description" content={pageContext.item.pageContent.subtitle} />
  </>
);
