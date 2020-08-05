const UPDATE_PLAYER_ID = 'UPDATE_PLAYER_ID';
const UPDATE_MAP_ID = 'UPDATE_MAP_ID';
const UPDATE_WIN = 'UPDATE_WIN';
const ADD_HERO = 'ADD_HERO';
const REMOVE_HERO = 'REMOVE_HERO';

export const actions = {
  ADD_HERO,
  REMOVE_HERO,
  UPDATE_MAP_ID,
  UPDATE_PLAYER_ID,
  UPDATE_WIN,
};

export const initialState = {
  player_id: null,
  map_id: null,
  win: false,
  heroes: [],
};

export default (state, action) => {
  const {type, payload} = action;
  switch (type) {
    case UPDATE_PLAYER_ID:
      return {...state, player_id: payload};
    case UPDATE_MAP_ID:
      return {...state, map_id: payload};
    case ADD_HERO:
      return {...state, heroes: [...state.heroes, payload]};
    case REMOVE_HERO:
      const index = state.heroes.findIndex(hero => hero.id === payload.id);
      const copyArr = [...state.heroes];
      copyArr.splice(index, 1);
      return {...state, heroes: copyArr};
    case UPDATE_WIN:
      return {...state, win: payload};
    default:
      return state;
  }
};
