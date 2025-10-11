import React, { useState, useEffect } from 'react';
import { useContent } from '../../contexts/ContentContext';

const NewsTickerAdmin = () => {
  const { 
    newsTickerContent, 
    updateNewsTickerContent, 
    resetNewsTickerContent,
    isLoading, 
    error 
  } = useContent();

  const [formData, setFormData] = useState({
    text: '',
    speed: 60,
    enabled: true
  });
  
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const [previewMode, setPreviewMode] = useState(false);

  // Load existing content into form
  useEffect(() => {
    setFormData({
      text: newsTickerContent.text || '',
      speed: newsTickerContent.speed || 60,
      enabled: newsTickerContent.enabled ?? true
    });
  }, [newsTickerContent]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.text.trim()) {
      setMessage('Please enter some text for the news ticker.');
      setMessageType('error');
      return;
    }

    try {
      const result = await updateNewsTickerContent(formData);
      
      if (result.success) {
        setMessage(result.message);
        setMessageType('success');
      } else {
        setMessage(result.message);
        setMessageType('error');
      }
    } catch (error) {
      setMessage('An error occurred while updating the content.');
      setMessageType('error');
    }

    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 3000);
  };

  const handleReset = async () => {
    if (window.confirm('Are you sure you want to reset the news ticker to default content? This cannot be undone.')) {
      const result = resetNewsTickerContent();
      setMessage(result.message);
      setMessageType('success');
      
      setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 3000);
    }
  };

  const getCharacterCount = () => formData.text.length;
  const getWordCount = () => formData.text.trim().split(/\s+/).filter(word => word.length > 0).length;

  return (
    <div className="p-6 bg-neutral-900 text-white rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">News Ticker Management</h2>
        <button
          onClick={() => setPreviewMode(!previewMode)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors"
        >
          {previewMode ? 'Edit Mode' : 'Preview Mode'}
        </button>
      </div>

      {/* Status Messages */}
      {message && (
        <div className={`p-4 rounded mb-4 ${
          messageType === 'success' 
            ? 'bg-green-900 border border-green-700 text-green-100' 
            : 'bg-red-900 border border-red-700 text-red-100'
        }`}>
          {message}
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-900 border border-red-700 text-red-100 rounded mb-4">
          {error}
        </div>
      )}

      {previewMode ? (
        /* Preview Mode */
        <div className="space-y-4">
          <div className="border border-neutral-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Live Preview</h3>
            <div 
              className="bg-black border border-neutral-800 rounded overflow-hidden relative"
              style={{ height: '150px' }}
            >
              <div className="h-full flex items-center relative overflow-hidden">
                <div 
                  className="absolute whitespace-nowrap animate-scroll-left"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    letterSpacing: '0.05em',
                    color: '#ffffff',
                    fontFamily: 'monospace',
                    animation: `scroll-left ${Math.max(10, formData.text.length / 5)}s linear infinite`
                  }}
                >
                  {formData.text || 'No text to display'}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-neutral-800 p-4 rounded">
              <h4 className="font-semibold mb-2">Settings</h4>
              <p><strong>Status:</strong> {formData.enabled ? 'Enabled' : 'Disabled'}</p>
              <p><strong>Speed:</strong> {formData.speed} px/s</p>
              <p><strong>Characters:</strong> {getCharacterCount()}</p>
              <p><strong>Words:</strong> {getWordCount()}</p>
            </div>
            
            <div className="bg-neutral-800 p-4 rounded">
              <h4 className="font-semibold mb-2">Info</h4>
              <p><strong>Last Updated:</strong></p>
              <p className="text-sm text-neutral-400">
                {newsTickerContent.lastUpdated 
                  ? new Date(newsTickerContent.lastUpdated).toLocaleString()
                  : 'Never'
                }
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Edit Mode */
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="flex items-center space-x-3 mb-4">
              <input
                type="checkbox"
                name="enabled"
                checked={formData.enabled}
                onChange={handleInputChange}
                className="w-4 h-4 accent-blue-600"
              />
              <span className="text-lg">Enable News Ticker</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Ticker Text
            </label>
            <textarea
              name="text"
              value={formData.text}
              onChange={handleInputChange}
              placeholder="Enter your news ticker text here... Use • to separate different news items."
              rows={6}
              className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded text-white placeholder-neutral-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono"
            />
            <div className="flex justify-between text-sm text-neutral-400 mt-1">
              <span>{getCharacterCount()} characters, {getWordCount()} words</span>
              <span>Use • for separating news items</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Scroll Speed (pixels per second)
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                name="speed"
                min="20"
                max="150"
                value={formData.speed}
                onChange={handleInputChange}
                className="flex-1 accent-blue-600"
              />
              <input
                type="number"
                name="speed"
                min="20"
                max="150"
                value={formData.speed}
                onChange={handleInputChange}
                className="w-20 p-2 bg-neutral-800 border border-neutral-700 rounded text-white text-center"
              />
            </div>
            <div className="text-sm text-neutral-400 mt-1">
              Lower values = slower scroll, Higher values = faster scroll
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-medium rounded transition-colors"
            >
              {isLoading ? 'Saving...' : 'Save Changes'}
            </button>
            
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3 bg-neutral-700 hover:bg-neutral-600 text-white font-medium rounded transition-colors"
            >
              Reset to Default
            </button>
          </div>
        </form>
      )}

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }
      `}</style>
    </div>
  );
};

export { NewsTickerAdmin };