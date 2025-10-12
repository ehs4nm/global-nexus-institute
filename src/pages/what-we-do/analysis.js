import React from 'react';
import { PageTemplate, createPageHead } from '../../components/PageTemplate';

const AnalysisPage = () => {
  return <PageTemplate pageKey="analysis" />;
};

export default AnalysisPage;
export const Head = createPageHead('analysis');