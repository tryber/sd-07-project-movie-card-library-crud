import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const result = await movieAPI.getMovies();
    this.setState({ movies: result, isLoading: false });
  }
  render() {
    const { movies } = this.state;
    if (this.state.isLoading) return <Loading />;


    return (
      <div data-testid="movie-list" className="movie-list" >
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <div className="div-button">
          <Link className="classic-button" to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
