import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();
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
      const data = await movieAPI.getMovies();
      this.setState({ movies: data, loading: false });
    });
  }
  render() {
    const { movies, loading } = this.state;

    let option;
    if (loading) {
      option = <p>Carregando...</p>;
    } else {
      option = (<div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>);
    }
    return (
      <div>
        { option}
      </div>

    );
  }
}

export default MovieList;
