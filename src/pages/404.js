import React from 'react';
import { Layout } from '../components/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            404
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Page not found
          </p>
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-accent-500 hover:bg-accent-600"
          >
            Go back home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;