import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading.js'

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.renderMovies();
  }

  async renderMovies() {
    const result = await movieAPI.getMovies();
    this.setState({ movies: result, loading: false });
  }

   // renderMovies() {
  //   this.setState({ loading: true }, async () => {
  //     const result = await movieAPI.getMovies();
  //     this.setState({ movies: result, loading: false });
  //   });
  // }


  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list">
        <header className="movie-card-header">
          <h1 className="page-title">Movie Card Library</h1>
        </header>
        <div className="grid">
          <div className="item">
            {loading ?
              <Loading /> : movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
            <div className="div-area-input">
              <button>
                <Link className="red" to="/movies/new">ADICIONAR CARTÃO</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieList;
