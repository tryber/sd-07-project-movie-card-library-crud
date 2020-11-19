import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);

    this.state = {
      movies: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const moviesList = await movieAPI.getMovies();

    this.setState({
      movies: moviesList,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        { loading ? <Loading /> :
        movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
