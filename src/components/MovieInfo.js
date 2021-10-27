import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function MovieInfo() {
  const [results, setResults] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const myKey = "8fbbb787d44ee790aebc20d0dd773784";
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${myKey}`)
      .then((response) => response.json())
      .then((movieInfo) => setResults(movieInfo));
  }, [id]);

  return (
    <div className="movie_container">
      <div className="movie_poster">
        <img
          src={`https://image.tmdb.org/t/p/original${results.poster_path}`}
          alt={`${results.title} Poster`}
        />
        <div className="movie_descr">
          <h2>{results.title}</h2>
          <p>Vote average:{results.vote_average}</p>
          <p>Release Date:{results.release_date}</p>
          <p>Overview:{results.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo