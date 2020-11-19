import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.get = this.get.bind(this);
    this.state = {
      movies: [],
      Movielist: false,
    };
  }
  componentDidMount() {
    this.get();
  }

  async get() {
    const fetch = await movieAPI.getMovies();
    this.setState({movies: fetch, Movielist: true});
  }

  render() {
    const { movies, Movielist } = this.state;

    return (
      <div data-testid="movie-list">
        {(Movielist) ? movies.map((movie) => <MovieCard key={movie.title} movie={movie} />) : <Loading />}
      </div>
    );
  }
}

export default MovieList;
