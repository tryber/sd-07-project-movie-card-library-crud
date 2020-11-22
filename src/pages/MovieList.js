import React, { Component } from 'react';
import {Loading, MovieCard} from '../components/index'

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
   const response = await movieAPI.getMovies();
   this.setState({movies: response});
  }

  render() {
    const { movies } = this.state;
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list" className="movie-list">
        {
          movies.length === 0 ? <Loading /> :
          movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
        }
      </div>
    );
  }
}

export default MovieList;
