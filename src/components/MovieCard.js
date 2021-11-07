import React from "react";
import {WatchlistControls} from './WatchlistControls'

export const MovieCard =({movie, type})=>{
    return(
        <div className="movie_card">
            <div className="movie_img">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={`${movie.title} Poster`}/>
            </div>
            <WatchlistControls type={type} movie={movie} />
        </div>
    )
}