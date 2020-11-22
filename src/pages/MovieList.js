import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      isLoading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState({ isLoading: true }, async () => {
      const returnedElements = await movieAPI.getMovies();
      console.log(returnedElements);
      this.setState(({ movies }) => ({
        isLoading: false,
        movies: [...movies, ...returnedElements],
      }));
    });
  }

  render() {
    const { movies, isLoading } = this.state;

    return (
      <div data-testid="movie-list">
        {isLoading ? <Loading /> : movies.map((movie) => <MovieCard
          key={movie.title}
          movie={movie}
        />)}
        <Link to="/movies/new" >ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
