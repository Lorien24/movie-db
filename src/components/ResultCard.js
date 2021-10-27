import React, { useContext } from "react";
import { Store } from "./Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const favourite_icon = <FontAwesomeIcon icon={faHeart} size="2x" />;

const setVote = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, watchlist } = useContext(Store);

  return (

      <div className="movie_card">
        <img
          className="movie_img"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
        <span className={`tag ${setVote(movie.vote_average)}`}>
          {movie.vote_average}
        </span>

        <div className="movie_info">
        <Link className="" to={`/movieinfo/${movie.id}`}>
          <h3 className="title">{movie.title}</h3>
          </Link>
          <button
            className="btn"
            // disabled={watchlistDisabled}
            label="Add to watchlist"
            onClick={() => addMovieToWatchlist(movie)}
          >
            {favourite_icon}
          </button>
        </div>
      </div>

  );
};

