import React, {createContext, useState, useEffect} from 'react';
import httpRequest from '../../utils/httpRequest';

const GameDataContext = createContext();
GameDataContext.displayName = 'GameDataStore';

export default props => {
  const [maps, setMaps] = useState([]);
  const [heroes, setHeroes] = useState([]);

  const getGameData = async () => {
    const mapData = await httpRequest({method: 'GET', url: '/maps'});
    const heroData = await httpRequest({method: 'GET', url: '/heroes'});

    setMaps(mapData);
    setHeroes(heroData);
  };
  return (
    <GameDataContext.Provider value={{maps, heroes, getGameData}}>
      {props.children}
    </GameDataContext.Provider>
  );
};

export {GameDataContext};
