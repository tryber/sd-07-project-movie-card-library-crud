import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';
import { Link } from 'react-router-dom';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    }
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState(
      async () => {
        const response = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: [...response],
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading ? (
                <Loading />
              ) : movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to={{ pathname:'/movies/new' }}>
        ADICIONAR CARTÃO
        </Link>
      </div>
    );
  }
}

export default MovieList;
