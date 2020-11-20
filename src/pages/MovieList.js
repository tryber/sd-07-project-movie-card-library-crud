import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchAPIMovie = this.fetchAPIMovie.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }
  componentDidMount() {
    this.fetchAPIMovie();
  }

  async fetchAPIMovie() {
    const { getMovies } = movieAPI;
    this.setState(
      { loading: true },
      async () => {
        const movie = await getMovies();
        this.setState({
          loading: false,
          movies: movie,
        });
      });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading ? <Loading />
        : movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
