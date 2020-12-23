import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';
import { Link } from 'react-router-dom';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    }
  }
 
  componentDidMount() {
    movieAPI.getMovies()
    .then((response) => this.setState({movies: response, loading: false}));
  }
  
  render() {
    const { loading, movies } = this.state;
    if (loading === true) { return <Loading />; }

    return (
      <div>
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      </div>
    );
  }
}
export default MovieList;
