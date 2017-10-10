import { combineReducers } from 'redux';

const globals = (state = {}, action) => {
  console.log('action', action);
  console.log('state', state);

  console.log('{...state}', {...state});
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT_COUNTER':
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state;
  }
};

const game = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_ID':
      return {
        ...state,
        selectedIds: [...state.selectedIds, action.id]
      };
    default:
      return state;
  }
};

export default combineReducers({ globals, game });
