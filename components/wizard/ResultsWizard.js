import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import WizardRoutes from '../../routes/WizardRoutes';
import WizardHeader from './WizardHeader';
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
      <WizardHeader />
      <WizardRoutes heroes={availableHeroes} maps={availableMaps} />
    </>
  );
};

export default ResultsWizard;
