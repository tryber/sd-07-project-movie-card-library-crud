import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MovieDetails, NewMovie, EditMovie, MovieList, NotFound } from './pages/index';

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route exact path="/" component={MovieList} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Router;
