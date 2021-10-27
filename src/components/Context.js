import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
};

export const Store = createContext(initialState);

export const AppProvider = props => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "add", payload: movie });
  };

  const removeFromWatchlist = (id) => {
    dispatch({ type: "remove", payload: id });
  };

  return (
    <Store.Provider
      value={{
        watchlist: state.watchlist,
        addMovieToWatchlist,
        removeFromWatchlist,
      }}
    >
      {props.children}
    </Store.Provider>
  );
};

