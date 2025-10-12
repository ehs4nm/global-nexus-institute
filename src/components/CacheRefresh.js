import React, { useState } from 'react';
import { useContent } from '../contexts/ContentContext';

const CacheRefresh = () => {
  const { refreshContent, isLoading } = useContent();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await refreshContent();
      console.log('Content refreshed successfully');
    } catch (error) {
      console.error('Error refreshing content:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleClearCache = () => {
    // Clear localStorage cache
    localStorage.removeItem('aboutUsContent');
    localStorage.removeItem('newsTickerContent');
    localStorage.removeItem('gni_content');
    
    // Force refresh
    handleRefresh();
  };

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '20px', 
      right: '20px', 
      zIndex: 9999,
      display: 'flex',
      gap: '10px',
      flexDirection: 'column'
    }}>
      <button
        onClick={handleRefresh}
        disabled={isLoading || isRefreshing}
        style={{
          padding: '10px 15px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: isLoading || isRefreshing ? 'not-allowed' : 'pointer',
          fontSize: '12px',
          opacity: isLoading || isRefreshing ? 0.6 : 1
        }}
      >
        {isRefreshing ? '🔄 Refreshing...' : '🔄 Refresh Content'}
      </button>
      
      <button
        onClick={handleClearCache}
        disabled={isLoading || isRefreshing}
        style={{
          padding: '10px 15px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: isLoading || isRefreshing ? 'not-allowed' : 'pointer',
          fontSize: '12px',
          opacity: isLoading || isRefreshing ? 0.6 : 1
        }}
      >
        {isRefreshing ? '🗑️ Clearing...' : '🗑️ Clear Cache & Refresh'}
      </button>
    </div>
  );
};

export default CacheRefresh;