import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieList: false,
    };
  }

  componentDidMount() {
    this.atualizar();
  }

  async atualizar() {
    const res = await movieAPI.getMovies();
    this.setState({ movies: res, movieList: true });
  }
  // se movieList for true retorna map se nao retornaa loading
  render() {
    const { movies, movieList } = this.state;

    return (
      <div data-testid="movie-list">
        {movieList ? (
          <img
            className="imagem"
            src={this.state.movieList}
            alt="Descricao da imagem"
          />
        ) : (
          <Loading />
        )}
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
