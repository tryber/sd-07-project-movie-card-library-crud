import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { MovieCard, Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      movies: [],
    };

    this.renderMovieList = this.renderMovieList.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState({ loading: true }, async () => {
      const requestReturn = await movieAPI.getMovies();
      this.setState(({ movies }) => ({
        loading: false,
        movies: [...movies, ...requestReturn],
      }));
    });
  }
  renderMovieList() {
    return (
      <div>
        <div data-testid="movie-list" className="movie-list">
          {this.state.movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
  render() {
    const { loading } = this.state;

    return (
      <div className="movies">
        <div>{loading ? <Loading /> : this.renderMovieList()}</div>
        <Link className="btn waves-effect waves-light add-movie" to="/movies/new">
          ADICIONAR CARTÃO
        </Link>
      </div>
    );
  }
}

export default MovieList;
