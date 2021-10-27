import React, { useContext } from "react";
import { Store } from "./Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const favourite_icon = <FontAwesomeIcon icon={faHeart} size="2x" />;

export const WatchlistControls = ({type, movie}) => {
  const { removeFromWatchlist } = useContext(Store);


return (
  <div>
    {type === "watchlist" && (
      <>
        <button className="btn" onClick={() => removeFromWatchlist(movie.id)}>
          {favourite_icon}
        </button>
      </>
    )}
  </div>
)
};
