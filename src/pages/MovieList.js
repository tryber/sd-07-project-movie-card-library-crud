import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

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
    const requestReturn = await movieAPI.getMovies();
    this.setState(({ movies }) => ({
      movies: [...movies, ...requestReturn],
      loading: false,
    }));
  }

  render() {
    if (this.state.loading) return 'Carregando...';
    const { movies } = this.state;
    return (
      <div className="list-cars">
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
        <Link to="/movies/new" className="text-add-card"> ADICIONAR CARTÃO </Link>
      </div>
    );
  }
}

export default MovieList;
