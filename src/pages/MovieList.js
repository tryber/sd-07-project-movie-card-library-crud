import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMovies = this.fetchMovies.bind(this);

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  // List Movies
  async fetchMovies() {
    this.setState({ loading: true });
    const data = await movieAPI.getMovies();
    this.setState({ movies: data, loading: false });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) {
      return (
        <div>
          <p>Carregando...</p>
        </div>
      );
    }
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
