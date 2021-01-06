import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MovieList} />
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
