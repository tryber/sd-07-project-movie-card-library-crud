import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components/index';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.loadingMovies = this.loadingMovies.bind(this);
  }

  componentDidMount() {
    this.loadingMovies();
  }

  async loadingMovies() {
    const { getMovies } = movieAPI;
    const movies = await getMovies();

    this.setState({
      movies,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div>
        <div data-testid="movie-list" className="movie-list">
          {loading ?
            <Loading /> :
            movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
        <Link to="/movies/new" className="add-card" >ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
