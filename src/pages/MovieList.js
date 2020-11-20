import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.func = this.func.bind(this);
    this.state = {
      movies: [],
      movieList: false,
    }
  }
  componentDidMount() {
    this.func();
  }

  async func() {
    const fetch = await movieAPI.getMovies();
    this.setState({
      movies: fetch,
      movieList: true,
    });
  }

  render() {
    const { movies, movieList } = this.state;
    // Render Loading here if the request is still happening
    return movieList ? (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    ) : (
      <Loading />
    );
  }
}

export default MovieList;
