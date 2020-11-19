import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  Loading,
  MovieCard
} from '../components/index';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = { movies: [], load: true };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const response = await movieAPI.getMovies();
    this.setState({ load: false, movies: response });
  }

  render() {
    const { movies, load } = this.state;

    if (load) return (<Loading />);

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
