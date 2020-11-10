import React, {useEffect, useContext} from 'react';
import {PlayersContext} from '../context/stores/players';
import {GameDataContext} from '../context/stores/gameData';
import {View, Text} from 'react-native';
import SafeView from '../hocs/SafeView';
import containers from '../styles/container';
import typography from '../styles/typography';
import Button from './UI/Button';
import httpRequest from '../utils/httpRequest';
import AsyncStorage from '@react-native-community/async-storage';

const Landing = ({navigation}) => {
  const {setPlayers, getPlayers, setPlayer} = useContext(PlayersContext);
  const {getGameData} = useContext(GameDataContext);

  useEffect(() => {
    httpRequest({method: 'GET', url: '/auth'})
      .then(async res => {
        await AsyncStorage.setItem('token', res.token);
        await getGameData();
        getPlayers().then(players => {
          setPlayers(players);
          if (players[0]) {
            setPlayer(players[0]);
            navigation.navigate('ResultsContainer');
          } else {
            navigation.navigate('ResultsContainer', {
              screen: 'Results',
              params: {
                screen: 'Drawer',
                params: {
                  screen: 'Add Player',
                },
              },
            });
          }
        });
      })
      .catch(() => console.log('Invalid auth token'));
  }, []);

  return (
    <View style={{...containers.container, alignItems: 'center'}}>
      <Text style={typography.heading}>Welcome to Overwatch Match Tracker</Text>
      <Button onPress={() => navigation.navigate('Register')} title="Sign Up" />
      <Button onPress={() => navigation.navigate('Login')} title="Log In" />
    </View>
  );
};

export default SafeView(Landing);
