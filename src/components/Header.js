import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
        <div className="header">
          <div className="logo_title">
            <Link to="/">Popular Movies</Link>
          </div>
          <div className="watchlist_link">
            <Link to="/watchlist">Watchlist</Link>
          </div>
        </div>
    </header>
  );
};
