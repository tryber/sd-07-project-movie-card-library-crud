import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading.js';
import '../App.css';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    movieAPI.getMovies().then((result) => this.setState({ movies: result, loading: false }));
  }
  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list">
        <header className="movie-card-header">
          <h1 className="page-title">Movie Card Library</h1>
        </header>
        <div className="grid">
          <div className="item">
            {loading ? (
            <Loading />
          ) : (
          movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
          )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieList;
