import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
/* import movies from '../services/movieData'; */

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const fetchPromise = await movieAPI.getMovies();
    this.attState(fetchPromise);
  }

  attState(array) {
    this.setState({
      movies: array,
    });
  }

  moviesList() {
    const { movies } = this.state;
    return (
      <div className="movie-list" data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }

  render() {
    if (this.state.movies.length === 0) {
      return (<Loading />);
    }
    return (
      <div>
        {this.moviesList()}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
