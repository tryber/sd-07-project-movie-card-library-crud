import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NewMovie, EditMovie, MovieDetails, MovieList, NotFound } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route pach="/movies/new" component={NewMovie} />
        <Route pach="/movies/:id/edit" component={EditMovie} />
        <Route pach="/movies/:id" component={MovieDetails} />
        <Route exact pach="/" component={MovieList} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
