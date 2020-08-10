import React, {useState, useEffect, useContext} from 'react';
import {MatchContext} from '../../context/stores/match';
import WizardRoutes from '../../routes/WizardRoutes';
import WizardHeader from './WizardHeader';
import {PlayersContext} from '../../context/stores/players';
import httpRequest from '../../utils/httpRequest';

const ResultsWizard = props => {
  const {player} = useContext(PlayersContext);
  const {dispatch, map_id} = useContext(MatchContext);

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

  useEffect(() => {
    dispatch.setPlayer_id(player.id);
  }, [player]);

  return (
    <>
      <WizardRoutes heroes={availableHeroes} maps={availableMaps} />
      <WizardHeader
        mapId={map_id}
        dispatch={dispatch}
        maps={availableMaps}
        heroes={availableHeroes}
      />
    </>
  );
};

export default ResultsWizard;
