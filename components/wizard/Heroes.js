import React, {useMemo} from 'react';
import {
  SectionList,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import {deriveHeroRole} from '../../constants/heroRoles';
import {ATTACK, DEFENSE, BOTH, CONTROL} from '../../constants/gameRounds';
import {deriveIsControl} from '../../constants/gameModes';
import styles from '../../styles';

const SelectGameHero = ({action, item, selectedItem}) => {
  return (
    <View style={internalStyles.rightElement}>
      <TouchableOpacity
        style={internalStyles.gameRoundSelector}
        onPress={() => action(item.id, ATTACK)}>
        <Text>A</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={internalStyles.gameRoundSelector}
        onPress={() => action(item.id, DEFENSE)}>
        <Text>D</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={internalStyles.gameRoundSelector}
        onPress={() => action(item.id, BOTH)}>
        <Text>B</Text>
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
      onPress={() => action(item.id, CONTROL)}>
      <Text>Select</Text>
    </TouchableOpacity>
  );
};

const renderMap = ({item, actions, heroes, isControl}) => {
  const inMatch = heroes.some(e => e.hero_id === item.id);

  const action = inMatch ? actions.removeHero : actions.addHero;

  const stdStyles = {...internalStyles.rightElement};
  const selectedStyles = {
    ...internalStyles.rightElement,
    ...internalStyles.selected,
  };

  const selectProps = {
    item,
    action,
    heroes,
    inMatch,
    selectedItem: inMatch ? heroes.find(e => e.hero_id === item.id) : false,
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
  const {
    reducer: {dispatch, actions, match},
    heroes,
  } = props;
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

  const addHero = (hero_id, game_round_id) => {
    dispatch({type: actions.ADD_HERO, payload: {hero_id, game_round_id}});
  };

  const removeHero = hero_id => {
    dispatch({type: actions.REMOVE_HERO, payload: {hero_id}});
  };

  const gameModeId = props.maps.find(e => e.id === match.map_id).game_mode_id;

  const isControl = deriveIsControl(gameModeId);

  console.log(match.heroes);

  return (
    <View style={{flex: 1}}>
      <SectionList
        initialNumToRender={8}
        contentContainerStyle={styles.containers.listContainer}
        sections={formatData}
        renderItem={itemProps =>
          renderMap({
            ...itemProps,
            isControl,
            actions: {addHero, removeHero},
            heroes: match.heroes,
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
    borderColor: 'black',
    borderWidth: 1,
  },

  gameRoundSelector: {
    height: '90%',
    borderWidth: 1,
    borderColor: 'black',
    width: '33%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  selected: {
    backgroundColor: 'gray',
  },
});
