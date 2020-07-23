import React, {useState, useEffect} from 'react';
import {SectionList, Text} from 'react-native';
import {ListItem} from 'react-native-elements';
import {deriveHeroRole} from '../../constants/heroRoles';
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

  return (
    <SectionList
      contentContainerStyle={styles.containers.listContainer}
      sections={formatData}
      renderItem={itemProps => renderMap({...itemProps})}
      keyExtractor={item => item.id.toString()}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.containers.sectionHeading}>{title}</Text>
      )}
    />
  );
};

export default Heroes;
