import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

componentDidMount() {
  // faz a requisição (API local não precisa do JSON) e muda o valor do estado
  movieAPI.getMovies().then((movies) => this.setState({
    movies,
  }))
}

  render() {
    const { movies } = this.state;
    if (movies.length === 0) return <Loading />;
    // se o movies.length === 0 Loading else movies.map
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
