const UPDATE_PLAYER_ID = 'UPDATE_PLAYER_ID';
const UPDATE_MAP_ID = 'UPDATE_MAP_ID';
const UPDATE_WIN = 'UPDATE_WIN';
const UPDATE_HEROES = 'UPDATE_HEROES';

export const actions = {
  UPDATE_HEROES,
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
  switch (action) {
    case UPDATE_PLAYER_ID:
      return {...state, player_id: payload};
    case UPDATE_MAP_ID:
      return {...state, map_id: payload};
    default:
      return state;
  }
};
