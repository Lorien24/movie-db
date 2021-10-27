import React,{ useState } from "react";
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import {Header} from './components/Header'
import {Watchlist} from './components/Watchlist'
import {HomePage} from './components/HomePage'
import MovieInfo from "./components/MovieInfo";

import {AppProvider} from "./components/Context";

function App() {
  return (
<AppProvider>
  <Router>
    <Header/>
    <Switch>
      <Route exact path="/">
        <HomePage/>
      </Route>
      <Route exact path="/movieinfo/:id">
        <MovieInfo/>
      </Route>
      <Route exact path="/watchlist">
        <Watchlist/>
      </Route>
    </Switch>
  </Router>
</AppProvider>
  );
}

export default App;