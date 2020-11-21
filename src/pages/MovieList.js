import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components/index';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movies: [],
    };
    this.requestApiMovie = this.requestApiMovie.bind(this);
  }

  componentDidMount() {
    this.requestApiMovie();
  }

  async requestApiMovie() {
    this.setState({
      loading: false,
      movies: await movieAPI.getMovies(),
    });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />;

    return (
      <div>
        <Link to="/movies/new" className="add-movie-link" >ADICIONAR CARTÃO</Link>
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
