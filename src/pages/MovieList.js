import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [4, 4],
    }
  }

  // componentDidMount() {
  //   async () => {
  //     const returnedMovies = await movieAPI.getMovies();
  //     console.log(movies)
  //     this.setState({ movies: movies });
  //   }
  // }

  render() {
    const { movies } = this.state;

    if (this.state.movies.length === 0) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
