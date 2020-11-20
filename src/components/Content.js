import { Switch, Route } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from '../pages/index';
import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default Content;
