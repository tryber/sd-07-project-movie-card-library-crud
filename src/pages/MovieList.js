import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loaded: false,
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    const resultAPI = await movieAPI.getMovies();
    this.setState({ movies: resultAPI, loaded: true });
  }

  render() {
    const { movies, loaded } = this.state;

    if (loaded) {
      return (
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      );
    } return <Loading />;
  }
}

export default MovieList;
