import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    }
  }

  async componentDidMount() {
    const moviesList = await movieAPI.getMovies();
    this.setState({ movies: moviesList, loading: false });
  }

  render() {
    const { movies, loading } = this.state;
    const isLoading = <p>Carregando...</p>;
    return (
      <div data-testid="movie-list">
          {loading ? isLoading : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
