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

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState({ loading: true }, async () => {
      const response = await movieAPI.getMovies();
      this.setState({ movies: response, loading: false });
    });
  }

  render() {
    const { movies, loading } = this.state;
    const getLoading = loading && <Loading />;

    return (
      <div>
        {loading ? getLoading : <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>}
      </div>
    );
  }
}

export default MovieList;
