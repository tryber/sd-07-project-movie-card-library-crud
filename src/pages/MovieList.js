import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      movies: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState(async () => {
      const movieslist = await movieAPI.getMovies();
      this.setState({ movies: movieslist, loading: false });
    });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div>
        <div className="button-background">
          <Link className="button-link" to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        {loading ? <Loading /> :
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>}
      </div>
    );
  }
}

export default MovieList;
