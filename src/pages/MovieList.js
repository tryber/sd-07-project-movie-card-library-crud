import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NewMovie, MovieDetails, EditMovie, MovieCard } from './index';
// import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  render() {
    const { movies } = this.state;

      // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        <Switch>
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route path="/movies/:id" component={MovieDetails} />
        </Switch>
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
