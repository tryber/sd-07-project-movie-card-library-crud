import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const moviesFromApi = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: moviesFromApi,
        });
      });
  }

  render() {
    const { movies, loading } = this.state;
    const loadingElement = <span>Carregando...</span>;

    return (
      <div data-testid="movie-list">
        {loading ? loadingElement : movies
          .map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
