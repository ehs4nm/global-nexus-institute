import React from 'react';
import { PageTemplate, createPageHead } from '../../components/PageTemplate';
import contentData from '../../data/content.json';

const ActionablePage = () => {
  return <PageTemplate pageKey="actionable" />;
};

export default ActionablePage;
export const Head = createPageHead('actionable');
