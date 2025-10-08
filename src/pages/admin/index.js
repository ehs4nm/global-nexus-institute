import React, { useState, useEffect } from 'react';
import contentData from '../../data/content.json';

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
        setContent(JSON.parse(saved));
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
  };

  const handleReset = () => {
    if (typeof window !== 'undefined' && window.confirm('Are you sure you want to reset to original content?')) {
      setContent(contentData);
      localStorage.removeItem('gni_content');
    }
  };

  const updateContent = (path, value) => {
    const newContent = { ...content };
    const keys = path.split('.');
    let current = newContent;
    
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
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

  const tabs = [
    { id: 'hero', label: 'Hero Section', icon: '🎬' },
    { id: 'mission', label: 'Mission', icon: '🎯' },
    { id: 'initiatives', label: 'Initiatives', icon: '🚀' },
    { id: 'leadership', label: 'Leadership', icon: '👥' },
    { id: 'metadata', label: 'Site Info', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">GNI Content Manager</h1>
              <p className="text-sm text-gray-500 mt-1">Edit your website content</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reset
              </button>
              <button
                onClick={handleExport}
                className="px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition-colors"
              >
                📥 Export JSON
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
              >
                {isSaved ? '✓ Saved!' : '💾 Save Changes'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-indigo-50 text-indigo-700 shadow-sm'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>

            <div className="mt-4 bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">💡 Tips</h3>
              <ul className="text-xs text-gray-600 space-y-2">
                <li>• Changes save to browser storage</li>
                <li>• Export to update content.json</li>
                <li>• Rebuild Gatsby to see changes</li>
                <li>• Admin not in production</li>
              </ul>
            </div>
          </aside>

          {/* Content Area */}
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
            {activeTab === 'leadership' && (
              <LeadershipEditor content={content.leadership} setContent={setContent} fullContent={content} />
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

// Editor Components
const HeroEditor = ({ content, updateContent }) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Hero Section</h2>
    </div>
    
    <div>
      <label htmlFor="tagline" className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
      <input
        type="text"
        value={content.tagline}
        onChange={(e) => updateContent('hero.tagline', e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>

    <div>
      <label htmlFor="heroTitle" className="block text-sm font-medium text-gray-700 mb-2">Main Title</label>
      <input
        type="text"
        id="heroTitle"
        value={content.title}
        onChange={(e) => updateContent('hero.title', e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>

    <div>
      <label htmlFor="heroSubtitle" className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
      <input
        type="text"
        id="heroSubtitle"
        value={content.subtitle}
        onChange={(e) => updateContent('hero.subtitle', e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>

    <div>
      <label htmlFor="videoSrc" className="block text-sm font-medium text-gray-700 mb-2">Video Source</label>
      <input
        id="videoSrc"
        type="text"
        value={content.videoSrc}
        onChange={(e) => updateContent('hero.videoSrc', e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        placeholder="/assets/videos/video.mp4"
      />
    </div>

    <div>
      <label htmlFor="posterSrc" className="block text-sm font-medium text-gray-700 mb-2">Poster Image</label>
      <input
        id="posterSrc"
        type="text"
        value={content.posterSrc}
        onChange={(e) => updateContent('hero.posterSrc', e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        placeholder="/assets/images/poster.jpg"
      />
    </div>
  </div>
);

const MissionEditor = ({ content, updateContent }) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Mission Section</h2>
    </div>

    <div>
      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Title</label>
      <input
        id="title"
        type="text"
        value={content.title}
        onChange={(e) => updateContent('mission.title', e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>

    <div>
      <label htmlFor="paragraphs-0" className="block text-sm font-medium text-gray-700 mb-2">First Paragraph</label>
      <textarea
        id="paragraphs-0"
        value={content.paragraphs[0]}
        onChange={(e) => {
          const newParagraphs = [...content.paragraphs];
          newParagraphs[0] = e.target.value;
          updateContent('mission.paragraphs', newParagraphs);
        }}
        rows={3}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>

    <div>
      <label htmlFor="paragraphs-1" className="block text-sm font-medium text-gray-700 mb-2">Second Paragraph</label>
      <textarea
        id="paragraphs-1"
        value={content.paragraphs[1]}
        onChange={(e) => {
          const newParagraphs = [...content.paragraphs];
          newParagraphs[1] = e.target.value;
          updateContent('mission.paragraphs', newParagraphs);
        }}
        rows={3}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>

    <div>
      <label htmlFor="cards" className="block text-sm font-medium text-gray-700 mb-4">Cards</label>
      <div className="grid grid-cols-2 gap-4">
        {content.cards.map((card, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
            <input
              id="cards"
              type="text"
              value={card.label}
              onChange={(e) => {
                const newCards = [...content.cards];
                newCards[index].label = e.target.value;
                updateContent('mission.cards', newCards);
              }}
              placeholder="Label"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <input
              type="text"
              value={card.title}
              onChange={(e) => {
                const newCards = [...content.cards];
                newCards[index].title = e.target.value;
                updateContent('mission.cards', newCards);
              }}
              placeholder="Title"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        ))}
      </div>
    </div>

    <div>
      <label htmlFor="caption" className="block text-sm font-medium text-gray-700 mb-2">Caption</label>
      <input
        id="caption"
        type="text"
        value={content.caption}
        onChange={(e) => updateContent('mission.caption', e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>
  </div>
);

const InitiativesEditor = ({ content, updateContent }) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Initiatives Section</h2>
    </div>

    <div>
      <label htmlFor="content-title" className="block text-sm font-medium text-gray-700 mb-2">Title</label>
      <input
        id="content-title"
        type="text"
        value={content.title}
        onChange={(e) => updateContent('initiatives.title', e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>

    <div>
      <label htmlFor="initiatives-subtitle" className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
      <input
        id="initiatives-subtitle"
        type="text"
        value={content.subtitle}
        onChange={(e) => updateContent('initiatives.subtitle', e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>

    <div>
      <label htmlFor="initiatives-icon" className="block text-sm font-medium text-gray-700 mb-4">Projects</label>
      <div className="space-y-6">
        {content.projects.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3 bg-gray-50">
            <h3 className="font-semibold text-gray-700">Project {index + 1}</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="project-icon" className="block text-xs font-medium text-gray-600 mb-1">Icon (emoji)</label>
                <input
                  id="project-icon"
                  type="text"
                  value={project.icon}
                  onChange={(e) => {
                    const newProjects = [...content.projects];
                    newProjects[index].icon = e.target.value;
                    updateContent('initiatives.projects', newProjects);
                  }}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                />
              </div>
              <div>
                <label htmlFor="project-title" className="block text-xs font-medium text-gray-600 mb-1">Title</label>
                <input
                  id="project-title"
                  type="text"
                  value={project.title}
                  onChange={(e) => {
                    const newProjects = [...content.projects];
                    newProjects[index].title = e.target.value;
                    updateContent('initiatives.projects', newProjects);
                  }}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="project-description" className="block text-xs font-medium text-gray-600 mb-1">Description</label>
              <textarea
                id="project-description"
                value={project.description}
                onChange={(e) => {
                  const newProjects = [...content.projects];
                  newProjects[index].description = e.target.value;
                  updateContent('initiatives.projects', newProjects);
                }}
                rows={2}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="project-linkText" className="block text-xs font-medium text-gray-600 mb-1">Link Text</label>
                <input
                  id="project-linkText"
                  type="text"
                  value={project.linkText}
                  onChange={(e) => {
                    const newProjects = [...content.projects];
                    newProjects[index].linkText = e.target.value;
                    updateContent('initiatives.projects', newProjects);
                  }}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                />
              </div>
              <div>
                <label htmlFor="project-linkHref" className="block text-xs font-medium text-gray-600 mb-1">Link URL</label>
                <input
                  id="project-linkHref"
                  type="text"
                  value={project.linkHref}
                  onChange={(e) => {
                    const newProjects = [...content.projects];
                    newProjects[index].linkHref = e.target.value;
                    updateContent('initiatives.projects', newProjects);
                  }}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LeadershipEditor = ({ content, setContent, fullContent }) => {
  const addLeader = () => {
    const newLeader = {
      name: 'New Leader',
      img: '/assets/leaders/placeholder.jpg',
      title: 'Position',
      bio: 'Bio description...',
    };
    setContent({ ...fullContent, leadership: [...content, newLeader] });
  };

  const removeLeader = (index) => {
    if (typeof window !== 'undefined' && window.confirm('Remove this leader?')) {
      const newLeadership = content.filter((_, i) => i !== index);
      setContent({ ...fullContent, leadership: newLeadership });
    }
  };

  const updateLeader = (index, field, value) => {
    const newLeadership = [...content];
    newLeadership[index][field] = value;
    setContent({ ...fullContent, leadership: newLeadership });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Leadership Team</h2>
        <button
          onClick={addLeader}
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          + Add Leader
        </button>
      </div>

      <div className="space-y-4">
        {content.map((leader, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3 bg-gray-50">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-gray-700">Leader {index + 1}</h3>
              <button
                onClick={() => removeLeader(index)}
                className="text-red-600 hover:text-red-700 text-sm font-medium"
              >
                Remove
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="leader-name" className="block text-xs font-medium text-gray-600 mb-1">Name</label>
                <input
                  id="leader-name"
                  type="text"
                  value={leader.name}
                  onChange={(e) => updateLeader(index, 'name', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                />
              </div>
              <div>
                <label htmlFor="leader-title" className="block text-xs font-medium text-gray-600 mb-1">Title</label>
                <input
                  id="leader-title"
                  type="text"
                  value={leader.title}
                  onChange={(e) => updateLeader(index, 'title', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="leader-img" className="block text-xs font-medium text-gray-600 mb-1">Image Path</label>
              <input
                id="leader-img"
                type="text"
                value={leader.img}
                onChange={(e) => updateLeader(index, 'img', e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                placeholder="/assets/leaders/name.jpg"
              />
            </div>
            <div>
              <label htmlFor="leader-bio" className="block text-xs font-medium text-gray-600 mb-1">Bio</label>
              <textarea
                id="leader-bio"
                value={leader.bio}
                onChange={(e) => updateLeader(index, 'bio', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MetadataEditor = ({ content, updateContent }) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Site Metadata</h2>
    </div>

    <div>
      <label htmlFor="siteMetadata-title" className="block text-sm font-medium text-gray-700 mb-2">Site Title</label>
      <input
        id="siteMetadata-title"
        type="text"
        value={content.title}
        onChange={(e) => updateContent('siteMetadata.title', e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>

    <div>
      <label htmlFor="siteMetadata-description" className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
      <textarea
        id="siteMetadata-description"
        value={content.description}
        onChange={(e) => updateContent('siteMetadata.description', e.target.value)}
        rows={3}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>
  </div>
);

export default AdminPage;

export const Head = () => <title>GNI Admin Panel</title>;
