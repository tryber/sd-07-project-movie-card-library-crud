import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.mapMovies = this.mapMovies.bind(this);
    this.fetchLoadingMovies = this.fetchLoadingMovies.bind(this);

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchLoadingMovies();
  }

  fetchLoadingMovies() {
    this.setState(
      { loading: true },
      async () => {
        const allMovies = await movieAPI.getMovies();
        this.setState(({ movies }) => ({
          loading: false,
          movies: [...movies, ...allMovies],
          // precisa do spread em allMovies para ele pegar todos e não apenas o primeiro elemento
        }));
      });
  }

  mapMovies() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        {(loading) ? <Loading /> : this.mapMovies()};
      </div>
    );
  }
}

export default MovieList;
