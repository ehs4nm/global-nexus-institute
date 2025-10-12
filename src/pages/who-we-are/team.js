import React from 'react';
import { PageTemplate, createPageHead } from '../../components/PageTemplate';

const TeamPage = () => {
  return <PageTemplate pageKey="team" />;
};

export default TeamPage;
export const Head = createPageHead('team');