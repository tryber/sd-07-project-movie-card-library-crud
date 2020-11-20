import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

  componentDidMount() {
    movieAPI.getMovies()
    .then((movies) => this.setState({ movies, loading: false }));
  }

  render() {
    const { movies } = this.state;


    return (
    this.state.loading ? <Loading /> : <div data-testid="movie-list">
      {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      <Link to="/movies/new" >ADICIONAR CARTÃO</Link>
    </div>
    );
  }
}

export default MovieList;
