import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    this.setState(
      { loading: true },
    async () => {
      const APImovies = await movieAPI.getMovies();
      this.setState({
        loading: false,
        movies: APImovies,
      });
    },
    );
  }

  render() {
    const { movies } = this.state;

    if (this.state.loading === true) return <Loading />;

    return (
      <div>
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
        <div>
          <span><Link to="/movies/new">ADICIONAR CARTÃO</Link></span>
        </div>
      </div>
    );
  }
}

export default MovieList;
