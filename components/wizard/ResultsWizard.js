import React, {useState, useEffect, useContext} from 'react';
import {MatchContext} from '../../context/stores/match';
import {GameDataContext} from '../../context/stores/gameData';
import WizardRoutes from '../../routes/WizardRoutes';
import WizardHeader from './WizardHeader';
import {PlayersContext} from '../../context/stores/players';
import httpRequest from '../../utils/httpRequest';

const ResultsWizard = props => {
  const {
    dispatch,
    map_id,
    heroes: matchHeroes,
    player_id,
    win,
    isSubmitting,
  } = useContext(MatchContext);

  const {maps, heroes} = useContext(GameDataContext);

  return (
    <>
      <WizardRoutes heroes={heroes} maps={maps} />
      <WizardHeader
        dispatch={dispatch}
        maps={maps}
        heroes={heroes}
        matchHeroes={matchHeroes}
        matchPlayer={player_id}
        matchWin={win}
        matchMap={map_id}
        navigate={props.navigation.navigate}
        isSubmitting={isSubmitting}
      />
    </>
  );
};

export default ResultsWizard;
