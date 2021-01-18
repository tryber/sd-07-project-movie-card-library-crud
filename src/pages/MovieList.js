import React, { Component } from 'react';
import { MovieCard, Loading } from '../components/index';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: false,
    }
    this.fetchMoviesAPI = this.fetchMoviesAPI.bind(this);
  }

  componentDidMount() {
    this.fetchMoviesAPI();
  }

   fetchMoviesAPI() {
    this.setState({
      loading: true,
    }, async () => {
      const movies = await movieAPI.getMovies()
      this.setState({
        movies,
        loading: false,
      })
    })
  }
  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return (
        <div>
          <Loading />
        </div>
      )
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
