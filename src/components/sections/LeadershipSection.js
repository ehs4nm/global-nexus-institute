import React from 'react';
import { useMenu } from '../../hooks/useMenu';
import { useContent } from '../../hooks/useContent';

export const LeadershipSection = () => {
  const { openPerson } = useMenu();
  const { content, isLoading } = useContent();
  
  // Safety check - ensure we have content and leadership data
  if (isLoading || !content) {
    return (
      <section 
        id="leadership" 
        className="min-h-screen py-20 sm:py-24 md:py-32  text-black dark:text-white relative"
      >
        <div className="brutalist-container relative flex items-center justify-center min-h-[50vh]">
          <div className="brutalist-label">Loading leadership data...</div>
        </div>
      </section>
    );
  }
  
  const leadershipData = content.leadership || {};
  const leaders = leadershipData.leaders || [];
  
  // Safety check - ensure we have leadership data structure
  if (!leadershipData.title || !Array.isArray(leaders)) {
    console.warn('Invalid leadership data structure:', leadershipData);
    return (
      <section 
        id="leadership" 
        className="min-h-screen py-20 sm:py-24 md:py-32  text-black dark:text-white relative"
      >
        <div className="brutalist-container relative flex items-center justify-center min-h-[50vh]">
          <div className="brutalist-label">Error loading leadership data</div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="leadership" 
      className="brutalist-section min-h-screen py-20 sm:py-24 md:py-32  text-black dark:text-white relative border-0"
    >
      {/* Subtle background pattern */}
      <div className="brutalist-bg-dots absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none" />

      <div className="brutalist-container relative">
        
        {/* Header with vertical orientation */}
        <div className="mb-20 sm:mb-28 md:mb-32 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
          <div className="space-y-6 lg:max-w-2xl">
            <div className="inline-block">
              <h2 className="brutalist-heading">
                {leadershipData.title}
              </h2>
            </div>
            
            <div className="brutalist-divider-bold"></div>
          </div>

          <div className="relative">
            <div className="brutalist-card text-black dark:text-white p-6 sm:p-8">
              <p className="brutalist-body font-bold text-3xl">
                {leadershipData.subTitle}
              </p>
            </div>
          </div>
        </div>

        {/* Bold Asymmetric Leadership Layout */}
        <div className=" space-y-8 sm:space-y-12">
          {leaders.map((person, idx) => {
            const isEven = idx % 2 === 0;
            
            return (
              <button
                key={person.name}
                onClick={() => openPerson(person)}
                className="group w-full text-left focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-4 focus:ring-offset-white dark:focus:ring-offset-black"
              >
                {/* Alternating asymmetric cards */}
                <div className={`brutalist-card text-black dark:text-white p-2 sm:p-1 overflow-hidden h-[40vh] ${
                  isEven 
                    ? 'flex flex-col md:flex-row' 
                    : 'flex flex-col md:flex-row-reverse'
                }`}>
                  
                  {/* Image Section - Bold size */}
                  <div className="relative md:w-1/2 lg:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden bg-gray-100 dark:bg-gray-900">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Bold diagonal overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 dark:bg-white/0 group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-all duration-500" />
                  </div>

                  {/* Content Section */}
                  <div className="md:w-1/2 lg:w-3/5 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                    <div className="space-y-6">
                      {/* Title with bold treatment */}
                      <div className="space-y-3">
                        {/* Large number badge - floating */}
                        <div className="absolute bottom-2 right-2 sm:bottom-2 sm:right-2">
                          <div className="border-2 border-white dark:border-black bg-black dark:bg-white px-3 py-2 sm:px-4 sm:py-3">
                            <span className="font-mono text-xl font-black text-white dark:text-black leading-none">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </div>
                        <div className="brutalist-label">
                          {person.title}
                        </div>
                        
                        <h3 className="font-title-bold text-3xl sm:text-4xl lg:text-5xl font-black leading-[0.95] tracking-tight">
                          {person.name}
                        </h3>
                      </div>

                      {/* Divider */}
                      <div className="w-full h-px  group-hover:bg-black dark:group-hover:bg-white transition-all duration-500" />
                      
                      {/* Bio */}
                      <p className="brutalist-body text-2xl leading-relaxed">
                        {person.bio}
                      </p>

                      {/* Action indicator */}
                      <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="brutalist-label">VIEW PROFILE</span>
                        <div className="w-12 h-px bg-black dark:bg-white"></div>
                        <span className="text-xl">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom decorative element with stats */}
        <div className="mt-24 sm:mt-32 border-t-2 border-black dark:border-white pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <div className="font-mono text-4xl sm:text-5xl font-black mb-2">
                {leaders.length}
              </div>
              <div className="brutalist-label">LEADERSHIP MEMBERS</div>
            </div>
            <div>
              <div className="font-mono text-4xl sm:text-5xl font-black mb-2">
                {leadershipData.memebers || '0'}
              </div>
              <div className="brutalist-label">DISCIPLINES COVERED</div>
            </div>
            <div>
              <div className="font-mono text-4xl sm:text-5xl font-black mb-2">
                5
              </div>
              <div className="brutalist-label">CONTINENTS REPRESENTED</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
