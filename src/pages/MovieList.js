import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      estado: false,
    };
  }

  componentDidMount() {
    this.updateMovie();
  }

  async updateMovie() {
    const getMovie = await movieAPI.getMovies();
    this.setState({
      movies: getMovie,
      estado: true,
    });
  }
  render() {
    const { movies, estado } = this.state;

    // Render Loading here if the request is still happening

    return (
      estado ? (
        <div data-testid="movie-list">
          <div>Movie List</div>
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>) : <Loading />
    );
  }
}

export default MovieList;
