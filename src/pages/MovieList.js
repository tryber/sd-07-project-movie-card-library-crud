import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading'

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      movies: [],
    }
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState({ loading: true }, async () => {
      const APIRequest = await movieAPI.getMovies();
      this.setState(({ movies }) => ({
        loading: false,
        movies: [...APIRequest],
      }));
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (!loading) {
      return (
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      );
    }
    return <Loading />;
  }
}

export default MovieList;
