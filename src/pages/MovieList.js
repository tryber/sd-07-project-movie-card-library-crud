import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.request();
  }

  async request() {
    this.setState(
      { loading: true },
      async () => {
        const requestMovies = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: requestMovies,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    return (
      loading ? <Loading /> : <div data-testid="movie-list">
        <span>
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </span>
      </div>
    );
  }
}

export default MovieList;
