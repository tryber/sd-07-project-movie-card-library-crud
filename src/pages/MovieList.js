import React, { Component } from 'react';
import {MovieCard, Loading} from '../components/index';

import * as movieAPI from '../services/movieAPI';
import movies from '../services/movieData';

class MovieList extends Component {
  constructor() {
    super();

    this.rechargeMovies = this.rechargeMovies(this);

    this.state = {
      movies: [],
      loading: true,
    }
  }

  async rechargeMovies() {
    const movieList = await movieAPI.getMovies();   
    this.setState(previousState => ({
      movies: [...previousState.movies, ...movieList],
      loading: false,
    }))
  }
  componentDidMount() {
    movieAPI.saveMovies(movies);
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    if(loading) {
      return <Loading />
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
