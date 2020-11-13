import React, {useState, useEffect, useContext} from 'react';
import {MatchContext} from '../../context/stores/match';
import {GameDataContext} from '../../context/stores/gameData';
import WizardRoutes from '../../routes/WizardRoutes';
import WizardHeader from './WizardHeader';
import {PlayersContext} from '../../context/stores/players';
import httpRequest from '../../utils/httpRequest';

const ResultsWizard = props => {
  const {maps, heroes} = useContext(GameDataContext);

  return (
    <>
      <WizardRoutes heroes={heroes} maps={maps} />
      <WizardHeader
        maps={maps}
        heroes={heroes}
        navigate={props.navigation.navigate}
      />
    </>
  );
};

export default ResultsWizard;
