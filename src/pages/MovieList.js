import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components/index';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loadingMsg: true,
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const response = await movieAPI.getMovies();
    this.setState({
      movies: response,
      loadingMsg: false,
    });
  }

  render() {
    const { movies } = this.state;

    if (this.state.loadingMsg === true) return <Loading />;

    return (
      <div>
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
        <div className="add-card-container">
          <Link className="link" to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
