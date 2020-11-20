import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={MovieList} exact path="/" />
        <Route component={NewMovie} exact path="/movies/new" />
        <Route component={MovieDetails} exact path="/movies/:id" />
        <Route component={EditMovie} exact path="/movies/:id/edit" />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
