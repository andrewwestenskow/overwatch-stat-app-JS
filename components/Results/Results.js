import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import SafeView from '../../hocs/SafeView';
import styles from '../../styles';
import httpRequest from '../../utils/httpRequest';
import UI from '../UI';

const Results = ({route: {params: player}, navigation}) => {
  console.log(player);
  return (
    <View style={styles.containers.window}>
      <Text style={styles.typography.heading}>Results</Text>
      <UI.Button
        title="Record New Match"
        onPress={() => navigation.navigate('ResultsWizard', {player})}
      />
    </View>
  );
};

export default SafeView(Results);
