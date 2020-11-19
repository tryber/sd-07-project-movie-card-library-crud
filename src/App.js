import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NewMovie, EditMovie, MovieDetails, MovieList, NotFound } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route pach="/movies/new" component={NewMovie} />
        <Route pach="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
        <Route pach="/movies/:id" render={(props) => <MovieDetails {...props} />} />
        <Route exact pach="/" component={MovieList} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
