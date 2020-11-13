import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {ATTACK, DEFENSE, BOTH, CONTROL} from '../../constants/gameRounds';

export const SelectGameHero = ({
  item,
  inMatch,
  selectedStyles,
  stdStyles,
  action,
}) => {
  return (
    <View style={internalStyles.rightElement}>
      <TouchableOpacity
        style={inMatch?.game_round_id === ATTACK ? selectedStyles : stdStyles}
        onPress={() => action({hero_id: item.id, game_round_id: ATTACK})}>
        <Text>Attack</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={inMatch?.game_round_id === DEFENSE ? selectedStyles : stdStyles}
        onPress={() => action({hero_id: item.id, game_round_id: DEFENSE})}>
        <Text>Defense</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={inMatch?.game_round_id === BOTH ? selectedStyles : stdStyles}
        onPress={() => action({hero_id: item.id, game_round_id: BOTH})}>
        <Text>Both</Text>
      </TouchableOpacity>
    </View>
  );
};

export const SelectControlHero = ({
  action,
  item,
  inMatch,
  selectedStyles,
  stdStyles,
}) => {
  return (
    <TouchableOpacity
      style={inMatch ? selectedStyles : stdStyles}
      onPress={() => action({hero_id: item.id, game_round_id: CONTROL})}>
      <Text>Select</Text>
    </TouchableOpacity>
  );
};

const internalStyles = StyleSheet.create({
  rightElement: {
    width: '50%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
