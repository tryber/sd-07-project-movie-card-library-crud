import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      carregou: false,
    };
  }

  componentDidMount() {
    movieAPI
      .getMovies()
      .then((json) => this.setState({ movies: json, carregou: true }));
  }

  render() {
    if (this.state.carregou === false) {
      return <Loading />;
    }

    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
