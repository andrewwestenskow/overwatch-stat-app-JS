import React, {useContext} from 'react';
import {PlayersContext} from '../../context/stores/players';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import httpRequest from '../../utils/httpRequest';
import AsyncStorage from '@react-native-community/async-storage';

const renderPlayer = ({item, onPress}) => {
  return (
    <ListItem
      onPress={() => onPress(item)}
      title={item.name}
      leftAvatar={{
        source: item.portrait && {uri: item.portrait},
        title: item.name[0],
        overlayContainerStyle: {backgroundColor: 'grey'},
      }}
      bottomDivider
      chevron
    />
  );
};

export default props => {
  const {players, setPlayer} = useContext(PlayersContext);

  const handlePress = item => {
    setPlayer(item);
    props.navigation.closeDrawer();
  };

  const handleLogout = async () => {
    await AsyncStorage.clear();
    httpRequest({method: 'DELETE', url: '/auth/logout'}).then(() => {
      props.authNavigate('Landing');
    });
  };
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.scroll}>
        <FlatList
          data={players}
          renderItem={props => renderPlayer({...props, onPress: handlePress})}
          keyExtractor={player => player.id.toString()}
        />
      </View>
      <View style={styles.drawerMenu}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Add Player')}
          style={styles.drawerItem}>
          <Text style={styles.drawerItemText}>Add New Player</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={styles.drawerItem}>
          <Text style={styles.drawerItemText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  scroll: {
    height: '85%',
  },
  drawerMenu: {
    height: '15%',
    borderTopColor: '#000',
    borderTopWidth: 3,
  },
  drawerItem: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    height: '50%',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  drawerItemText: {
    fontSize: 16,
  },
});
