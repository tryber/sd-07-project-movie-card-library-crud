import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    movieAPI.getMovies().then(data => this.setState({ movies: data }));
  }

  // componentDidMount() {
  //   const allMovies = movieAPI.getMovies().then(data => data);
  //   this.setState({
  //     movies: allMovies
  //   })
  // }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    return (
      movies.length === 0 ?
        <Loading /> :
        (
          <div data-testid="movie-list">
            {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
          </div>
        )
    );
  }
}

export default MovieList;
