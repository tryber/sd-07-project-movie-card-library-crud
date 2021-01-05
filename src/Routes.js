import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

const Routes = () => {
  return (
    <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={NewMovie} />
        <Route path="/movies/new" component={EditMovie} />
        <Route path="/movies/:id/edit" component={NotFound} />
    </Switch>
  );
};

export default Routes;
