import React from 'react';
import TabRoutes from '../routes/TabNav';

const ResultsContainer = props => {
  const {navigate: authNavigate} = props.navigation;
  return <TabRoutes props={{...props, authNavigate}} />;
};
export default ResultsContainer;
