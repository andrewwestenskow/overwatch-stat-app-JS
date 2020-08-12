import React, {useState, useEffect, useContext} from 'react';
import {PlayersContext} from '../../context/stores/players';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import SafeView from '../../hocs/SafeView';
import styles from '../../styles';
import httpRequest from '../../utils/httpRequest';
import UI from '../UI';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import getTopAndBottom from '../../utils/getTopAndBottom';
import chartProps from '../../styles/chartProps';

const Results = props => {
  const {player} = useContext(PlayersContext);

  const [heroData, setHeroData] = useState({top: {}, bottom: {}});
  const [mapData, setMapData] = useState({top: {}, bottom: {}});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    httpRequest({method: 'GET', url: `/results/${player.id}`}).then(res => {
      const {heroResults, mapResults} = res;

      getTopAndBottom(heroResults, setHeroData);
      getTopAndBottom(mapResults, setMapData);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <Text>Loading...</Text>
  ) : (
    <View style={styles.containers.window}>
      <View style={styles.containers.row}>
        <UI.Progress fill={heroData.top.win_rate} />
        <UI.Progress fill={heroData.bottom.win_rate} />
      </View>
    </View>
  );
};

export default SafeView(Results);
