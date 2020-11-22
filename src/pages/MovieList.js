import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; */
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };

    this.fetchMovies = this.fetchMovies.bind(this);
    this.mapMovies = this.mapMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState({
      loading: true,
    }, async () => {
      const returnedMovies = await movieAPI.getMovies();
      this.setState(({ movies }) => ({
        movies: [...movies, ...returnedMovies],
        loading: false,
      }));
    });
  }

  mapMovies() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>{loading ? <Loading /> : this.mapMovies()}</div>
    );
  }
}

export default MovieList;
