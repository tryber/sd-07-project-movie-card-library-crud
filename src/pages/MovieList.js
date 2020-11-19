import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isFetching: true,
    }
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const movieList = await movieAPI.getMovies();
    this.setState({
      movies: movieList,
      isFetching: false,
    })
  }

  render() {
    const { movies, isFetching } = this.state;

    if (isFetching) return <Loading />;

    console.log(this.state.movies);

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
