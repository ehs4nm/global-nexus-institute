import React from 'react';
import { PageTemplate, createPageHead } from '../../components/PageTemplate';
import contentData from '../../data/content.json';

const StrategicAlliancesPage = () => {
  return <PageTemplate pageKey="strategic-alliances" />;
};

export default StrategicAlliancesPage;
export const Head = createPageHead('strategic-alliances');
