import React, {useMemo, useContext} from 'react';
import {
  SectionList,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import match, {MatchContext} from '../../context/stores/match';
import {ListItem} from 'react-native-elements';
import {deriveHeroRole} from '../../constants/heroRoles';
import {ATTACK, DEFENSE, BOTH, CONTROL} from '../../constants/gameRounds';
import {deriveIsControl} from '../../constants/gameModes';
import styles from '../../styles';

const SelectGameHero = ({action, item, inMatch, selectedStyles, stdStyles}) => {
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

const SelectControlHero = ({
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

const renderMap = ({item, modifyHeroes, matchHeroes, isControl}) => {
  const inMatch = matchHeroes.find(e => e.hero_id === item.id);
  const stdStyles = {...internalStyles.gameRoundSelector};
  const selectedStyles = {
    ...internalStyles.gameRoundSelector,
    ...internalStyles.selected,
  };

  const selectProps = {
    item,
    action: modifyHeroes,
    heroes: matchHeroes,
    inMatch,
    stdStyles,
    selectedStyles,
  };
  return (
    <ListItem
      bottomDivider
      leftAvatar={{
        source: {uri: item.image},
        rounded: false,
        imageProps: {
          resizeMethod: 'resize',
        },
      }}
      rightElement={
        isControl ? (
          <SelectControlHero {...selectProps} />
        ) : (
          <SelectGameHero {...selectProps} />
        )
      }
      title={item.name}
    />
  );
};

const Heroes = props => {
  const {heroes} = props;
  const {dispatch, heroes: matchHeroes, map_id} = useContext(MatchContext);
  const formatData = useMemo(
    () =>
      heroes.reduce((acc, hero) => {
        const index = acc.findIndex(section => section.id === hero.role_id);
        if (index === -1) {
          const name = deriveHeroRole(hero.role_id);
          acc.push({title: name, id: hero.role_id, data: [hero]});
        } else {
          acc[index].data.push(hero);
        }
        return acc;
      }, []),
    [match, heroes],
  );

  const isControl = useMemo(() => {
    const gameModeId = props.maps.find(e => e.id === map_id)?.game_mode_id;

    return deriveIsControl(gameModeId);
  }, [map_id]);

  return (
    <View style={{flex: 1}}>
      <SectionList
        extraData={match}
        initialNumToRender={8}
        contentContainerStyle={styles.containers.listContainer}
        sections={formatData}
        renderItem={itemProps =>
          renderMap({
            ...itemProps,
            isControl,
            modifyHeroes: dispatch.modifyHeroes,
            matchHeroes,
          })
        }
        keyExtractor={item => item.id.toString()}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.containers.sectionHeading}>{title}</Text>
        )}
      />
    </View>
  );
};

export default Heroes;

const internalStyles = StyleSheet.create({
  rightElement: {
    width: '50%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  gameRoundSelector: {
    height: '90%',
    width: '33%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
  },

  selected: {
    backgroundColor: 'gray',
  },
});
