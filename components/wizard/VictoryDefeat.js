import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from '../../styles';

const VictoryDefeat = props => {
  const {dispatch, matchWin} = props;
  const [isSelected, setIsSelected] = useState(false);
  const [isVictory, setIsVictory] = useState(false);

  const handleVictory = () => {
    setIsVictory('win');
    if (!isSelected) {
      setIsSelected(true);
    }
  };

  const handleDefeat = () => {
    setIsVictory('lose');
    if (!isSelected) {
      setIsSelected(true);
    }
  };

  useEffect(() => {
    dispatch.setWin(isVictory);
  }, [isVictory]);

  useEffect(() => {
    if (!matchWin) {
      setIsSelected(false);
      setIsVictory(false);
    }
  }, [matchWin]);

  return (
    <View style={styles.containers.fixedFooter}>
      <TouchableOpacity style={styles.containers.footerItemsContainer}>
        <Text
          onPress={handleDefeat}
          style={
            isSelected && isVictory === 'lose'
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
            isSelected && isVictory === 'win'
              ? styles.typography.victory
              : styles.typography.unselected
          }>
          Victory
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default VictoryDefeat;
