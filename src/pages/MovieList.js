import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MovieCard, Loading } from '../components/';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.fetchMovies = this.fetchMovies.bind(this);

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  // List Movies
  async fetchMovies() {
    this.setState({ loading: true });
    const data = await movieAPI.getMovies();
    this.setState({ movies: data, loading: false });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />;
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
