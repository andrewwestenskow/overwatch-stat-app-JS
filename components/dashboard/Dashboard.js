import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import SafeView from '../../hocs/SafeView';
import containers from '../../styles/container';
import typography from '../../styles/typography';
import httpRequest from '../../utils/httpRequest';

const Dashboard = props => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    httpRequest({method: 'GET', url: '/players'}).then(res => {
      console.log(res);
      setPlayers(res);
    });
  }, []);
  return (
    <View style={containers.window}>
      <Text style={typography.heading}>DASHBOARD</Text>
      {players.map(player => {
        return (
          <TouchableOpacity
            style={{...containers.flex, ...containers.listItem}}
            key={player.id}>
            <Text>{player.platform}</Text>
            <Text>{player.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default SafeView(Dashboard);
