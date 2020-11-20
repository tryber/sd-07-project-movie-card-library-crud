import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

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

  async fetchMovies() {
    this.setState({ loading: true }, async () => {
      const moviesReturn = await movieAPI.getMovies();
      this.setState({
        movies: moviesReturn,
        loading: false,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list" className="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        {loading ? (
          <Loading />
        ) : (
          movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
        )}
      </div>
    );
  }
}

export default MovieList;
