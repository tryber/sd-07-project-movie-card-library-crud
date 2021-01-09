import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
// import getMovies from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      // getMovies: getMovies(),
      loaded: false,
    };
  }

  componentDidMount() {
    console.log('Did mount');
    this.getMovies();
  }
  // como isso veio parar aqui desde o movieAPI? porque funciona?
  async getMovies() {
    const moviesAPI = await movieAPI.getMovies();
    this.setState({ movies: moviesAPI, loaded: true });
  }

  render() {
    const { movies, loaded } = this.state;

    // Render Loading here if the request is still happening
    if (loaded) {
      return (
        <div data-testid="movie-list">
          <div>Movie Card Library CRUD teste</div>
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      );
    }
    return <Loading />;
  }
}

export default MovieList;
