import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import WizardRoutes from '../../routes/WizardRoutes';
import httpRequest from '../../utils/httpRequest';

const ResultsWizard = props => {
  const [availableMaps, setAvailableMaps] = useState([]);
  const [availableHeroes, setAvailableHeroes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const maps = await httpRequest({method: 'GET', url: '/maps'});
      const heroes = await httpRequest({method: 'GET', url: '/heroes'});
      setAvailableHeroes(heroes);
      setAvailableMaps(maps);
    }
    fetchData();
  }, []);

  return (
    <>
      <View>
        <Text>MY BALLS</Text>
      </View>
      <WizardRoutes heroes={availableHeroes} maps={availableMaps} />
    </>
  );
};

export default ResultsWizard;
