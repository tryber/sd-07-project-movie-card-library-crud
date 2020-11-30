import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false
    }
  }

  async componentDidMount() {
    this.setState({loading: true}, async () => {
      const movies = await movieAPI.getMovies();
      this.setState({
      movies: movies,
      loading: false
    })
    })
    
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {loading && <Loading/>}
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
