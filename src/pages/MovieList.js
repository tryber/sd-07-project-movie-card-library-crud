import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();
    this.fetch = this.fetch.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    this.setState(
      { loading: true }, // Primeiro parâmetro da setState
      async () => {
        const moviesGetted = await (movieAPI.getMovies());
        this.setState({
          movies: moviesGetted,
          loading: false,
        });
      });
  }

  render() {
    const movies = this.state;
    const load = <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.loading ? load : ''}
        {movies.movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
