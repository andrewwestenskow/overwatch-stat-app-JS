import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import SafeView from '../../hocs/SafeView';
import containers from '../../styles/container';
import typography from '../../styles/typography';
import httpRequest from '../../utils/httpRequest';
import UI from '../UI';
import AddPlayerForm from './AddPlayerForm';

const Dashboard = props => {
  const [players, setPlayers] = useState([]);
  const [isAddingPlayer, setIsAddingPlayer] = useState(false);

  const getPlayers = () => {
    httpRequest({method: 'GET', url: '/players'}).then(res => {
      setPlayers(res);
      isAddingPlayer && setIsAddingPlayer(false);
    });
  };

  useEffect(() => {
    getPlayers();
  }, []);

  const selectPlayer = id => {
    httpRequest({method: 'GET', url: `/players/${id}`}).then(([res]) => {
      props.navigation.navigate('Results', {player: res});
    });
  };

  return (
    <View style={containers.window}>
      <Text style={typography.heading}>DASHBOARD</Text>
      {players.map(player => {
        return (
          <TouchableOpacity
            onPress={() => selectPlayer(player.id)}
            style={{...containers.flex, ...containers.listItem}}
            key={player.id}>
            <Text>{player.platform}</Text>
            <Text>{player.name}</Text>
          </TouchableOpacity>
        );
      })}
      {isAddingPlayer && <AddPlayerForm getPlayers={getPlayers} />}
      <UI.Button
        onPress={() => setIsAddingPlayer(prev => !prev)}
        title={`${isAddingPlayer ? 'Cancel' : 'Add New Player...'}`}
      />
    </View>
  );
};
export default SafeView(Dashboard);
