import { createStore } from 'redux';
import mainReducer from './reducers';

export default () => {
  const store = createStore(mainReducer, {
    globals: {
      count: 1,
    },
    game: {
      selectedIds: [],
    },
  });
  return store;
};
