import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };

    this.renderMovieList = this.renderMovieList.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const requestMovie = await movieAPI.getMovies();
    this.setState({
      movies: requestMovie,
    });
  }

  renderMovieList() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        {(movies.length === 0) ? <Loading /> : this.renderMovieList()}
      </div>
    );
  }
}

export default MovieList;
