import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      movies: [],
      loading: false,
    };
  }
  async fetchMovies() {
    const moviesArr = await movieAPI.getMovies();
    this.setState({
      movies: moviesArr,
      loading: true,
    });
  }
  componentDidMount() {
    this.setState(
      {
        loading: false,
      },
      this.fetchMovies,
    );
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {this.state.loading ? (
          movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default MovieList;
