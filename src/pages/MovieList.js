import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
      shouldRedirect: false,
    };
    this.fetchMovies = this.fetchMovies.bind(this);
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

  async deleteMovie(movieId) {
    if (await movieAPI.updateMovie(movieId) === 'OK') {
      this.setState({
        shouldRedirect: true,
      });
    }
  }

  render() {
    const { movies, loading, shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        <p>{loading ? <Loading /> : this.fetchMovies}</p>
      </div>
    );
  }
}

export default MovieList;
