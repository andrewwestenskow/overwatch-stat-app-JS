import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import SafeView from '../../hocs/SafeView';
import styles from '../../styles';
import httpRequest from '../../utils/httpRequest';
import MapImage from './Map';
import UI from '../UI';

const ResultsWizard = props => {
  const [resultsObj, setResultsObj] = useState({});
  const [availableMaps, setAvailableMaps] = useState([]);

  useEffect(() => {
    httpRequest({method: 'GET', url: '/maps'}).then(res => {
      console.log(res);
      setAvailableMaps(res);
    });
  }, []);

  return (
    <View style={styles.containers.window}>
      <Text style={styles.typography.heading}>Record New Match</Text>
      <View style={styles.containers.listContainer}>
        {availableMaps.map(map => (
          <MapImage key={map.id} src={map.image} name={map.name} id={map.id} />
        ))}
      </View>
    </View>
  );
};

export default SafeView(ResultsWizard);
