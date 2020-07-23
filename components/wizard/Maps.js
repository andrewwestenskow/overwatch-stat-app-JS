import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import httpRequest from '../../utils/httpRequest';
import styles from '../../styles';

const renderMap = ({item, onPress}) => {
  return (
    <ListItem
      bottomDivider
      chevron
      onPress={onPress}
      leftAvatar={{
        source: {uri: item.image},
        rounded: false,
        imageProps: {
          resizeMethod: 'resize',
        },
      }}
      title={item.name}
    />
  );
};

const Maps = props => {
  const handlePress = mapId => {
    props.navigation.navigate('Heroes');
  };

  return (
    <FlatList
      contentContainerStyle={styles.containers.listContainer}
      data={props.maps}
      renderItem={itemProps => renderMap({...itemProps, onPress: handlePress})}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default Maps;
