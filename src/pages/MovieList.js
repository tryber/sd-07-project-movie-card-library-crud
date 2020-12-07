import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.returnMovieList = this.returnMovieList.bind(this);
    this.state = {
      movies: [],
      loadingMensage: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState({
      loadingMensage: true,
    }, () => {
      movieAPI.getMovies().then((response) => {
        this.setState({
          loadingMensage: false,
          movies: response,
        });
      });
    });
  }

  returnMovieList(arrMovies) {
    return (
      <div data-testid="movie-list">
        {arrMovies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }

  render() {
    const { movies, loadingMensage } = this.state;
    return (
      <div>
        {loadingMensage ? <Loading /> : this.returnMovieList(movies)}
      </div>
    );
  }
}

export default MovieList;
