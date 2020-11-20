import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.get = this.get.bind(this);
    this.state = {
      movies: [],
      Movielist: false,
    };
  }
  componentDidMount() {
    this.get();
  }

  async get() {
    const fetch = await movieAPI.getMovies();
    this.setState({ movies: fetch, Movielist: true });
  }

  render() {
    const { movies, Movielist } = this.state;

    return (
      (Movielist) ?
        <div data-testid="movie-list">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div> : <Loading />
    );
  }
}

export default MovieList;
