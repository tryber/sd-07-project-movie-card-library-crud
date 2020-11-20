import React, { Component } from 'react';
import { Loading, MovieCard } from '../components/index';
import * as movieAPI from '../services/movieAPI';
import './pages.css';
// import * as images from './public/images';
class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
    }
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  fetchMovies() {
    this.setState({ loading: true }, () => {
      movieAPI.getMovies()
        .then((response) => this.setState({ movies: response, loading: false }));
    })
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />
    return (
      <div data-testid="movie-list">
        <h1>Movie List</h1>
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
