import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import VictoryDefeat from './VictoryDefeat';

const WizardHeader = props => {
  const {
    reducer: {dispatch, actions, match},
    maps,
    heroes,
  } = props;

  const [map, setMap] = useState({});

  useEffect(() => {
    if (match.map_id) {
      const newMap = maps.find(e => e.id === match.map_id);
      setMap(newMap);
    }
  });

  return (
    <View style={styles.sectionHeader}>
      <Text>Match Summary: </Text>
      <VictoryDefeat reducer={{dispatch, actions}} />
      <View style={styles.headerRow}>
        {match.map_id && (
          <View style={styles.headerRowItem}>
            <Text>Map: </Text>
            <Image style={styles.headerRowImage} source={{uri: map.image}} />
          </View>
        )}
      </View>
    </View>
  );
};

export default WizardHeader;

const styles = StyleSheet.create({
  sectionHeader: {
    padding: 15,
  },
  headerRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  headerRowItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '50%',
  },
  headerRowImage: {
    height: 50,
    width: '80%',
  },
});
