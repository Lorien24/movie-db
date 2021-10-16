import React from "react";

const img_api = 'https://image.tmdb.org/t/p/w500/';


const Movie = ({title, poster_path, overview, vote_average, genre_ids})=>(
    <div className="movie">
        <img className="movie_img" src={img_api +poster_path} alt={title} />
        <div className="movie_info">
            <h3>{title}</h3>
            <span>{vote_average}</span>
        </div>
        <div></div>
    </div>
)
export default Movie;