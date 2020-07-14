import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SafeView from '../../hocs/SafeView';
import containers from '../../styles/container';
import typography from '../../styles/typography';
import httpRequest from '../../utils/httpRequest';

const Dashboard = props => {
  return (
    <View style={containers.container}>
      <Text style={typography.heading}>DASHBOARD</Text>
    </View>
  );
};
export default SafeView(Dashboard);
