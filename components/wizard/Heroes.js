import React from 'react';
import {
  SectionList,
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import {deriveHeroRole} from '../../constants/heroRoles';
import {ATTACK, DEFENSE, BOTH, CONTROL} from '../../constants/gameRounds';
import {deriveIsControl} from '../../constants/gameModes';
import styles from '../../styles';

const SelectGameHero = ({action, item}) => {
  return (
    <View style={internalStyles.rightElement}>
      <TouchableWithoutFeedback onPress={() => action(item.id, ATTACK)}>
        <Text>A</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => action(item.id, DEFENSE)}>
        <Text>D</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => action(item.id, BOTH)}>
        <Text>B</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SelectControlHero = ({action, item}) => {
  return (
    <TouchableWithoutFeedback
      style={internalStyles.rightElement}
      onPress={() => action(item.id, CONTROL)}>
      <Text>Select</Text>
    </TouchableWithoutFeedback>
  );
};

const renderMap = ({item, actions, heroes, isControl}) => {
  const inMatch = heroes.some(e => e.hero_id === item.id);

  const action = inMatch ? actions.removeHero : actions.addHero;
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
          <SelectControlHero item={item} action={action} heroes={heroes} />
        ) : (
          <SelectGameHero item={item} action={action} heroes={heroes} />
        )
      }
      title={item.name}
    />
  );
};

const Heroes = props => {
  const {
    reducer: {dispatch, actions, match},
  } = props;
  const formatData = props.heroes.reduce((acc, hero) => {
    const index = acc.findIndex(section => section.id === hero.role_id);
    if (index === -1) {
      const name = deriveHeroRole(hero.role_id);
      acc.push({title: name, id: hero.role_id, data: [hero]});
    } else {
      acc[index].data.push(hero);
    }
    return acc;
  }, []);

  const addHero = (hero_id, game_round_id) => {
    dispatch({type: actions.ADD_HERO, payload: {hero_id, game_round_id}});
  };

  const removeHero = hero_id => {
    dispatch({type: actions.REMOVE_HERO, payload: {hero_id}});
  };

  const gameModeId = props.maps.find(e => e.id === match.map_id).game_mode_id;

  const isControl = deriveIsControl(gameModeId);

  return (
    <SectionList
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
});
