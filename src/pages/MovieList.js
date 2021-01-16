import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

// import getMovies from '../services/movieAPI';

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
    const moviesAPI = await movieAPI.getMovies();
    this.setState({ movies: moviesAPI, loaded: true });
  }

  render() {
    const { movies, loaded } = this.state;

    // Render Loading here if the request is still happening
    if (loaded) {
      return (
        <div data-testid="movie-list">
          <div>Movie Card Library CRUD teste</div>
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      );
    }
    return <Loading message="Carregando..." />;
  }
}

export default MovieList;
