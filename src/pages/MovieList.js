import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components/index';

import * as movieAPI from '../services/movieAPI';
import movies from '../services/movieData';

class MovieList extends Component {
  constructor() {
    super();

    this.rechargeMovies = this.rechargeMovies(this);

    this.state = {
      allMovies: [],
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.saveMovies(movies);
  }

  async rechargeMovies() {
    const movieList = await movieAPI.getMovies();
    this.setState((previousState) => ({
      allMovies: [...previousState.allMovies, ...movieList],
      loading: false,
    }));
  }

  render() {
    const { allMovies, loading } = this.state;

    // Render Loading here if the request is still happening
    if (loading) {
      return <Loading />
    }

    return (
      <div data-testid="movie-list">
        {allMovies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
