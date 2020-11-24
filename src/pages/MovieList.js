import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.FuncMovies = this.FuncMovies.bind(this);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.FuncMovies();
  }

  async FuncMovies() {
    const nemMovies = await movieAPI.getMovies();
    this.setState({ movies: nemMovies });
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        {movies.length === 0 ? <Loading /> : movies.map((movie) =>
          <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
