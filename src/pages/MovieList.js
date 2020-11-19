import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
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
    this.fetchMovies();
  }

  renderMovies() {
    const { movies } = this.state;
    return movies.map((movie) => <MovieCard key={movie.title} movie={movie} />);
  }

  fetchMovies() {
    this.setState({ loading: true }, async () => {
      const reqs = await movieAPI.getMovies();
      this.setState({ movies: reqs, loading: false });
    });
  }

  render() {
    const { loading } = this.state;

    // Render Loading here if the request is still happening
    const loadingElement = <h1>Carregando...</h1>;
    return (
      <div data-testid="movie-list">
        {loading ? loadingElement : this.renderMovies()}
      </div>
    );
  }
}

export default MovieList;
