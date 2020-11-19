import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovie = this.fetchMovie.bind(this);
    this.state = {
      movies: [],
      loading: true
    }
  }

  async fetchMovie() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      loading: false
    })
  }

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    const { movies } = this.state;
    if(this.state.loading) return <Loading />

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
