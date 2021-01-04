import React from "react";
import { Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id/edit" component={EditMovie} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/" component={MovieList} />
        <Route exact path="" component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
