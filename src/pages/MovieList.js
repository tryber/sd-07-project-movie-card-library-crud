import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isloading: false,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState({ isloading: true });
    const fetchedMovies = await movieAPI.getMovies();
    console.log(fetchedMovies);
    this.setState({ movies: fetchedMovies, isloading: false });
  }

  render() {
    const { movies, isloading } = this.state;

    return (
      <div data-testid="movie-list">
        {isloading ? (
          <div>Carregando...</div>
          ) : (
            movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
          )
        }
      </div>
    );
  }
}

export default MovieList;
