import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.moviesFromData = this.moviesFromData.bind(this);

    this.state = {
      movies: [],
      loading: true,
    }
  }

  async moviesFromData() {
    const dataMovies = await movieAPI.getMovies() 
    this.setState({ movies: dataMovies, loading: false });
  }

  componentDidMount() {
    this.moviesFromData();
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening 

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
