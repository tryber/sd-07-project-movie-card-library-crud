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
      loadingText: false,
    };
    this.gettingMovies = this.gettingMovies.bind(this);
  }

  componentDidMount() {
    this.gettingMovies();
  }

  async gettingMovies() {
    this.setState({
      loadingText: true,
    });
    const moviesList = await movieAPI.getMovies();
    this.setState({
      movies: moviesList,
      loadingText: false,
    });
  }

  render() {
    const { movies } = this.state;
    if (this.state.loadingText) {
      return (<div><Loading /></div>);
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
