import React, {useContext, useEffect} from 'react';
import httpRequest from '../../utils/httpRequest';
import styles from '../../styles';
import {ScrollView, Text, StyleSheet} from 'react-native';

const IndividualHero = props => {
  return (
    <ScrollView contentContainerStyle={styles.containers.container}>
      <Text style={styles.typography.heading}>Hero</Text>
    </ScrollView>
  );
};
export default IndividualHero;
