import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {MovieCard, Loading} from '../components';


import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie() {
    this.setState({ loading: true }, async () => {
      const pegamovie = await movieAPI.getMovies();
      this.setState({ loading: false, movies: pegamovie });
    });
  }
  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
        <Link className="link-movie-card" to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
