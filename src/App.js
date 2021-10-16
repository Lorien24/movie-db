import React, { useEffect, useState } from "react";

import Movie from "./components/Movie";

const api =
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8fbbb787d44ee790aebc20d0dd773784&language=en-US&page=1";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return <div className="movie_container">
    {movies.length > 0 && movies.map((movie) => 
    <Movie key={movie.id} {...movie} />)}</div>;
}

export default App;
