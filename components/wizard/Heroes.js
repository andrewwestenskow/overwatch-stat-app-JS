import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import httpRequest from '../../utils/httpRequest';
import styles from '../../styles';

const renderMap = ({item}) => {
  return (
    <ListItem
      bottomDivider
      chevron
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

const Heroes = props => {
  return (
    <FlatList
      contentContainerStyle={styles.containers.listContainer}
      data={props.heroes}
      renderItem={itemProps => renderMap({...itemProps})}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default Heroes;
