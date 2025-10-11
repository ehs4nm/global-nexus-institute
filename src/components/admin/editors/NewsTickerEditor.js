import React from 'react';
import { ContentProvider } from '../../../contexts/ContentContext';
import { NewsTickerAdmin } from '../NewsTickerAdmin';

const NewsTickerEditor = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">News Ticker</h2>
          <p className="text-gray-600 mt-1">
            Manage the scrolling news ticker that appears on the homepage
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-semibold text-sm">ℹ️</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-800">About News Ticker</h3>
            <p className="text-sm text-gray-600 mt-1">
              The news ticker is a scrolling text component that takes up 25% of the screen height 
              and displays important updates and announcements. It uses high contrast typography 
              and smooth animations for maximum visibility and impact.
            </p>
          </div>
        </div>
      </div>

      {/* Wrap the admin component in ContentProvider since this admin system might not have it */}
      <ContentProvider>
        <NewsTickerAdmin />
      </ContentProvider>
    </div>
  );
};

export default NewsTickerEditor;