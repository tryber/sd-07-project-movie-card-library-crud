import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.getAPIMovies = this.getAPIMovies.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getAPIMovies();
  }

  async getAPIMovies() {
    const arrayOfMovies = await movieAPI.getMovies();
    this.setState({ movies: arrayOfMovies, loading: false });
  }


  render() {
    const { loading, movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        { loading ? <Loading /> :
          movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
