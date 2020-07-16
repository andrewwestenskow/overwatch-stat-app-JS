import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import SafeView from '../../hocs/SafeView';
import styles from '../../styles';
import httpRequest from '../../utils/httpRequest';
import MapImage from './Map';
import UI from '../UI';

const WizardFooter = props => {
  const [isSelected, setIsSelected] = useState(false);
  const [isVictory, setIsVictory] = useState(false);

  const handleVictory = () => {
    setIsVictory(true);
    if (!isSelected) {
      setIsSelected(true);
    }
  };

  const handleDefeat = () => {
    setIsVictory(false);
    if (!isSelected) {
      setIsSelected(true);
    }
  };

  return (
    <View style={styles.containers.fixedFooter}>
      <TouchableOpacity style={styles.containers.footerItemsContainer}>
        <Text
          onPress={handleDefeat}
          style={
            isSelected && !isVictory
              ? styles.typography.defeat
              : styles.typography.unselected
          }>
          Defeat
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containers.footerItemsContainer}>
        <Text
          onPress={handleVictory}
          style={
            isSelected && isVictory
              ? styles.typography.victory
              : styles.typography.unselected
          }>
          Victory
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WizardFooter;
