import React from 'react';
import { PageTemplate, createPageHead } from '../../components/PageTemplate';
import contentData from '../../data/content.json';

const ResearchPage = () => {
  return <PageTemplate pageKey="research" />;
};

export default ResearchPage;
export const Head = createPageHead('research');
