import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
  // <Link to="/movies/new">ADICIONAR CARTÃO</Link>
  render() {
    const { movies, movieList } = this.state;
    // Render Loading here if the request is still happening
    return movieList ? (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    ) : (
      <Loading />
    );
  }
}
export default MovieList;
