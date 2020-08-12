import React, {createContext, useState, useContext, useEffect} from 'react';
import {PlayersContext} from './players';
import httpRequest from '../../utils/httpRequest';

const MatchContext = createContext();
MatchContext.displayName = 'PlayersStore';

const deriveHeroStatus = (arr, payload) => {
  const index = arr.findIndex(e => e.hero_id === payload.hero_id);
  if (index === -1) {
    return {contains: false, matches: false, index: undefined};
  } else {
    const curr = arr[index];
    const matches = curr.game_round_id === payload.game_round_id;
    if (matches) {
      return {contains: true, matches: true, index};
    } else {
      return {contains: true, matches: false, index};
    }
  }
};

export default props => {
  const {
    player: {id: ctxPlayerId},
  } = useContext(PlayersContext);

  const initialState = {
    player_id: ctxPlayerId,
    map_id: null,
    win: null,
    heroes: [],
  };

  const [player_id, setPlayer_id] = useState(initialState.player_id);
  const [map_id, setMap_id] = useState(initialState.map_id);
  const [win, setWin] = useState(initialState.win);
  const [heroes, setHeroes] = useState(initialState.heroes);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setPlayer_id(ctxPlayerId);
  }, [ctxPlayerId]);

  const modifyHeroes = payload => {
    const copy = [...heroes];
    const status = deriveHeroStatus(copy, payload);
    if (!status.contains) {
      copy.push(payload);
    } else if (status.contains && status.matches) {
      copy.splice(status.index, 1);
    } else if (status.contains && !status.matches) {
      copy[status.index] = payload;
    }

    setHeroes(copy);
  };

  const submitMatch = () => {
    setIsSubmitting(true);
    return httpRequest({
      method: 'POST',
      url: `/results/${player_id}`,
      data: {player_id, map_id, win: win === 'win' ? true : false, heroes},
    }).then(() => {
      setIsSubmitting(false);
    });
  };

  const reset = () => {
    setPlayer_id(initialState.player_id);
    setMap_id(initialState.map_id);
    setWin(initialState.win);
    setHeroes(initialState.heroes);
  };

  return (
    <MatchContext.Provider
      value={{
        player_id,
        map_id,
        win,
        heroes,
        isSubmitting,
        dispatch: {
          setPlayer_id,
          setMap_id,
          setWin,
          modifyHeroes,
          submitMatch,
          reset,
        },
      }}>
      {props.children}
    </MatchContext.Provider>
  );
};

export {MatchContext};
