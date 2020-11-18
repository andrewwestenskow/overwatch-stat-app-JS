import React, {useEffect, useState, useContext} from 'react';
import {PlayersContext} from '../../context/stores/players';
import {ScrollView, Text} from 'react-native';
import SafeView from '../../hocs/SafeView';
import styles from '../../styles';
import httpRequest from '../../utils/httpRequest';
import ResultPreview from './ResultPreview';
import UI from '../UI';

const AllHeroes = props => {
  const [results, setResults] = useState([]);
  const {player} = useContext(PlayersContext);

  useEffect(() => {
    httpRequest({method: 'GET', url: `/results/${player.id}/heroes`}).then(
      data => {
        setResults(data);
      },
    );
  }, [player.id]);
  return (
    <ScrollView
      contentContainerStyle={{
        ...styles.containers.container,
        padding: 5,
      }}>
      <Text style={styles.typography.heading}>All Heroes</Text>
      {results.map(hero => (
        <ResultPreview
          key={hero.id}
          data={hero}
          navigation={props.navigation}
        />
      ))}
    </ScrollView>
  );
};

export default SafeView(AllHeroes);
