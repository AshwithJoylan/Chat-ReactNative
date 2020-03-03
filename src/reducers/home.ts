const INIT_STATE = {
  isLoading: false,
  data: [],
  hasData: false,
  error: null,
  hasError: false,
};

export const getHomeData = (state = INIT_STATE, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};
