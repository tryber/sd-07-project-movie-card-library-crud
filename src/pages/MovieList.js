import React, { Component } from 'react';
import { MovieCard, Loading } from '../components/index';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = { movies: [] };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  renderMovies() {
    const { movies } = this.state;
    return movies.map((movie) => {
      return <MovieCard key={movie.title} movie={movie} />;
    });
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
    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : this.renderMovies()}
      </div>
    );
  }
}

export default MovieList;
