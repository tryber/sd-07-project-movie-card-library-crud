import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.updateState = this.updateState.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const fetchedMovieList = await movieAPI.getMovies();
    this.updateState(fetchedMovieList);
  }

  updateState(movies) {
    this.setState({
      movies,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list" className="movie-list">
        {(loading)
          ? <Loading />
          : movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
