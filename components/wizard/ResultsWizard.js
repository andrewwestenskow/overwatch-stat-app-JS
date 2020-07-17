import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import SafeView from '../../hocs/SafeView';
import styles from '../../styles';
import httpRequest from '../../utils/httpRequest';
import MapImage from './Map';
import WizardFooter from './WizardFooter';
import UI from '../UI';
import SectionSwipe from '../UI/SectionSwipe';

const SELECT_MAP = 0;
const SELECT_HEROES = 1;

const ResultsWizard = props => {
  const [resultsObj, setResultsObj] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [availableMaps, setAvailableMaps] = useState([]);

  const takeStep = target => {
    if (target === 'back') {
      setCurrentStep(prev => prev - 1);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  useEffect(() => {
    httpRequest({method: 'GET', url: '/maps'}).then(res => {
      console.log(res);
      setAvailableMaps(res);
    });
  }, []);

  const slides = [
    {
      component: <WizardFooter />,
      id: 0,
    },
    {
      component: (
        <View style={styles.containers.listContainer}>
          {availableMaps.map(map => (
            <MapImage
              key={map.id}
              src={map.image}
              name={map.name}
              id={map.id}
              takeStep={takeStep}
              setResultsObj={setResultsObj}
            />
          ))}
        </View>
      ),
      id: 1,
    },
  ];

  return (
    <View style={styles.containers.window}>
      <Text style={styles.typography.heading}>Record New Match</Text>
      <SectionSwipe slides={slides} />
    </View>
  );
};

export default SafeView(ResultsWizard);
