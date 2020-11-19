import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components/index.js';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.handleLoading = this.handleLoading.bind(this);

    this.state = {
      movies: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.fetchCards();
  }

  handleLoading() {
    return this.state.isLoading && <Loading />;
  }

  fetchCards() {
    this.setState({ isLoading: true },
      async () => {
        const arrayMovies = await getMovies();
        this.setState({ movies: arrayMovies, isLoading: false });
      });
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        { this.handleLoading() }
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
