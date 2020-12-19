import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';


class MovieList extends Component {
  constructor() { // 1
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() { // 3
  // faz a requisição (API local não precisa do JSON) e muda o valor do estado
    movieAPI.getMovies().then((movies) => this.setState({
      movies,
    }));
  }

  render() {
    const { movies } = this.state;
    if (movies.length === 0) return <Loading />; // 2
    // se o movies.length === 0 Loading else movies.map
    return ( // 4
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
