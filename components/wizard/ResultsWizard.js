import React, {useContext} from 'react';
import MatchProvider from '../../context/stores/match';
import withContext from '../../context/withContext';
import {GameDataContext} from '../../context/stores/gameData';
import WizardRoutes from '../../routes/WizardRoutes';
import WizardHeader from './WizardHeader';

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

export default withContext(ResultsWizard, MatchProvider);
