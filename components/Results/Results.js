import React, {useState, useEffect, useContext} from 'react';
import {PlayersContext} from '../../context/stores/players';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import SafeView from '../../hocs/SafeView';
import styles from '../../styles';
import httpRequest from '../../utils/httpRequest';
import UI from '../UI';
import getTopAndBottom from '../../utils/getTopAndBottom';

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
      <UI.Heading
        title="Best & Worst Heroes"
        subheading="All roles. > 5 matches played"
      />
      <UI.CenterButton title="See all hero data" />
      <View style={styles.containers.row}>
        <UI.Progress
          fill={heroData.top.win_rate}
          label={heroData.top.name}
          image={heroData.top.image}
        />
        <UI.Progress
          fill={heroData.bottom.win_rate}
          label={heroData.bottom.name}
          image={heroData.bottom.image}
        />
      </View>
      <UI.Heading
        title="Best & Worst Maps"
        subheading="All game modes.  > 1 matches played"
      />
      <UI.CenterButton title="See all map data" />
      <View style={styles.containers.row}>
        <UI.Progress
          fill={mapData.top.win_rate}
          label={mapData.top.name}
          image={mapData.top.image}
        />
        <UI.Progress
          fill={mapData.bottom.win_rate}
          label={mapData.bottom.name}
          image={mapData.bottom.image}
        />
      </View>
    </View>
  );
};

export default SafeView(Results);
