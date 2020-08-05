import React from 'react';
import {SectionList} from 'react-native';
import {ListItem} from 'react-native-elements';
import {deriveGameMode} from '../../constants/gameModes';
import {Text, StyleSheet} from 'react-native';
import styles from '../../styles';

const renderMap = ({item, onPress, match}) => {
  return (
    <ListItem
      bottomDivider
      chevron
      onPress={() => onPress(item.id)}
      leftAvatar={{
        source: {uri: item.image},
        rounded: false,
        imageProps: {
          resizeMethod: 'resize',
        },
      }}
      rightIcon={
        match.map_id === item.id ? {name: 'check', color: 'green'} : null
      }
      title={item.name}
    />
  );
};

const Maps = props => {
  const formatData = props.maps.reduce((acc, map) => {
    const index = acc.findIndex(section => section.id === map.game_mode_id);
    if (index === -1) {
      const name = deriveGameMode(map.game_mode_id);
      acc.push({title: name, id: map.game_mode_id, data: [map]});
    } else {
      acc[index].data.push(map);
    }
    return acc;
  }, []);

  const handlePress = mapId => {
    props.reducer.dispatch({
      type: props.reducer.actions.UPDATE_MAP_ID,
      payload: mapId,
    });
    props.navigation.navigate('Heroes');
  };

  return (
    <SectionList
      contentContainerStyle={styles.containers.listContainer}
      sections={formatData}
      renderItem={itemProps =>
        renderMap({
          ...itemProps,
          onPress: handlePress,
          match: props.reducer.match,
        })
      }
      keyExtractor={item => item.id.toString()}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.containers.sectionHeading}>{title}</Text>
      )}
    />
  );
};

export default Maps;
