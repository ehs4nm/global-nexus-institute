import React from 'react';
import { useScrollMode } from '../../../hooks/useScrollMode';

const ScrollEditor = () => {
  const { isFullscreenMode, setIsFullscreenMode } = useScrollMode();

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-900">Scroll Settings</h2>
        <p className="text-gray-600 mt-1">Configure how users navigate through the website</p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">About Fullscreen Scroll Mode</h3>
            <div className="mt-2 text-sm text-blue-700">
              <p>When enabled, the website will scroll page by page, with each section taking up the full screen. Users can navigate using:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Mouse wheel or trackpad scrolling</li>
                <li>Arrow keys (↑/↓)</li>
                <li>Navigation dots on the side</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fullscreen Scroll Mode</h3>
            <p className="text-gray-600 text-sm">
              Enable page-by-page fullscreen scrolling instead of continuous scroll
            </p>
          </div>
          
          <div className="ml-6 flex-shrink-0">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isFullscreenMode}
                onChange={(e) => setIsFullscreenMode(e.target.checked)}
                aria-label="Toggle fullscreen scroll mode"
              />
              <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">Note</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>Changes to scroll mode take effect immediately. The setting is saved to browser storage.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Normal Scroll</h4>
          <p className="text-sm text-gray-600">
            Traditional continuous scrolling where users can scroll freely through all sections.
          </p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Fullscreen Scroll</h4>
          <p className="text-sm text-gray-600">
            Page-by-page navigation where each section fills the entire viewport with smooth transitions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollEditor;