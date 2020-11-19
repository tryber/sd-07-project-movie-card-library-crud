import React, { Component } from 'react';

import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        {movies.length ? (
          movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default MovieList;
