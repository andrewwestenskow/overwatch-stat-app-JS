import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import VictoryDefeat from './VictoryDefeat';

const WizardHeader = props => {
  const {
    reducer: {dispatch, actions, match},
  } = props;
  return (
    <View style={styles.sectionHeader}>
      <VictoryDefeat reducer={{dispatch, actions}} />
      {match.map_id && <Text>Map: {match.map_id}</Text>}
    </View>
  );
};

export default WizardHeader;

const styles = StyleSheet.create({
  sectionHeader: {
    padding: 15,
  },
});
