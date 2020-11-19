import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loaded: false,
    };
  }

  componentDidMount() {
    movieAPI
      .getMovies()
      .then((movies) => this.setState({ movies, loaded: true }));
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if (this.state.loaded) {
      return (
        <div data-testid="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      );
    }
    return <Loading />;
  }
}

export default MovieList;
