import React, {useMemo, useContext} from 'react';
import {SectionList, Text, StyleSheet, View} from 'react-native';
import {MatchContext} from '../../context/stores/match';
import {ListItem, Avatar} from 'react-native-elements';
import {deriveHeroRole} from '../../constants/heroRoles';
import {deriveIsControl} from '../../constants/gameModes';
import {SelectGameHero, SelectControlHero} from './HeroSelection';
import styles from '../../styles';

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
    <ListItem bottomDivider>
      <Avatar
        source={{uri: item.image}}
        title={item.name[0]}
        overlayContainerStyle={{backgroundColor: 'grey'}}
      />
      <ListItem.Content
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <ListItem.Title>{item.name}</ListItem.Title>
        {isControl ? (
          <SelectControlHero {...selectProps} />
        ) : (
          <SelectGameHero {...selectProps} />
        )}
      </ListItem.Content>
    </ListItem>
  );
};

const Heroes = props => {
  const {heroes} = props;
  const match = useContext(MatchContext);

  const {heroes: matchHeroes, map_id, dispatch} = match;

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
    [heroes],
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
  gameRoundSelector: {
    height: '90%',
    // width: '33%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    margin: 5,
  },

  selected: {
    backgroundColor: 'gray',
  },
});
