import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import Header from './Header';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.get = this.get.bind(this);
    this.state = {
      movies: [],
      movieList: false,
    };
  }

  componentDidMount() {
    this.get();
  }

  async get() {
    const fetch = await movieAPI.getMovies();
    this.setState({ movies: fetch, movieList: true });
  }

  render() {
    const { movies, movieList } = this.state;

    return (
      <div data-testid="movie-list">
        <Header />
        {movieList === true ? (
          <div className="movie-list">
            {movies.map((movie) => (
              <MovieCard key={movie.title} movie={movie} />
            ))}
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default MovieList;
