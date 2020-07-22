import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import SafeView from '../../hocs/SafeView';
import styles from '../../styles';
import httpRequest from '../../utils/httpRequest';
import UI from '../UI';

const Results = props => {
  console.log(Object.keys(props.route.params.player));
  return (
    <View style={styles.containers.window}>
      <Text>RESULTS</Text>
    </View>
  );
};

export default SafeView(Results);
