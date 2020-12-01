import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from '../pages/index';

const Router = () => (
  <Switch>
    <Route exact path="/" component={MovieList} />
    <Route exact path="/movies/:id" component={MovieDetails} />
    <Route exact path="/movies/new" component={NewMovie} />
    <Route exact path="/movies/:id/edit" component={EditMovie} />
    <Route exact path="*" component={NotFound} />
  </Switch>
);

export default Router;
