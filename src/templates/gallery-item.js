import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';

const GalleryItemTemplate = ({ pageContext }) => {
  const { item } = pageContext;
  const { pageContent } = item;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-[146px]">
        <img
          src={pageContent.heroImage}
          alt={pageContent.title}
          className="absolute inset-0 w-full h-full object-cover scale-105 blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white"
        >
          <h1 className="font-display text-5xl sm:text-7xl font-extrabold leading-tight mb-4 tracking-tight">
            {pageContent.title}
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto">
            {pageContent.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-neutral-950 text-neutral-200">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {pageContent.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {section.heading}
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl">
                {section.content}
              </p>
            </motion.div>
          ))}

          {/* Back Button */}
          <div className="pt-12 border-t border-white/10 flex justify-center">
            <Link
              to="/#gallery"
              className="inline-flex items-center gap-2 px-5 py-3 text-accent-400 border border-accent-400/20 rounded-full hover:bg-accent-400/10 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
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
