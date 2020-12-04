import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';



class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
    };
  }

  async getMovies() {
    const moviesData = await movieAPI.getMovies();
    this.setState({ movies: moviesData, loading: false });
  }

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { movies, loading } = this.state;

    if (!loading) {
      return (
        <div data-testid="movie-list">
          {movies.map((movie) =><MovieCard key={movie.title} movie={movie} />)}
        </div>
      );
    } return <Loading />;
  }
}

export default MovieList;
