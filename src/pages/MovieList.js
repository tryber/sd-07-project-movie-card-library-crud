import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.callAPI = this.callAPI.bind(this);

    this.state = {
      loading: true,
      movies: [],
    }
  }

  callAPI() {
    this.setState({ loading: true }, async () => {
      const movies = await movieAPI.getMovies();
      this.setState(( previousState ) => ({
        loading: false,
        movies: [...previousState.movies, ...movies],
      }));
    });
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
