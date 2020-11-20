import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    const allMovies = async () => {
      const list = await movieAPI.getMovies();
      this.setState({ movies: list });
    };
    allMovies();
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <span><Link to={'/movies/new'}>ADICIONAR CARTÃO</Link></span>
        {movies.length <= 0 &&
        <Loading />
         }
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
