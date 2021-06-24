const defaultState = {
  message: 'Hello World',
};

export default (initialState = defaultState, action) => {
  switch (action.type) {
    default: return initialState;
  }
};
