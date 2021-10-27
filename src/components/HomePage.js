import React, { useEffect, useState } from "react";
import { ResultCard } from "./ResultCard";

const genresApi =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=8fbbb787d44ee790aebc20d0dd773784&language=en-US";

export const HomePage = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");

  const myKey = "8fbbb787d44ee790aebc20d0dd773784";
  const apiMovies = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${myKey}&language=en-US&page=1`;
  const searchApi = `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&query=`;

  useEffect(() => {
    getMovies(apiMovies);
  }, []);

  // useEffect(() => {
  //   getGenres(genresApi);
  // }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    getMovies(searchApi + search);
    setSearch("");
  };

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home_page">
      <div className="container">
        <div className="home_content">
          <div className="input">
            <form onSubmit={handleOnSubmit}>
              <input
                className="search"
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleOnChange}
              />
            </form>
          </div>
          {results.length > 0 && (
            <div className="movie-content">
              <ul className="results">
                {results.map((movie) => (
                  <li className="movie_li" key={movie.id}>
                    <ResultCard movie={movie} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
