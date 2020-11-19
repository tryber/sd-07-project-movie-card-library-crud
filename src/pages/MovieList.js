import React, { Component } from 'react';
import { MovieCard, Loading } from '../components/index';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.fetchMovies = this.fetchMovies.bind(this);
    this.movieListLoaded = this.movieListLoaded.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const requestMovies = await movieAPI.getMovies();
    this.setState({
      movies: requestMovies,
      loading: false,
    });
  }

  movieListLoaded() {
    return (
      <div data-testid="movie-list">
        {this.state.movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div>
        { loading ? <Loading /> : this.movieListLoaded() }
      </div>
    );
  }
}

export default MovieList;
