import React, { useState, useEffect } from 'react';
import contentData from '../../data/content.json';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminSidebar from '../../components/admin/AdminSidebar';
import HeroEditor from '../../components/admin/editors/HeroEditor';
import MissionEditor from '../../components/admin/editors/MissionEditor';
import InitiativesEditor from '../../components/admin/editors/InitiativesEditor';
import GalleryEditor from '../../components/admin/editors/GalleryEditor';
import LeadershipEditor from '../../components/admin/editors/LeadershipEditor';
import MetadataEditor from '../../components/admin/editors/MetadataEditor';
import { updateNestedState, safeJsonParse } from '../../utils/admin/helpers';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('hero');
  const [content, setContent] = useState(contentData);
  const [isSaved, setIsSaved] = useState(false);
  const [isDev, setIsDev] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDev(process.env.NODE_ENV === 'development');
      const saved = localStorage.getItem('gni_content');
      if (saved) {
        const parsedContent = safeJsonParse(saved, contentData);
        setContent(parsedContent);
      }
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('gni_content', JSON.stringify(content));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(content, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'content.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    if (typeof window !== 'undefined' && window.confirm('Are you sure you want to reset to original content?')) {
      setContent(contentData);
      localStorage.removeItem('gni_content');
    }
  };

  const updateContent = (path, value) => {
    const newContent = updateNestedState(content, path, value);
    setContent(newContent);
  };

  if (!isDev) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Admin panel is only available in development mode</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <AdminHeader
        onSave={handleSave}
        onExport={handleExport}
        onReset={handleReset}
        isSaved={isSaved}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />

          <main className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            {activeTab === 'hero' && (
              <HeroEditor content={content.hero} updateContent={updateContent} />
            )}
            {activeTab === 'mission' && (
              <MissionEditor content={content.mission} updateContent={updateContent} />
            )}
            {activeTab === 'initiatives' && (
              <InitiativesEditor content={content.initiatives} updateContent={updateContent} />
            )}
            {activeTab === 'gallery' && (
              <GalleryEditor content={content.gallery} updateContent={updateContent} />
            )}
            {activeTab === 'leadership' && (
              <LeadershipEditor content={content.leadership} updateContent={updateContent} />
            )}
            {activeTab === 'metadata' && (
              <MetadataEditor content={content.siteMetadata} updateContent={updateContent} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

export const Head = () => <title>GNI Admin Panel</title>;
