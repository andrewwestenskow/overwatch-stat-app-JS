import React, {useEffect, useState, useContext} from 'react';
import {PlayersContext} from '../../context/stores/players';
import {View, Text} from 'react-native';
import SafeView from '../../hocs/SafeView';
import styles from '../../styles';
import httpRequest from '../../utils/httpRequest';
import UI from '../UI';

const AllHeroes = props => {
  const [results, setResults] = useState([]);
  const {player} = useContext(PlayersContext);

  useEffect(() => {
    httpRequest({method: 'GET', url: `/results/${player.id}/heroes`}).then(
      data => {
        console.log(data);
        setResults(data);
      },
    );
  });
  return (
    <View>
      <Text>Yoooo</Text>
    </View>
  );
};

export default SafeView(AllHeroes);
