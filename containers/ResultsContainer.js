import React from 'react';
import TabRoutes from '../routes/TabNav';
import PlayersProvider from '../context/stores/players';
import {View, Text} from 'react-native';

const ResultsContainer = props => {
  const {navigate: authNavigate} = props.navigation;
  return <TabRoutes props={{...props, authNavigate}} />;
};
export default ResultsContainer;
