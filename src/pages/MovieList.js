import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { MovieCard, Loading } from '../components/index';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMoviesRequest = this.fetchMoviesRequest.bind(this);

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMoviesRequest();
  }

  fetchMoviesRequest() {
    this.setState(
      {
        loading: true,
      },
      async () => {
        const response = await movieAPI.getMovies();
        this.setState((prevState) => ({
          loading: false,
          movies: [...prevState.movies, ...response],
        }));
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading ? (
          <Loading />
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
