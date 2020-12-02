import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import MovieList from './pages/MovieList.js';
import EditMovie from './pages/EditMovie.js';
import MovieDetails from './pages/MovieDetails.js';
import NewMovie from './pages/NewMovie.js';
import NotFound from './pages/NotFound.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/movies/:id/edit" component={EditMovie} />
        <Route path="/NotFound" component={NotFound} />
        <Redirect to="/NotFound" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
