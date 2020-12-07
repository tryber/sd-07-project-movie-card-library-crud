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
    };
  }
  componentDidMount() {
    const moviesReq = movieAPI.getMovies();
    moviesReq.then((result) => { this.setState({ movies: result }); });
  }
  render() {
    const { movies } = this.state;
    if (movies.length > 0) {
      return (
        <div data-testid="movie-list">
          <Link to="/movies/new">
            ADICIONAR CARTÃO
          </Link>
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      );
    }
    return (<Loading />);
  }
}

export default MovieList;
