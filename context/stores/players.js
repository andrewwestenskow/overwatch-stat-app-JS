import React, {createContext, useState} from 'react';
import httpRequest from '../../utils/httpRequest';

const PlayersContext = createContext();
PlayersContext.displayName = 'PlayersStore';

const initialState = {
  players: [],
  player: {
    name: 'No Player Found',
    private: true,
    portrait: '',
    tank_sr: null,
    damage_sr: null,
    support_sr: null,
  },
};

export default props => {
  const [players, setPlayers] = useState(initialState.players);
  const [player, setPlayer] = useState(initialState.player);

  const getPlayers = async () => {
    const res = await httpRequest({method: 'GET', url: '/players'});
    setPlayers(res);
    return res;
  };

  return (
    <PlayersContext.Provider
      value={{players, setPlayers, player, setPlayer, getPlayers}}>
      {props.children}
    </PlayersContext.Provider>
  );
};

export {PlayersContext};
