import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';
import movies from '../services/movieData';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState(
      { loading: true }, // Primeiro Parâmetro da setState
      async () => { // uma call back que retorna o estado novo baseado no estado anterior
        const RequestReturn = await movieAPI.getMovies();
        this.setState({
          movies: RequestReturn,
          loading: false,
        });
      });
  }

  render() {
    const { loading } = this.state;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <p>{loading ? <Loading /> : this.fetchMovies}</p>
      </div>
    );
  }
}

export default MovieList;
