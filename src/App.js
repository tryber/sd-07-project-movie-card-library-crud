import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MovieList from './pages/MovieList.js';
import MovieDetails from './pages/MovieDetails.js';
import NewMovie from './pages/NewMovie.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/movies/new" component={NewMovie} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
