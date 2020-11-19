import React, { Component } from 'react';
import { loading, MovieCard } from '../components/index'
//import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: false
    };
  }

  fetchMovies() {
    this.setState({ loading: true }, async () => {
      const data  = await movieAPI.getMovies();
      this.setState({ movies: data, loading: false });
    });
  }

  componentDidMount() {
    this.fetchMovies();
  }
  render() {
    const { movies } = this.state;
    console.log("state", this.state);

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
