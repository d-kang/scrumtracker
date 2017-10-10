export const incrementCounter = () => ({
  type: 'INCREMENT_COUNTER',
});

export const decrementCounter = (id) => {
  return {
    type: 'DECREMENT_COUNTER',
    id,
  };
};


export const gameSelect = (id) => {
  return {
    type: 'SELECT_ID',
    id,
  };
};
