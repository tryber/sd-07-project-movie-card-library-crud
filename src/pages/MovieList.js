import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      movies: '',
      loading: true,
    }
  }

  fetchMovies() {
    this.setState( async () => {
      const movieslist = await movieAPI.getMovies();
      this.setState({ movies: movieslist, loading: false });
    });
  }

  componentDidMount() {    
    this.fetchMovies();
  }

  render() {
    const { movies, loading } = this.state;
      return (
      <div>
        {loading ? <Loading /> : 
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div> }
      </div>
    );
  }
}

export default MovieList;
