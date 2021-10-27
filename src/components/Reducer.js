const Reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "remove":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default Reducer;
