import React, {useEffect, useState, useContext} from 'react';
import {PlayersContext} from '../../context/stores/players';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
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
    <View style={styles.containers.listContainerBg}>
      <FlatList
        ListEmptyComponent={<ActivityIndicator color="#fff" />}
        ListHeaderComponent={
          <Text style={styles.typography.heading}>All Heroes</Text>
        }
        data={results}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ResultPreview navigation={{...props.navigation}} data={item} />
        )}
      />
    </View>
  );
};

export default AllHeroes;
