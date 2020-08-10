import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import VictoryDefeat from './VictoryDefeat';

const WizardHeader = ({mapId, dispatch, maps, heroes}) => {
  const [map, setMap] = useState({});

  useEffect(() => {
    if (mapId) {
      const newMap = maps.find(e => e.id === mapId);
      setMap(newMap);
    }
  });

  return (
    <View style={styles.sectionHeader}>
      <Text>Match Summary: </Text>
      <VictoryDefeat dispatch={dispatch} />
      <View style={styles.headerRow}>
        {mapId && (
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
