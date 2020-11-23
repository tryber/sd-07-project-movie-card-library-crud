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
    this.listMovies();
  }


  listMovies() {
    movieAPI.getMovies()
    .then((resolve) => this.setState({ movies: resolve, loading: false }))
    .catch((error) => console.log('Promises rejected: ', error));
  }


  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    // if (true) return <Loading />;
    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
