import React, {useState, useEffect, useMemo, useContext} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import UI from '../UI';
import VictoryDefeat from './VictoryDefeat';
import MatchProvider, {MatchContext} from '../../context/stores/match';
import withContext from '../../context/withContext';

const WizardHeader = ({maps, heroes, navigate}) => {
  const {
    dispatch,
    map_id: matchMap,
    heroes: matchHeroes,
    player_id: matchPlayer,
    win: matchWin,
    isSubmitting,
  } = useContext(MatchContext);

  const [map, setMap] = useState({});

  useEffect(() => {
    if (matchMap) {
      const newMap = maps.find(e => e?.id === matchMap);
      setMap(newMap);
    }
  });

  const displayHeroes = useMemo(
    () =>
      matchHeroes.map(e => {
        const hero = heroes.find(h => h.id === e.hero_id);
        return hero;
      }),
    [heroes, matchHeroes],
  );

  const ready = useMemo(
    () =>
      matchMap && matchHeroes.length && matchPlayer && matchWin ? true : false,
    [matchMap, matchHeroes.length, matchPlayer, matchWin],
  );

  const handleSubmit = () => {
    dispatch.submitMatch().then(() => {
      navigate('Results');
      dispatch.reset();
    });
  };

  return (
    <View style={styles.sectionHeader}>
      <Text>Match Summary: </Text>
      <VictoryDefeat matchWin={matchWin} dispatch={dispatch} />
      <View style={styles.headerRow}>
        {matchMap && (
          <View style={styles.headerRowItem}>
            <Text>Map: </Text>
            <Image
              resizeMethod="resize"
              style={styles.headerRowImage}
              source={{uri: map.image}}
            />
          </View>
        )}
        {displayHeroes.length ? (
          <View style={styles.headerRowItem}>
            <Text>Heroes: </Text>
            {displayHeroes.map(e => (
              <Image
                resizeMethod="resize"
                key={e.id}
                source={{uri: e.image}}
                style={{height: 25, width: 25, margin: 2}}
              />
            ))}
          </View>
        ) : null}
      </View>
      {ready && (
        <View style={styles.headerRow}>
          <UI.Button
            loading={isSubmitting}
            onPress={handleSubmit}
            buttonStyle={{width: '95%'}}
            title="Submit"
          />
        </View>
      )}
    </View>
  );
};

export default withContext(WizardHeader, MatchProvider);

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
    flexWrap: 'wrap',
    height: '100%',
    overflow: 'hidden',
  },
  headerRowImage: {
    height: 50,
    width: '80%',
  },
});
