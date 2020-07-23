import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WizardHeader = props => {
  return (
    <View style={styles.sectionHeader}>
      <Text>Add Shit</Text>
    </View>
  );
};

export default WizardHeader;

const styles = StyleSheet.create({
  sectionHeader: {
    padding: 15,
  },
});
