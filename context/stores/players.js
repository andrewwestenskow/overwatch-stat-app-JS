import React, {createContext, useState} from 'react';

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

  return (
    <PlayersContext.Provider value={{players, setPlayers, player, setPlayer}}>
      {props.children}
    </PlayersContext.Provider>
  );
};

export {PlayersContext};
