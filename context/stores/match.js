import React, {createContext, useState} from 'react';
import httpRequest from '../../utils/httpRequest';

const MatchContext = createContext();
MatchContext.displayName = 'PlayersStore';

const deriveHeroStatus = (arr, payload) => {
  const index = arr.findIndex(e => e.hero_id === payload.hero_id);
  if (index === -1) {
    return {contains: false, matches: false, index: undefined};
  } else {
    const curr = arr[index];
    const matches = curr.game_mode_id === payload.game_mode_id;
    if (matches) {
      return {contains: true, matches: true, index};
    } else {
      return {contains: true, matches: false, index};
    }
  }
};

const initialState = {
  player_id: null,
  map_id: null,
  win: false,
  heroes: [],
};

export default props => {
  const [player_id, setPlayer_id] = useState(initialState.player_id);
  const [map_id, setMap_id] = useState(initialState.map_id);
  const [win, setWin] = useState(initialState.win);
  const [heroes, setHeroes] = useState(initialState.heroes);

  const modifyHeroes = payload => {
    const copy = [...heroes];
    const status = deriveHeroStatus(copy, payload);
    if (!status.contains) {
      copy.push(payload);
    } else if (status.contains && status.matches) {
      copy.splice(status.index);
    } else if (status.contains && !status.matches) {
      copy[status.index] = payload;
    }

    setHeroes(copy);
  };

  return (
    <MatchContext.Provider
      value={{
        player_id,
        map_id,
        win,
        heroes,
        dispatch: {setPlayer_id, setMap_id, setWin, modifyHeroes},
      }}>
      {props.children}
    </MatchContext.Provider>
  );
};

export {MatchContext};
