import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import '../styles/pages/MovieList.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState({ loading: true }, async () => {
      const moviesJson = await movieAPI.getMovies();
      const movies = [...moviesJson];
      this.setState({
        movies,
        loading: false,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="button-add-movie-link-container">
            <Link className="button-add-movie-link" to="/movies/new">
              ADICIONAR CARTÃO
            </Link>
            <div className="movie-list" data-testid="movie-list">
              {movies.map((movie) => (
                <MovieCard key={movie.title} movie={movie} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MovieList;
