import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isloading: false,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState({ isloading: true });
    const fetchedMovies = await movieAPI.getMovies();
    this.setState({ movies: fetchedMovies, isloading: false });
  }

  render() {
    const { movies, isloading } = this.state;

    return (
      <div>
        {isloading ? (
          <Loading />
          ) : (
            <div className="movie-list" data-testid="movie-list">
              {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
              <Link to={'/movies/new'}>ADICIONAR CARTÃO</Link>
            </div>
          )
        }
      </div>
    );
  }
}

export default MovieList;
