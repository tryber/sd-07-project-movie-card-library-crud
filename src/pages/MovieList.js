import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      movies: [],
      loading: true
    }
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const requestReturn = await movieAPI.getMovies();    
    this.setState(({ movies }) => ({
      movies: [...movies, ...requestReturn],
      loading: false,
    }))
  }

  render() {
    const { movies } = this.state;

    if (this.state.loading) return 'Carregando...';
    
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
