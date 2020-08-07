import React, {useState, useEffect, useReducer, useContext} from 'react';
import {View, Text} from 'react-native';
import matchReducer, {actions, initialState} from './wizardReducer';
import WizardRoutes from '../../routes/WizardRoutes';
import WizardHeader from './WizardHeader';
import {PlayersContext} from '../../context/stores/players';
import httpRequest from '../../utils/httpRequest';

const ResultsWizard = props => {
  const {player} = useContext(PlayersContext);
  const [availableMaps, setAvailableMaps] = useState([]);
  const [availableHeroes, setAvailableHeroes] = useState([]);
  const [match, dispatch] = useReducer(matchReducer, initialState, () => ({
    ...initialState,
    player_id: player.id,
  }));

  useEffect(() => {
    async function fetchData() {
      const maps = await httpRequest({method: 'GET', url: '/maps'});
      const heroes = await httpRequest({method: 'GET', url: '/heroes'});
      setAvailableHeroes(heroes);
      setAvailableMaps(maps);
    }
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({type: actions.UPDATE_PLAYER_ID, payload: player.id});
  }, [player]);

  return (
    <>
      <WizardRoutes
        heroes={availableHeroes}
        maps={availableMaps}
        reducer={{dispatch, actions, match}}
      />
      <WizardHeader
        maps={availableMaps}
        heroes={availableHeroes}
        reducer={{dispatch, actions, match}}
      />
    </>
  );
};

export default ResultsWizard;
