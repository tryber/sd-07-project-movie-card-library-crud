import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
/* import movies from '../services/movieData'; */

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const fetchPromise = await movieAPI.getMovies();
    this.attState(fetchPromise);
  }

  attState(array) {
    this.setState({
      movies: array,
    });
  }

  moviesList() {
    const { movies } = this.state;
    return (
      <div className="movie-list" data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }

  render() {
    console.table(this.state.movies);

    // Render Loading here if the request is still happening

    return (
      <div>
        {this.state.movies.length === 0 ? <Loading /> : this.moviesList()}
      </div>
    );
  }
}

export default MovieList;
