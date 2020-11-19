import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
    this.getMovie = this.getMovie.bind(this);
  }

  getMovie() {
    this.setState({ loading: true }, async () => {
      const pegamovie = await movieAPI.getMovies();
      this.setState({ loading: false, movies: pegamovie });
    });
  }

  componentDidMount() {
    this.getMovie();
  }

  render() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
