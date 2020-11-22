import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components/index';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() { this.fetchMovies(); }

  async fetchMovies() {
    this.setState({
      movies: await movieAPI
        .getMovies().then((element) => element),
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list">
        <Link to="/movies/new" >ADICIONAR CARTÃO</Link>
        { loading ? <Loading /> : movies.map((movie) =>
          <MovieCard key={movie.title} movie={movie} />,
        )}
      </div>
    );
  }
}

export default MovieList;
