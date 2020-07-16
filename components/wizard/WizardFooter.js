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

  return (
    <View style={styles.containers.fixedFooter}>
      <TouchableOpacity style={styles.containers.footerItemsContainer}>
        <Text style={styles.typography.defeat}>Defeat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containers.footerItemsContainer}>
        <Text style={styles.typography.victory}>Victory</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WizardFooter;
