import React, { useContext } from "react";
import { Store } from "./Context";
import { MovieCard } from "./MovieCard";

export const Watchlist = () => {
  const { watchlist } = useContext(Store);
  return (
    <div className="watchlist_page">
      <div className="container">
        <div className="header">
          <h1>My Watchlist</h1>
        </div>

        {watchlist.length > 0 ? (
          <div className="wathclist_card">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2>It`s empty~ Please add some!</h2>
        )}
      </div>
    </div>
  );
};
