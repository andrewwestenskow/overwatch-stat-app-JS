import React, {useContext} from 'react';
import {MatchContext} from '../../context/stores/match';
import {SectionList} from 'react-native';
import {ListItem} from 'react-native-elements';
import {deriveGameMode} from '../../constants/gameModes';
import {Text, StyleSheet} from 'react-native';
import styles from '../../styles';

const renderMap = ({item, onPress, mapId}) => {
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
      rightIcon={mapId === item.id ? {name: 'check', color: 'green'} : null}
      title={item.name}
    />
  );
};

const Maps = props => {
  const {dispatch, map_id} = useContext(MatchContext);

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
    dispatch.setMap_id(mapId);
    props.navigation.navigate('Heroes');
  };

  return (
    <SectionList
      contentContainerStyle={styles.containers.listContainer}
      sections={formatData}
      initialNumToRender={8}
      renderItem={itemProps =>
        renderMap({
          ...itemProps,
          onPress: handlePress,
          mapId: map_id,
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
