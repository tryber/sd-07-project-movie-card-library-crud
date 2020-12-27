import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as MovieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetch = this.fetch.bind(this);

    this.state = {
      movies: [],
      carregando: true,
    };
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    const movie = await MovieAPI.getMovies();
    this.setState({
      movies: movie,
      carregando: false,
    });
  }

  render() {
    const { movies, carregando } = this.state;
    return carregando ? <Loading /> : (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="movies/new">ADICIONAR CARTÃO</Link>
        <br />
      </div>
    );
  }
}

export default MovieList;
