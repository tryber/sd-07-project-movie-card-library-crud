
import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';


import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.loadingPag();
  }

  loadingPag() {
    this.setState(async () => {
      const listMovie = await movieAPI.getMovies();
      this.setState({ movies: listMovie, loading: false })
    })
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list">
        {loading ? (<Loading />) :
        movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
