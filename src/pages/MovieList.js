import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components/index';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: undefined,
      loading: true,
    }
  }

  async requestMovies() {
    const movieList = await movieAPI.getMovies();
    this.setState({ movies: movieList })
  }

  componentDidMount() {
    this.requestMovies()
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div>
        <div data-testid="movie-list">
          {movies ? movies.map((movie) => <MovieCard key={movie.title} movie={movie} />) : <Loading />}
        </div>
        {movies ? <Link to="/movies/new"><h3>ADICIONAR CARTÃO</h3></Link> : null}
      </div>
    );
  }
}

export default MovieList;
