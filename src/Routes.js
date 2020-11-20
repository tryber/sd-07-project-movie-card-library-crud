import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';

class Routes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/new" component={NewMovie} />
          <Route
            path="/movies/:id/edit"
            render={(props) => <EditMovie {...props} />}
          />
          <Route
            path="/movies/:id"
            render={(props) => <MovieDetails {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default Routes;
