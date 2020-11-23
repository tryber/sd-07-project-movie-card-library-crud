import React, { Component } from 'react';
import MovieCard from '../components/MovieCard.js';
import Loading from '../components/Loading.js';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.getMoviesLibrary = this.getMoviesLibrary.bind(this);

    this.state = {
      loading: false,
      movies: [],
    };
  }

  componentDidMount() {
    this.getMoviesLibrary();
  }

  async getMoviesLibrary() {
    this.setState(
      { loading: true },
      async () => {
        const movieList = await movieAPI.getMovies();
        this.setState(() => ({ loading: false, movies: movieList }));
      });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        {loading ? <Loading />
          :
        movies.map((movie) =>
          <MovieCard
            key={movie.title}
            movie={movie}
          />)}
      </div>
    );
  }
}

export default MovieList;
