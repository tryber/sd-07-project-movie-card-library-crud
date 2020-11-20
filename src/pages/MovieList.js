import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);

    this.state = {
      movies: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.fetchMovie()
  }

  fetchMovie() {
    this.setState({ loading: true }, async () => {
      const fetch = await movieAPI.getMovies();
      this.setState({
        movies: fetch,
        loading: false,
      });
    });
  }

  render() {
    const { loading, movies } = this.state;

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : (
          movies.map((movie) => <MovieCard key={movie.title} movie={movie} />))}
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
